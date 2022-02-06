window.BENCHMARK_DATA = {
  "lastUpdate": 1644147398659,
  "repoUrl": "https://github.com/charliehuge/realtime_experiments",
  "entries": {
    "rt_thread_cb Benchmark": [
      {
        "commit": {
          "author": {
            "email": "charliehuge@users.noreply.github.com",
            "name": "Charlie Huguenard",
            "username": "charliehuge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6e10917babc296febb3f9b31397df25556a5b23",
          "message": "add benchmark workflow (#6)",
          "timestamp": "2022-02-06T06:35:35-05:00",
          "tree_id": "1b1bc1a871eff9321855492a10f5660a30a690b0",
          "url": "https://github.com/charliehuge/realtime_experiments/commit/e6e10917babc296febb3f9b31397df25556a5b23"
        },
        "date": 1644147398263,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndSpinlock<CbData>>",
            "value": 27.587334721159756,
            "unit": "ns/iter",
            "extra": "iterations: 25289913\ncpu: 27.372102861721984 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndSPSCQ<CbData>>",
            "value": 4.481021939185756,
            "unit": "ns/iter",
            "extra": "iterations: 158297443\ncpu: 4.453833786816126 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 51.86596839999993,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 50.31608999999997 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndSpinlock<CbData>>",
            "value": 184.58723666122788,
            "unit": "ns/iter",
            "extra": "iterations: 3836598\ncpu: 183.8185027464435 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndSPSCQ<CbData>>",
            "value": 210.44703107183128,
            "unit": "ns/iter",
            "extra": "iterations: 3714876\ncpu: 207.5947622477842 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 238.95556129151103,
            "unit": "ns/iter",
            "extra": "iterations: 2901772\ncpu: 236.80878442551642 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndSpinlock<CbData>>",
            "value": 13.417423927072052,
            "unit": "ns/iter",
            "extra": "iterations: 50479883\ncpu: 13.414726020660552 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndSPSCQ<CbData>>",
            "value": 11.070512263189542,
            "unit": "ns/iter",
            "extra": "iterations: 64042392\ncpu: 11.068913540893346 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 32.60714398061985,
            "unit": "ns/iter",
            "extra": "iterations: 22156975\ncpu: 32.59986979269505 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}