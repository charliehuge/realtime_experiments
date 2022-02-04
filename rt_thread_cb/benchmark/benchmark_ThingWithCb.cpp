#include <thread>
#include <benchmark/benchmark.h>
#include "../ThingWithCb.h"

struct CbData {
  int a{1};
  float b{3.456f};
  size_t c{1024};
};

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

  state.counters["sizeof(thing)"] = sizeof(thing);
}

BENCHMARK(ThingWithCb_SetUnset<ThingWithCbAndSpinlock<CbData>, 256>);
BENCHMARK(ThingWithCb_SetUnset<ThingWithCbAndSPSCQ<CbData>, 256>);
BENCHMARK(ThingWithCb_SetUnset<ThingWithCbAndEyalAmirFifo<CbData>, 256>);

template<class ConcreteThingWithCb, size_t ProcessCount>
static void ThingWithCb_Process(benchmark::State& state) {
  ConcreteThingWithCb thing;

  std::atomic<bool> go{true};
  std::thread setUnsetThread([&thing, &go]() {
    while (go) {
      thing.setCb([](const auto&) {});
      thing.setCb(nullptr);
    }
  });

  for (auto _: state) {
    for (size_t i = 0; i < ProcessCount; ++i) {
      thing.rtProcess([]() {}, []() {});
    }
  }

  go = false;
  setUnsetThread.join();

  state.counters["sizeof(thing)"] = sizeof(thing);
}

BENCHMARK(ThingWithCb_Process<ThingWithCbAndSpinlock<CbData>, 256>);
BENCHMARK(ThingWithCb_Process<ThingWithCbAndSPSCQ<CbData>, 256>);
BENCHMARK(ThingWithCb_Process<ThingWithCbAndEyalAmirFifo<CbData>, 256>);
