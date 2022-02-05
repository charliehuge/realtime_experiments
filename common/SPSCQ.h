#pragma once

#include <atomic>
#include <functional>
#include <memory>

// Bounded single producer, single consumer queue. Fails on push when full.
template<class T, size_t Capacity>
class SPSCQ {
public:
  static_assert(Capacity > 0, "Capacity must be greater than zero.");
  static_assert((Capacity & (Capacity - 1)) == 0, "Capacity must be a power of two.");

  SPSCQ() : capacity(Capacity) {}

  const size_t capacity;

  constexpr size_t mod(size_t i) {
    return (i & (Capacity - 1));
  }

  size_t size() const {
    return _size.load();
  }

  bool push(const T& item) {
    if (_size.load(std::memory_order::acquire) >= capacity) {
      return false;
    }

    _data[_tail] = item;
    _tail = mod(++_tail);
    _size.fetch_add(1, std::memory_order::release);
    return true;
  }

  bool popLast(T& item) {
    const auto size = _size.load(std::memory_order::acquire);

    if (size == 0) {
      return false;
    }

    const auto lastIdx = mod(_head + size - 1);
    item = std::move(_data[lastIdx]);
    _head = mod(lastIdx + 1);
    _size.fetch_sub(size, std::memory_order::release);
    return true;
  }

  bool pop(T& item) {
    if (_size.load(std::memory_order::acquire) == 0) {
      return false;
    }

    item = _data[_head];
    _head = mod(++_head);
    _size.fetch_sub(1, std::memory_order::release);
    return true;
  }

private:
  T _data[Capacity];
  std::atomic<size_t> _size{0};
  size_t _head{0};
  size_t _tail{0};
};
