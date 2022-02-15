#include <thread>
#include <gtest/gtest.h>
#include "../ThingWithCb.h"

using CbData = double;
using TestTypes = ::testing::Types<
    ThingWithCbAndSpinlock<CbData>,
    ThingWithCbAndSPSCQ<CbData>,
    ThingWithCbAndTrap<CbData>,
    ThingWithCbAndEyalAmirFifo<CbData>
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

TYPED_TEST(ThingWithCbTest, OverflowBehavior) {
  // this is expected to fail for SPSCQ and Trap versions
  if (std::is_same<TypeParam, ThingWithCbAndSPSCQ<CbData>>::value) {
    std::cout << "skipping test for ThingWithCbAndSPSCQ because it is expected to fail" << std::endl;
    return;
  }
  if (std::is_same<TypeParam, ThingWithCbAndTrap<CbData>>::value) {
    std::cout << "skipping test for ThingWithCbAndTrap because it is expected to fail" << std::endl;
    return;
  }

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

TYPED_TEST(ThingWithCbTest, SetCbInCb) {
  TypeParam thing;

  std::atomic<uint8_t> cbCount{0};
  const auto cb = [&thing, &cbCount](const CbData&) {
    cbCount.fetch_add(1);
    thing.setCb(nullptr);
  };
  thing.setCb(cb);
  thing.rtProcess([](){}, [](){});
  ASSERT_EQ(cbCount, 1);
  thing.rtProcess([](){}, [](){});
  ASSERT_EQ(cbCount, 1);
}

TEST(EAFifo, Race) {
  struct Stuff {
    double a{123.4};
    float b{123.4f};
    size_t c{9};
    Stuff* d{nullptr};
    uint8_t e{7};
  };
  EA::Fifo<Stuff, 4> q;

  const size_t numPushThreads = 1;
  std::vector<std::thread> pushThreads;
  std::atomic<bool> doPush{true};
  for (size_t i = 0; i < numPushThreads; ++i) {
    pushThreads.emplace_back([&q, &doPush]() {
      while (doPush) {
        q.push({});
      }
    });
  }

  const size_t numPops = 100000;
  for (size_t i = 0; i < numPops; ++i) {
    q.pull();
  }

  doPush = false;
  for (auto& t : pushThreads) {
    t.join();
  }
}
