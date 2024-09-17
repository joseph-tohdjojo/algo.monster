import { describe, it } from "node:test";
import assert from "assert";
import { binarySearch } from "./solution.js";

describe("Binary Search -- Solution 001", () => {
  it("finds element in the middle of the array", () => {
    assert.strictEqual(binarySearch([1, 3, 5, 7, 9], 5), 2);
  });

  it("finds element at the beginning of the array", () => {
    assert.strictEqual(binarySearch([1, 3, 5, 7, 9], 1), 0);
  });

  it("finds element at the end of the array", () => {
    assert.strictEqual(binarySearch([1, 3, 5, 7, 9], 9), 4);
  });

  it("returns -1 for element not in the array", () => {
    assert.strictEqual(binarySearch([1, 3, 5, 7, 9], 4), -1);
  });

  it("works with an array of one element", () => {
    assert.strictEqual(binarySearch([1], 1), 0);
    assert.strictEqual(binarySearch([1], 2), -1);
  });

  it("works with an empty array", () => {
    assert.strictEqual(binarySearch([], 1), -1);
  });

  it("works with large arrays", () => {
    const largeArray = Array.from({ length: 1000000 }, (_, i) => i * 2);
    assert.strictEqual(binarySearch(largeArray, 999998), 499999);
    assert.strictEqual(binarySearch(largeArray, 999999), -1);
  });
});
