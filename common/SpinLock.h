#pragma once

#include <atomic>

class SpinLock {
public:
  void lock() {
    // test and test-and-set
    while (true) {
      if (!_flag.exchange(true, std::memory_order::acquire)) {
        return;
      }
      while (_flag.load(std::memory_order::relaxed)) {
        // save power by using the platform-specific pause instruction
        // TODO: Find all the ones we care about and add them
#ifdef __GNUC__
        __builtin_ia32_pause();
#endif
      }
    }
  }

  bool tryLock() {
    return !_flag.exchange(true, std::memory_order::acquire);
  }

  void unlock() {
    _flag.store(false, std::memory_order_release);
  }

private:
  std::atomic<bool> _flag{false};
};
