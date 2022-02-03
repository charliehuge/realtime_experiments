#pragma once

#include <atomic>
#include <functional>
#include <memory>

// Bounded single producer, single consumer queue. Fails on push when full.
template<class T>
class SPSCQ {
public:
  explicit SPSCQ(size_t capacity) : capacity(capacity), _data(new T[capacity]) {}

  const size_t capacity;

  size_t size() const {
    return _size.load();
  }

  bool push(const T& item) {
    if (_size >= capacity) {
      return false;
    }

    _data[_tail] = item;
    _tail = (++_tail) % capacity;
    _size.fetch_add(1);
    return true;
  }

  bool pop(T& item) {
    if (_size == 0) {
      return false;
    }

    item = _data[_head];
    _head = (++_head) % capacity;
    _size.fetch_sub(1);
    return true;
  }

private:
  std::unique_ptr<T[]> _data;
  std::atomic<size_t> _size{0};
  size_t _head{0};
  size_t _tail{0};
};
