#pragma once

#include <atomic>

template<class T>
class Trap {
public:
  enum class State : uint8_t {
    Empty,
    Full,
    InUse
  };

  State getState() const {
    return _state.load();
  }

  bool trap(const T& thing) {
    auto current = _state.load(std::memory_order::acquire);

    if (current != State::Empty) {
      return false;
    }

    if (_state.compare_exchange_weak(current, State::InUse, std::memory_order_acquire)) {
      _data = thing;
      _state.store(State::Full, std::memory_order::release);
      return true;
    }

    return false;
  }

  bool release(T& thing) {
    auto current = _state.load(std::memory_order::acquire);

    if (current != State::Full) {
      return false;
    }

    if (_state.compare_exchange_weak(current, State::InUse, std::memory_order::acquire)) {
      thing = std::move(_data);
      _state.store(State::Empty, std::memory_order::release);
      return true;
    }

    return false;
  }

private:
  T _data;

  std::atomic<State> _state{State::Empty};
};
