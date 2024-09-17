import { test } from "node:test";
import assert from "node:assert/strict";
import { twoSum } from "./solution.js";

test("Two Sum - Test Case 1", () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const result = twoSum(nums, target);
  assert.deepStrictEqual(result, [0, 1]);
});

test("Two Sum - Test Case 2", () => {
  const nums = [3, 2, 4];
  const target = 6;
  const result = twoSum(nums, target);
  assert.deepStrictEqual(result, [1, 2]);
});

test("Two Sum - Test Case 3", () => {
  const nums = [3, 3];
  const target = 6;
  const result = twoSum(nums, target);
  assert.deepStrictEqual(result, [0, 1]);
});

test("Two Sum - No Solution", () => {
  const nums = [1, 2, 3, 4];
  const target = 10;
  const result = twoSum(nums, target);
  assert.deepStrictEqual(result, []);
});

test("Two Sum - Empty Array", () => {
  const nums = [];
  const target = 5;
  const result = twoSum(nums, target);
  assert.deepStrictEqual(result, []);
});
