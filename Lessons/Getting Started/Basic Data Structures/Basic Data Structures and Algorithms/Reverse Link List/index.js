/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const dummy = new ListNode(null, null);
  let current = head;
  while (current !== null) {
    let next = current.next;
    current.next = dummy.next;
    dummy.next = current;
    current = next;
  }
  return dummy.next;
};
