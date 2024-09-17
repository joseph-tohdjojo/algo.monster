import { arrayPairSum } from "./solution.js";
import { test } from "node:test";
import assert from "node:assert";

test("arrayPairSum function", async (t) => {
  await t.test("should return 4 for input [1, 4, 3, 2]", () => {
    const input = [1, 4, 3, 2];
    const expected = 4;
    const result = arrayPairSum(input);
    assert.strictEqual(result, expected);
  });

  await t.test("should return 9 for input [6, 2, 6, 5, 1, 2]", () => {
    const input = [6, 2, 6, 5, 1, 2];
    const expected = 9;
    const result = arrayPairSum(input);
    assert.strictEqual(result, expected);
  });

  await t.test("should handle negative numbers correctly", () => {
    const input = [-1, -4, 0, 10, 5, -9];
    const expected = -5;
    const result = arrayPairSum(input);
    assert.strictEqual(result, expected);
  });

  await t.test("should handle arrays with all same numbers", () => {
    const input = [1, 1, 1, 1];
    const expected = 2;
    const result = arrayPairSum(input);
    assert.strictEqual(result, expected);
  });

  await t.test("should handle minimum length array", () => {
    const input = [1, 2];
    const expected = 1;
    const result = arrayPairSum(input);
    assert.strictEqual(result, expected);
  });
});
