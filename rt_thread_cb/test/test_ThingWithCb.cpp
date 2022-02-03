#include <thread>
#include <gtest/gtest.h>
#include "../ThingWithCb.h"

using TestTypes = ::testing::Types<uint8_t, int, int64_t, float, double>;

template <class T>
class ThingWithCbAndSpinlockTest : public ::testing::Test {};

TYPED_TEST_SUITE(ThingWithCbAndSpinlockTest, TestTypes, );

TYPED_TEST(ThingWithCbAndSpinlockTest, Basics) {
  ThingWithCbAndSpinlock<TypeParam> thing;

  std::atomic<bool> go{true};
  std::thread rtThread([&thing, &go]() {
    while (go) {
      thing.rtProcess(
          []() {},
          []() {});
    }
  });

  std::this_thread::yield();

  const size_t expectedCbCount = 512;
  std::atomic<size_t> cbCount{0};
  thing.setCb([&cbCount](const TypeParam& cbData) {
    cbCount.fetch_add(1);
    EXPECT_EQ(cbData, TypeParam());
  });

  while (cbCount < expectedCbCount);

  go = false;
  rtThread.join();
}
