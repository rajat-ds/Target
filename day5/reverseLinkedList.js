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
  let prev = null;
  let curr_p = head;
  let next_p = "";

  while (curr_p) {
    next_p = curr_p.next;
    curr_p.next = prev;
    prev = curr_p;
    curr_p = next_p;
  }
  head = prev;
  return head;
};
