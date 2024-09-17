# Quick Sort

## [AlgoMonster Lesson](https://algo.monster/problems/advanced_sorting)

The idea of quick sort is as follows: We select an arbitrary element in the list (known as the "pivot"), and we swap the elements in the list into two sides: a side where all the elements are smaller than the pivot, and a side where all the elements are larger or equal to the pivot.

After grouping them this way, we swap the pivot with the first element of the side that is larger or equal to the pivot. This way, each element to the left of the pivot is smaller than it, and each element on the right is larger or equal. Then we need to sort the left and right intervals (using the same method), then the list will be sorted.

How does it group? One of the ways to achieve this is that for the interval that we are sorting, we have a pointer point before the start and at the end (including the pivot). For each swap, we move the start pointer until we find an element larger or equal to the pivot (after the initial index) and move the end pointer until we find an element smaller or equal to the pivot (before the initial index). Then we can swap those two elements and restart the process. If those two pointers meet, we stop , and then we can swap the pivot and the meeting point.

## Big O

- Time Complexity: O(n log n)
- Space Complexity: O(log n)
