# realtime_experiments
A home for tests and benchmarks and sanity checking things related to audio programming.

## running tests
```
cmake -B ./build -DCMAKE_BUILD_TYPE=Release
cmake --build ./build --config Release
cd build
ctest -C Release --output-on-failure --verbose
```

## running benchmarks
```
cmake -B ./build -DCMAKE_BUILD_TYPE=Release
cmake --build ./build --config Release
cd build
./rt_thread_cb/rt_thread_cb_benchmarks
```
