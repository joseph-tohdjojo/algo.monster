# Merge Sort

## [AlgoMonster Lesson](https://algo.monster/problems/advanced_sorting)

The idea of a merge sort is divide and conquer: We divide the array into two almost equally, sort them (usually another merge sort), and merge the two sorted lists into one. To merge the two sorted lists, have two pointers pointing towards the bottom of the two lists, and in each step, add the smaller element from those two into the list and move the pointer of that item up by one until elements from both lists are fully added.

## Big O

- Time Complexity: O(n log n)
- Space Complexity: O(n)
