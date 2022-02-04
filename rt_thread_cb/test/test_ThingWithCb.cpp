#include <thread>
#include <gtest/gtest.h>
#include "../ThingWithCb.h"

using CbData = double;
using TestTypes = ::testing::Types<
    ThingWithCbAndSpinlock<CbData>,
    ThingWithCbAndSPSCQ<CbData>,
    ThingWithCbAndEyalAmirFifo<CbData>,
    ThingWithCbAndMoodycamelReaderWriterQueue<CbData>
    >;

template <class T>
class ThingWithCbTest : public ::testing::Test {};

TYPED_TEST_SUITE(ThingWithCbTest, TestTypes, );

TYPED_TEST(ThingWithCbTest, Basics) {
  TypeParam thing;

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
  thing.setCb([&cbCount](const CbData& cbData) {
    cbCount.fetch_add(1);
    EXPECT_EQ(cbData, CbData());
  });

  while (cbCount < expectedCbCount);

  go = false;
  rtThread.join();
}

// this is expected to fail for SPSCQ version
TYPED_TEST(ThingWithCbTest, OverflowBehavior) {
  TypeParam thing;

  // we know the queue sizes are <= 8
  for (size_t i = 0; i < 8; ++i) {
    thing.setCb([](const CbData&) {});
  }
  std::atomic<bool> calledLastCb;
  thing.setCb([&calledLastCb](const CbData&) {
    calledLastCb = true;
  });
  thing.rtProcess([](){}, [](){});
  ASSERT_TRUE(calledLastCb.load());
}
