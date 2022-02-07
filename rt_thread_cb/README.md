# rt_thread_cb

> Many, many thanks to @eyalamirmusic and others on The Audio Programmer Discord for the ideas and inspiration!

## Use Case
I have a MIDI processor that needs to pass some data from a method that is called from a realtime thread (usually an audio processing thread). It doesn't need to do this all the time, only when there's a listener (e.g. a GUI, which has a different lifetime).

## Assumptions
* This only needs to happen a couple times within a listener's lifetime (e.g. create and destroy).
* We would prefer to do (almost) nothing when there is no listener.
* Listeners may register/unregister their callback from any thread *EXCEPT* a realtime thread. The callback may only be used from one thread at a time.

## What did we learn?

Here is an example comparison on my 2019 MacBook Pro. Note that memory usage is just a rough guess, and does not include heap allocations down the line.

<img width="1026" alt="Screen Shot 2022-02-07 at 11 52 46 AM" src="https://user-images.githubusercontent.com/615190/152834124-4dfb605b-f8a5-4a76-b595-83e07499586e.png">

### Spin Lock
* Lowest memory usage
* **CONSTRAINT:** Will deadlock if you try to set the callback within the callback. You can work around this with a small amount of extra memory and time (example provided in the code here).
* Gets a lot slower on set/unset when the consumer thread does more work while holding the lock than not.

### Bounded Ring Buffer Queue (SPSC)
* About 3x the memory of a spin lock baseline. Scales with size of stored object and capacity.
* **CONSTRAINT:** Will throw out latest set call if queue is full.
* **CONSTRAINT:** set/unset can only happen from one thread.
* 10x faster than spin lock on set/unset. 50% slower on use during set/unset. 3x faster on use when set/unset doesn't need to be processed (which is the common case).
* set/unset not affected by how much work the user thread is doing.

### Trap
*I don't know what this technique is called. It's basically a bounded MPMC with capacity of 1. Anyone have a pointer for me?*
* About 2x the memory of a spin lock baseline.
* **CONSTRAINT:** You can only set/unset once between use calls.
* Fastest of all the tested options in all cases.
* The most flexible WRT threads. `Trap::trap()` and `Trap::release()` can be called from any number of threads.
* set/unset not affected by how much work the user thread is doing.

### Overwriting Ring Buffer Queue
* About 3x the memory of a spin lock.
* **CONSTRAINT:** set/unset can only happen from one thread.
* set/unset not affected by how much work the user thread is doing.

### Further Reading
Here are some of the useful things I read/watched along the way:
* [Correctly implementing a spinlock in C++ - Erik Rigtorp](https://rigtorp.se/spinlock/)
* [Using Locks in Real-Time Audio Processing, Safely - Timur Doumler](https://www.youtube.com/watch?v=zrWYJ6FdOFQ)

## Benchmarks
View benchmark charts here:
https://charliehuge.github.io/realtime_experiments/dev/bench/rt_thread_cb/
