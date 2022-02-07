window.BENCHMARK_DATA = {
  "lastUpdate": 1644256833837,
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
      },
      {
        "commit": {
          "author": {
            "email": "charlie.huguenard@gmail.com",
            "name": "Charlie Huguenard",
            "username": "charliehuge"
          },
          "committer": {
            "email": "charlie.huguenard@gmail.com",
            "name": "Charlie Huguenard",
            "username": "charliehuge"
          },
          "distinct": true,
          "id": "9697a4394117f432cb3b4870c3fb047b442758f2",
          "message": "remove/ignore .DS_Store",
          "timestamp": "2022-02-06T07:11:59-05:00",
          "tree_id": "7e73ff9d8ce832a81140ce229bd399b99e92a290",
          "url": "https://github.com/charliehuge/realtime_experiments/commit/9697a4394117f432cb3b4870c3fb047b442758f2"
        },
        "date": 1644149597281,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndSpinlock<CbData>>",
            "value": 28.3370506268843,
            "unit": "ns/iter",
            "extra": "iterations: 25155488\ncpu: 27.76988862231573 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndSPSCQ<CbData>>",
            "value": 4.466622551693236,
            "unit": "ns/iter",
            "extra": "iterations: 158245590\ncpu: 4.3883864314955 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 49.96231821641239,
            "unit": "ns/iter",
            "extra": "iterations: 14029113\ncpu: 49.93260087077492 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndSpinlock<CbData>>",
            "value": 155.60112057384453,
            "unit": "ns/iter",
            "extra": "iterations: 4213020\ncpu: 154.723025288273 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndSPSCQ<CbData>>",
            "value": 112.11995060000108,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 111.42164999999996 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 269.10543199792824,
            "unit": "ns/iter",
            "extra": "iterations: 2553959\ncpu: 268.79593603499507 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndSpinlock<CbData>>",
            "value": 13.389282982366879,
            "unit": "ns/iter",
            "extra": "iterations: 51699663\ncpu: 13.385731353800114 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndSPSCQ<CbData>>",
            "value": 10.941190327363383,
            "unit": "ns/iter",
            "extra": "iterations: 63035634\ncpu: 10.940202489277729 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 31.733865940140646,
            "unit": "ns/iter",
            "extra": "iterations: 21734858\ncpu: 31.73224320122078 ns\nthreads: 1"
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
          "id": "d26db420d20707887a0ab160767f9b5725c34bee",
          "message": "Add some instructions on setting up a test bench",
          "timestamp": "2022-02-06T07:24:13-05:00",
          "tree_id": "8a445eb314ffb0f5595d4f3a93161b8e9c5d8c59",
          "url": "https://github.com/charliehuge/realtime_experiments/commit/d26db420d20707887a0ab160767f9b5725c34bee"
        },
        "date": 1644150336476,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndSpinlock<CbData>>",
            "value": 30.301209458024736,
            "unit": "ns/iter",
            "extra": "iterations: 24157432\ncpu: 29.771401198604224 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndSPSCQ<CbData>>",
            "value": 5.06434578000011,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.036889 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 51.213997210164365,
            "unit": "ns/iter",
            "extra": "iterations: 13905471\ncpu: 51.14194981241557 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndSpinlock<CbData>>",
            "value": 137.31073800962395,
            "unit": "ns/iter",
            "extra": "iterations: 3850546\ncpu: 137.01916559365858 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndSPSCQ<CbData>>",
            "value": 96.40005367314856,
            "unit": "ns/iter",
            "extra": "iterations: 8361723\ncpu: 92.36951523029406 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 191.26512886733926,
            "unit": "ns/iter",
            "extra": "iterations: 3310575\ncpu: 190.0935336006583 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndSpinlock<CbData>>",
            "value": 13.69430867135278,
            "unit": "ns/iter",
            "extra": "iterations: 51634147\ncpu: 13.690724860817399 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndSPSCQ<CbData>>",
            "value": 11.284040217258122,
            "unit": "ns/iter",
            "extra": "iterations: 55779337\ncpu: 11.283147736230708 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 32.437708345275645,
            "unit": "ns/iter",
            "extra": "iterations: 21475469\ncpu: 32.42191823610464 ns\nthreads: 1"
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
          "id": "c005f2845fc777dc24a89a027e774aac8690ec45",
          "message": "allow setting cb in cb (+test) (#7)",
          "timestamp": "2022-02-06T08:43:19-05:00",
          "tree_id": "3ce040000ba85f395b2ed562e99d1c01c619e3f3",
          "url": "https://github.com/charliehuge/realtime_experiments/commit/c005f2845fc777dc24a89a027e774aac8690ec45"
        },
        "date": 1644155062068,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndSpinlock<CbData>>",
            "value": 25.019040638539636,
            "unit": "ns/iter",
            "extra": "iterations: 28610280\ncpu: 24.46096647778351 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndSPSCQ<CbData>>",
            "value": 4.0596550766310955,
            "unit": "ns/iter",
            "extra": "iterations: 174064750\ncpu: 4.021150749936444 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 41.987560901552634,
            "unit": "ns/iter",
            "extra": "iterations: 16724122\ncpu: 41.887018044953265 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndSpinlock<CbData>>",
            "value": 150.4913067827305,
            "unit": "ns/iter",
            "extra": "iterations: 4694407\ncpu: 150.0415707457832 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndSPSCQ<CbData>>",
            "value": 94.601844027201,
            "unit": "ns/iter",
            "extra": "iterations: 6274094\ncpu: 92.26962490520546 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 295.87325128160165,
            "unit": "ns/iter",
            "extra": "iterations: 2386462\ncpu: 295.55333376353775 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndSpinlock<CbData>>",
            "value": 27.836971346192627,
            "unit": "ns/iter",
            "extra": "iterations: 25148665\ncpu: 27.83471011284295 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndSPSCQ<CbData>>",
            "value": 8.49407199172774,
            "unit": "ns/iter",
            "extra": "iterations: 82633994\ncpu: 8.492715479781848 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 26.769610168967816,
            "unit": "ns/iter",
            "extra": "iterations: 26121830\ncpu: 26.767500592416386 ns\nthreads: 1"
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
          "id": "16cf56c43ca41b7ffe8302a70f18139e8af333d5",
          "message": "add Trap, which is essentially an optimized 1-capacity bounded SPSCQ (#8)",
          "timestamp": "2022-02-06T10:56:29-05:00",
          "tree_id": "4d895695217788d376ec9c11cb0abb8e30398fe9",
          "url": "https://github.com/charliehuge/realtime_experiments/commit/16cf56c43ca41b7ffe8302a70f18139e8af333d5"
        },
        "date": 1644163055877,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndSpinlock<CbData>>",
            "value": 24.735963813695633,
            "unit": "ns/iter",
            "extra": "iterations: 29003017\ncpu: 24.12643484641615 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndSPSCQ<CbData>>",
            "value": 3.224129300365628,
            "unit": "ns/iter",
            "extra": "iterations: 217484242\ncpu: 3.2172919452251625 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndTrap<CbData>>",
            "value": 4.025889041956089,
            "unit": "ns/iter",
            "extra": "iterations: 174100726\ncpu: 4.0213089059720515 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 52.416430808426085,
            "unit": "ns/iter",
            "extra": "iterations: 13413071\ncpu: 52.16424337126079 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndSpinlock<CbData>>",
            "value": 160.8485842471512,
            "unit": "ns/iter",
            "extra": "iterations: 4222665\ncpu: 159.80161817241023 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndSPSCQ<CbData>>",
            "value": 228.37137513744636,
            "unit": "ns/iter",
            "extra": "iterations: 3328540\ncpu: 228.15132160046156 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndTrap<CbData>>",
            "value": 39.74388210954093,
            "unit": "ns/iter",
            "extra": "iterations: 19906208\ncpu: 39.62085094258034 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 188.08716610056433,
            "unit": "ns/iter",
            "extra": "iterations: 5578476\ncpu: 184.03022617646812 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndSpinlock<CbData>>",
            "value": 36.16708628566535,
            "unit": "ns/iter",
            "extra": "iterations: 19356448\ncpu: 36.16412990647875 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndSPSCQ<CbData>>",
            "value": 7.67311697867989,
            "unit": "ns/iter",
            "extra": "iterations: 90520324\ncpu: 7.6730624605364826 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndTrap<CbData>>",
            "value": 7.231324137403661,
            "unit": "ns/iter",
            "extra": "iterations: 96807831\ncpu: 7.23092948957816 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 32.96107577721631,
            "unit": "ns/iter",
            "extra": "iterations: 21241015\ncpu: 32.95808604249839 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Charlie Huguenard",
            "username": "charliehuge",
            "email": "charliehuge@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "16cf56c43ca41b7ffe8302a70f18139e8af333d5",
          "message": "add Trap, which is essentially an optimized 1-capacity bounded SPSCQ (#8)",
          "timestamp": "2022-02-06T15:56:29Z",
          "url": "https://github.com/charliehuge/realtime_experiments/commit/16cf56c43ca41b7ffe8302a70f18139e8af333d5"
        },
        "date": 1644232334359,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndSpinlock<CbData>>",
            "value": 25.465225488612667,
            "unit": "ns/iter",
            "extra": "iterations: 27497597\ncpu: 25.45070029210189 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndSPSCQ<CbData>>",
            "value": 4.019945440468043,
            "unit": "ns/iter",
            "extra": "iterations: 174036317\ncpu: 4.018148694792249 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndTrap<CbData>>",
            "value": 4.094371261429549,
            "unit": "ns/iter",
            "extra": "iterations: 172816891\ncpu: 4.0680132360441545 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 42.605492478044354,
            "unit": "ns/iter",
            "extra": "iterations: 16713476\ncpu: 41.86767611955764 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndSpinlock<CbData>>",
            "value": 143.09312996026978,
            "unit": "ns/iter",
            "extra": "iterations: 5234846\ncpu: 142.982085814941 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndSPSCQ<CbData>>",
            "value": 235.54111692271167,
            "unit": "ns/iter",
            "extra": "iterations: 3031866\ncpu: 235.0155646720535 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndTrap<CbData>>",
            "value": 149.3358531091834,
            "unit": "ns/iter",
            "extra": "iterations: 7609407\ncpu: 148.91454748050668 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 284.67948802179916,
            "unit": "ns/iter",
            "extra": "iterations: 2404868\ncpu: 282.7344369836519 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndSpinlock<CbData>>",
            "value": 27.69928601082091,
            "unit": "ns/iter",
            "extra": "iterations: 25258366\ncpu: 27.693113640050992 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndSPSCQ<CbData>>",
            "value": 9.032550768914438,
            "unit": "ns/iter",
            "extra": "iterations: 77448278\ncpu: 9.032298949241971 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndTrap<CbData>>",
            "value": 8.59116867563828,
            "unit": "ns/iter",
            "extra": "iterations: 80521966\ncpu: 8.590727901502053 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 26.884657826256312,
            "unit": "ns/iter",
            "extra": "iterations: 26083781\ncpu: 26.880688808114137 ns\nthreads: 1"
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
          "id": "96a543854ed2437d32488284efe75110c21c1c98",
          "message": "Document findings for rt_thread_cb",
          "timestamp": "2022-02-07T12:59:28-05:00",
          "tree_id": "bb4ce7b8dcb5356999dfc460e65e028f22ce29fb",
          "url": "https://github.com/charliehuge/realtime_experiments/commit/96a543854ed2437d32488284efe75110c21c1c98"
        },
        "date": 1644256832854,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndSpinlock<CbData>>",
            "value": 26.11427615488602,
            "unit": "ns/iter",
            "extra": "iterations: 27479311\ncpu: 25.469157505441093 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndSPSCQ<CbData>>",
            "value": 4.029018598425503,
            "unit": "ns/iter",
            "extra": "iterations: 174058820\ncpu: 4.021344623616315 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndTrap<CbData>>",
            "value": 4.117521393655565,
            "unit": "ns/iter",
            "extra": "iterations: 171861466\ncpu: 4.113788951387157 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_SetUnset<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 42.37088149195328,
            "unit": "ns/iter",
            "extra": "iterations: 16720527\ncpu: 41.898601640965 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndSpinlock<CbData>>",
            "value": 111.73950971054997,
            "unit": "ns/iter",
            "extra": "iterations: 5256242\ncpu: 110.60923374532611 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndSPSCQ<CbData>>",
            "value": 184.10751606698292,
            "unit": "ns/iter",
            "extra": "iterations: 3807031\ncpu: 184.08000880476143 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndTrap<CbData>>",
            "value": 134.40563832128322,
            "unit": "ns/iter",
            "extra": "iterations: 5143836\ncpu: 131.6674754016263 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_Process<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 307.3018855422449,
            "unit": "ns/iter",
            "extra": "iterations: 2309044\ncpu: 307.276734440747 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndSpinlock<CbData>>",
            "value": 27.768805135162054,
            "unit": "ns/iter",
            "extra": "iterations: 25092880\ncpu: 27.765581312308512 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndSPSCQ<CbData>>",
            "value": 9.035835160867322,
            "unit": "ns/iter",
            "extra": "iterations: 77472793\ncpu: 9.035519088617342 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndTrap<CbData>>",
            "value": 8.457361020896391,
            "unit": "ns/iter",
            "extra": "iterations: 82863968\ncpu: 8.448824222368902 ns\nthreads: 1"
          },
          {
            "name": "ThingWithCb_ProcessNoContention<ThingWithCbAndEyalAmirFifo<CbData>>",
            "value": 26.832219718023836,
            "unit": "ns/iter",
            "extra": "iterations: 26091296\ncpu: 26.830644978310023 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}