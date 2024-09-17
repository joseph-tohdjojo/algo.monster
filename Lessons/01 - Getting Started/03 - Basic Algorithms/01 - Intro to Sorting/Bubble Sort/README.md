# Bubble Sort

## [AlgoMonster Lesson](https://algo.monster/problems/sorting_intro)

The idea of bubble sort is this: for each pass, we use a pointer to point at the first element of the list. For each cycle, we compare it to the next element in the list and swap them if the current item is greater, then move the pointer by one until it reaches the end of the list. We repeat this process until the list becomes sorted. The list is sorted if, during a pass, no swapping occurs.

Note that the largest element will always "float" to the top during each pass, like a bubble. Therefore, for each pass, we only need to consider the interval excluding the last element of the previous interval, and the list is guaranteed to be sorted within n passes.

## Big O

- Time Complexity: O(n^2)
- Space Complexity: O(1)
