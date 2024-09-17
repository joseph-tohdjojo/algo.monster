import { test } from "node:test";
import assert from "node:assert";
import { ListNode, reverseLinkList } from "./solution.js";

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

test("reverseLinkList", async (t) => {
  await t.test("reverses a simple linked list", () => {
    const input = createLinkedList([1, 2, 3, 4, 5]);
    const reversed = reverseLinkList(input);
    assert.deepStrictEqual(linkedListToArray(reversed), [5, 4, 3, 2, 1]);
  });

  await t.test("handles a single-node list", () => {
    const input = createLinkedList([1]);
    const reversed = reverseLinkList(input);
    assert.deepStrictEqual(linkedListToArray(reversed), [1]);
  });

  await t.test("handles an empty list", () => {
    const input = null;
    const reversed = reverseLinkList(input);
    assert.strictEqual(reversed, null);
  });

  await t.test("reverses a two-node list", () => {
    const input = createLinkedList([1, 2]);
    const reversed = reverseLinkList(input);
    assert.deepStrictEqual(linkedListToArray(reversed), [2, 1]);
  });

  await t.test("handles a list with duplicate values", () => {
    const input = createLinkedList([1, 2, 2, 3, 3, 3]);
    const reversed = reverseLinkList(input);
    assert.deepStrictEqual(linkedListToArray(reversed), [3, 3, 3, 2, 2, 1]);
  });
});
