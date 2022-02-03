set(target common)
add_library(${target} INTERFACE)
target_include_directories(${target} INTERFACE .)

# tests
file(GLOB test_src test/*.cpp)
add_executable(${target}_tests ${test_src})
target_link_libraries(${target}_tests gtest_main ${target})
add_test(NAME ${target}_test COMMAND ${target}_tests)
