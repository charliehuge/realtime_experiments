#include <thread>
#include <benchmark/benchmark.h>
#include "../ThingWithCb.h"

template<class ConcreteThingWithCb, size_t SetUnsetCount>
static void ThingWithCb_SetUnset(benchmark::State& state) {
  ConcreteThingWithCb thing;

  std::atomic<bool> go{true};
  std::thread rtThread([&thing, &go]() {
    while (go) {
      thing.rtProcess([]() {}, []() {});
    }
  });

  for (auto _ : state) {
    for (size_t i = 0; i < SetUnsetCount; ++i) {
      thing.setCb([](const auto&) {});
      thing.setCb(nullptr);
    }
  }

  go = false;
  rtThread.join();
}

struct CbData {
  int a{1};
  float b{3.456f};
  size_t c{1024};
};

BENCHMARK(ThingWithCb_SetUnset<ThingWithCbAndSpinlock<CbData>, 1024>);
