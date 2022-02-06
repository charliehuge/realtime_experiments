#include <thread>
#include <gtest/gtest.h>
#include "../Trap.h"

TEST(Trap, Basics) {
  using DataType = std::function<void()>;
  using TrapType = Trap<DataType>;
  TrapType trap;
  ASSERT_EQ(trap.getState(), TrapType::State::Empty);

  std::atomic<size_t> numCalls{0};
  // can store once
  ASSERT_TRUE(trap.trap([&numCalls]() {
    numCalls.fetch_add(1);
  }));
  // can't store more than once
  ASSERT_FALSE(trap.trap([](){}));

  // can release once
  {
    DataType fn;
    ASSERT_TRUE(trap.release(fn));
    ASSERT_EQ(numCalls.load(), 0);
    ASSERT_NE(fn, nullptr);
    fn();
    ASSERT_EQ(numCalls.load(), 1);
  }
  // can't release more than once
  {
    DataType fn;
    ASSERT_FALSE(trap.release(fn));
  }
}

TEST(Trap, MultiThread) {
  using DataType = std::function<void()>;
  using TrapType = Trap<DataType>;
  TrapType trap;

  std::thread releaseThread([&trap]() {
    DataType fn;
    while (!trap.release(fn));
    ASSERT_NE(fn, nullptr);
    fn();
    fn = nullptr;
    while (!trap.release(fn));
    ASSERT_EQ(fn, nullptr);
  });

  // store a function and expect it to get called some time after add
  std::atomic<size_t> numCalls{0};
  while (!trap.trap([&numCalls]() {
    numCalls.fetch_add(1);
  }));
  while (numCalls < 1);
  ASSERT_EQ(numCalls, 1);
  ASSERT_EQ(trap.getState(), TrapType::State::Empty);

  // store null and expect the trap to get emptied
  while (!trap.trap(nullptr));
  while (trap.getState() != TrapType::State::Empty);
  ASSERT_EQ(trap.getState(), TrapType::State::Empty);

  releaseThread.join();
}

