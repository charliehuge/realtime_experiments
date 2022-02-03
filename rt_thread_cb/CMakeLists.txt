set(target rt_thread_cb)

# lib
file(GLOB src *.h *.cpp)
add_library(${target} SHARED ${src})
set_target_properties(${target} PROPERTIES LINKER_LANGUAGE CXX)
target_link_libraries(${target} common)

if (MSVC)
    target_compile_options(${target} PUBLIC /W4 /WX)
else()
    target_compile_options(${target} PUBLIC -Wall -Wextra -pedantic -Werror)
endif()

# tests
file(GLOB test_src test/*.cpp)
add_executable(${target}_tests ${test_src})
target_link_libraries(${target}_tests gtest_main ${target})
add_test(NAME ${target}_test COMMAND ${target}_tests)

# benchmarks
file(GLOB benchmark_src benchmark/*.cpp)
add_executable(${target}_benchmarks ${benchmark_src})
target_link_libraries(${target}_benchmarks benchmark::benchmark_main ${target})
