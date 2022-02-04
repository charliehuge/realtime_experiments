set(target rt_thread_cb)

#grab Eyal Amir's cpp_data_structures repo for comparison
FetchContent_Declare(
        eyal_amir_data_structures
        GIT_REPOSITORY https://github.com/eyalamirmusic/cpp_data_structures.git
        GIT_TAG main
)
FetchContent_GetProperties(eyal_amir_data_structures)
if (NOT eyal_amir_data_structures_POPULATED)
    FetchContent_Populate(eyal_amir_data_structures)
    add_library(eyal_amir_guidata INTERFACE)
    target_include_directories(eyal_amir_guidata INTERFACE
            ${eyal_amir_data_structures_SOURCE_DIR}/ea_data_structures/)
    set_target_properties(eyal_amir_guidata PROPERTIES LINKER_LANGUAGE CXX)
endif()

# grab the MoodyCamel SPSCQ
FetchContent_Declare(
        moodycamel_spscq
        GIT_REPOSITORY https://github.com/cameron314/readerwriterqueue.git
)
FetchContent_GetProperties(moodycamel_spscq)
if (NOT moodycamel_spscq_POPULATED)
    FetchContent_Populate(moodycamel_spscq)
    add_library(moodycamel_spscq INTERFACE)
    target_include_directories(moodycamel_spscq INTERFACE ${moodycamel_spscq_SOURCE_DIR})
    set_target_properties(moodycamel_spscq PROPERTIES LINKER_LANGUAGE CXX)
endif()

# lib
file(GLOB src *.h *.cpp)
add_library(${target} SHARED ${src})
set_target_properties(${target} PROPERTIES LINKER_LANGUAGE CXX)
target_link_libraries(${target} common eyal_amir_guidata moodycamel_spscq)

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
