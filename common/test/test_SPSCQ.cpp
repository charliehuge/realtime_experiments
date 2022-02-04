#include <thread>
#include <gtest/gtest.h>
#include "../SPSCQ.h"

TEST(SPSCQ, PushPop) {
  struct Stuff {
    size_t a;
    float b;

    inline bool operator==(const Stuff& other) const {
      return a == other.a && b == other.b;
    }
  };

  const size_t capacity = 2048;
  SPSCQ<Stuff, capacity> q;
  ASSERT_EQ(q.capacity, capacity);
  ASSERT_EQ(q.size(), 0);

  const Stuff expectedStuff{1234, 9876.543f};

  // one thread pushes while the other pops
  std::thread pushThread([&q, &expectedStuff]() {
    size_t numPushes = 0;
    while (numPushes < capacity) {
      ASSERT_TRUE(q.push(expectedStuff));
      ++numPushes;
      std::this_thread::yield();
    }
  });

  {
    size_t numPops = 0;
    while (numPops < capacity) {
      Stuff stuff{0};
      if (q.pop(stuff)) {
        ASSERT_EQ(stuff, expectedStuff);
        ++numPops;
        std::this_thread::yield();
      }
    }
  }

  pushThread.join();
}
