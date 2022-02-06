# realtime_experiments
A home for tests and benchmarks and sanity checking things related to audio programming.

> NOTE: Be suspicious of performance measurement and test results from this repo, and please report errors in methodology if you see them.

## setting up your own test bench
If you want to use [GoogleTest](https://github.com/google/googletest), [Benchmark](https://github.com/google/benchmark), [CMake](https://cmake.org/), and [GitHub Actions](https://github.com/features/actions) (or a subset) to test and benchmark your C++ project, this repo serves as a minimal tutorial on that.

* Take a look at the `CMakeLists.txt` files, which should be fairly copy-and-paste-able for the CMake setup.
* Take a look in `.github/workflows` for the GitHub Actions setups. These should also be pretty plug-and-play.
* Examples of tests and benchmarks are in the other subdirectories (e.g. `rt_thread_cb`).

## running tests from the command line
```
cmake -B ./build -DCMAKE_BUILD_TYPE=Release
cmake --build ./build --config Release
cd build
ctest -C Release --output-on-failure --verbose
```

## running benchmarks from the command line
```
cmake -B ./build -DCMAKE_BUILD_TYPE=Release
cmake --build ./build --config Release
cd build
./rt_thread_cb/rt_thread_cb_benchmarks
```
