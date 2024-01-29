/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var removeNthFromEnd = function (head, n) {
  let start = head;
  let slow = head;
  let fast = head;
  for (let i = 1; i <= n; i++) fast = fast.next;

  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  if (!fast) { //[1]
    start = start.next;
  } else {
    slow.next = slow.next ? slow.next.next : null;
  }
  return start;
};
