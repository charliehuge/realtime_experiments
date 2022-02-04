#include <thread>
#include <benchmark/benchmark.h>
#include "../ThingWithCb.h"

struct CbData {
  int a{1};
  float b{3.456f};
  size_t c{1024};
};

template<class ConcreteThingWithCb>
static void ThingWithCb_SetUnset(benchmark::State& state) {
  ConcreteThingWithCb thing;

  std::atomic<bool> go{true};
  std::thread rtThread([&thing, &go]() {
    while (go) {
      thing.rtProcess([]() {
        // spin for the specified time to simulate the audio thread doing some work before acquiring the cb
        const auto start = std::chrono::high_resolution_clock::now();
        const auto end = start + std::chrono::microseconds(500);
        while (std::chrono::high_resolution_clock::now() < end);
        }, []() {});
    }
  });

  for (auto _ : state) {
    thing.setCb([](const auto&) {});
    thing.setCb(nullptr);
  }

  go = false;
  rtThread.join();

  state.counters["sizeof(thing)"] = sizeof(thing);
}

BENCHMARK(ThingWithCb_SetUnset<ThingWithCbAndSpinlock<CbData>>);
BENCHMARK(ThingWithCb_SetUnset<ThingWithCbAndSPSCQ<CbData>>);
BENCHMARK(ThingWithCb_SetUnset<ThingWithCbAndEyalAmirFifo<CbData>>);
BENCHMARK(ThingWithCb_SetUnset<ThingWithCbAndMoodycamelReaderWriterQueue<CbData>>);

template<class ConcreteThingWithCb>
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
    thing.rtProcess([]() {}, []() {});
  }

  go = false;
  setUnsetThread.join();

  state.counters["sizeof(thing)"] = sizeof(thing);
}

BENCHMARK(ThingWithCb_Process<ThingWithCbAndSpinlock<CbData>>);
BENCHMARK(ThingWithCb_Process<ThingWithCbAndSPSCQ<CbData>>);
BENCHMARK(ThingWithCb_Process<ThingWithCbAndEyalAmirFifo<CbData>>);
BENCHMARK(ThingWithCb_Process<ThingWithCbAndMoodycamelReaderWriterQueue<CbData>>);

template<class ConcreteThingWithCb>
static void ThingWithCb_ProcessNoContention(benchmark::State& state) {
  ConcreteThingWithCb thing;
  thing.setCb([](const auto&) {});

  for (auto _: state) {
    thing.rtProcess([]() {}, []() {});
  }

  state.counters["sizeof(thing)"] = sizeof(thing);
}

BENCHMARK(ThingWithCb_ProcessNoContention<ThingWithCbAndSpinlock<CbData>>);
BENCHMARK(ThingWithCb_ProcessNoContention<ThingWithCbAndSPSCQ<CbData>>);
BENCHMARK(ThingWithCb_ProcessNoContention<ThingWithCbAndEyalAmirFifo<CbData>>);
BENCHMARK(ThingWithCb_ProcessNoContention<ThingWithCbAndMoodycamelReaderWriterQueue<CbData>>);
