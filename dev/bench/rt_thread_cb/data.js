window.BENCHMARK_DATA = {
  "lastUpdate": 1644147851743,
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
      },
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
          "id": "ebc223c30dcb0f8092d839084701df04927dbd59",
          "message": "Update README.md",
          "timestamp": "2022-02-06T06:43:09-05:00",
          "tree_id": "3ccbf3082bff5e61969245c68535807cf5443e59",
          "url": "https://github.com/charliehuge/realtime_experiments/commit/ebc223c30dcb0f8092d839084701df04927dbd59"
        },
        "date": 1644147850834,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndSpinlock<CbData>>",
            "value": 25.627004345079072,
            "unit": "ns/iter",
            "extra": "iterations: 27605713\ncpu: 25.352875326929613 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndSPSCQ<CbData>>",
            "value": 3.6268267991440335,
            "unit": "ns/iter",
            "extra": "iterations: 193157319\ncpu: 3.6227143947882197 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 52.13365606753008,
            "unit": "ns/iter",
            "extra": "iterations: 13511635\ncpu: 51.78061722360026 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndSpinlock<CbData>>",
            "value": 190.9979901343209,
            "unit": "ns/iter",
            "extra": "iterations: 3501229\ncpu: 190.07611327336778 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndSPSCQ<CbData>>",
            "value": 264.20348178825395,
            "unit": "ns/iter",
            "extra": "iterations: 2671271\ncpu: 261.9609916028738 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 377.8739630011144,
            "unit": "ns/iter",
            "extra": "iterations: 1868975\ncpu: 376.33055551839914 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndSpinlock<CbData>>",
            "value": 12.860749945264404,
            "unit": "ns/iter",
            "extra": "iterations: 54443440\ncpu: 12.858412326627425 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndSPSCQ<CbData>>",
            "value": 9.497412818921545,
            "unit": "ns/iter",
            "extra": "iterations: 73592259\ncpu: 9.497391566686382 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 32.908016722624986,
            "unit": "ns/iter",
            "extra": "iterations: 21275128\ncpu: 32.906382513891316 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}