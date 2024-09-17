import { test } from "node:test";
import assert from "node:assert/strict";
import { mergeSort } from "./solution.js";

test("selectionSort function", async (t) => {
  await t.test("sorts an empty array", () => {
    const arr = [];
    mergeSort(arr);
    assert.deepStrictEqual(arr, []);
  });

  await t.test("sorts an already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    mergeSort(arr);
    assert.deepStrictEqual(arr, [1, 2, 3, 4, 5]);
  });

  await t.test("sorts a reverse-sorted array", () => {
    const arr = [5, 4, 3, 2, 1];
    mergeSort(arr);
    assert.deepStrictEqual(arr, [1, 2, 3, 4, 5]);
  });

  await t.test("sorts an array with duplicate elements", () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    mergeSort(arr);
    assert.deepStrictEqual(arr, [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  await t.test("sorts an array with negative numbers", () => {
    const arr = [-4, 0, 7, 2, -1, 8, -5];
    mergeSort(arr);
    assert.deepStrictEqual(arr, [-5, -4, -1, 0, 2, 7, 8]);
  });
});
