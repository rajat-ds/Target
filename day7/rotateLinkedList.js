/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || !k) return head;
  let curr = head;
  let count = 1;
  while (curr.next) {
    count++;
    curr = curr.next;
  }
  curr.next = head;

  k = k % count;
  k = count - k;
  while (k--) {
    curr = curr.next;
  }
  head = curr.next;
  curr.next = null;
  return head;
};
