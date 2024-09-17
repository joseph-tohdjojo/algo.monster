# Insertion Sort

## [AlgoMonster Lesson](https://algo.monster/problems/sorting_intro)

The idea of an insertion sort is this: initially, only the first item is considered sorted. Then, for each item in the sequence, we "insert" that item into the sorted list by swapping it with the item before it until the item is smaller than the current item.

Imagine you are sorting a hand of cards. What people usually do is maintain a pile of sorted cards and inserting from the unsorted pile into the sorted pile in the correct position. This algorithm is based on this idea.

## Big O

- Time Complexity: O(n^2)
- Space Complexity: O(1)
