# Selection Sort

## [AlgoMonster Lesson](https://algo.monster/problems/sorting_intro)

The idea for this sorting algorithm is that during each cycle, we find the smallest item from the unsorted pile and add it to the sorted pile.

To find the smallest element in the unsorted pile, we have a temporary variable keeping track of the index to the smallest element. We then compare each element in the unsorted pile to that element, updating the new index if necessary.

After all the elements have been compared, we swap the element with the smallest index with the first element of the unsorted pile. The element is now part of the sorted pile.

## Big O

- Time Complexity: O(n^2)
- Space Complexity: O(1)
