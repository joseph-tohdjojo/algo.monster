import { test } from "node:test";
import assert from "node:assert";
import { RecentCounter } from "./solution.js";

test("RecentCounter", async (t) => {
  await t.test("should handle example case", () => {
    const recentCounter = new RecentCounter();
    assert.strictEqual(recentCounter.ping(1), 1);
    assert.strictEqual(recentCounter.ping(100), 2);
    assert.strictEqual(recentCounter.ping(3001), 3);
    assert.strictEqual(recentCounter.ping(3002), 3);
  });

  await t.test("should handle rapid pings", () => {
    const recentCounter = new RecentCounter();
    assert.strictEqual(recentCounter.ping(1), 1);
    assert.strictEqual(recentCounter.ping(2), 2);
    assert.strictEqual(recentCounter.ping(3), 3);
    assert.strictEqual(recentCounter.ping(4), 4);
    assert.strictEqual(recentCounter.ping(3001), 5);
    assert.strictEqual(recentCounter.ping(3002), 5);
  });

  await t.test("should handle pings outside 3000ms window", () => {
    const recentCounter = new RecentCounter();
    assert.strictEqual(recentCounter.ping(1), 1);
    assert.strictEqual(recentCounter.ping(3002), 1);
    assert.strictEqual(recentCounter.ping(6003), 1);
    assert.strictEqual(recentCounter.ping(9004), 1);
  });

  await t.test("should handle large time gaps", () => {
    const recentCounter = new RecentCounter();
    assert.strictEqual(recentCounter.ping(1), 1);
    assert.strictEqual(recentCounter.ping(100000), 1);
    assert.strictEqual(recentCounter.ping(200000), 1);
    assert.strictEqual(recentCounter.ping(200001), 2);
  });
});
