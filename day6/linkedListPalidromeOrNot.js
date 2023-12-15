/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return true;
  let slow, fast;
  slow = fast = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  slow.next = reverse(slow.next);
  slow = slow.next;
  console.log(slow);
  while (slow) {
    if (slow.val != head.val) return false;
    slow = slow.next;
    head = head.next;
  }
  return true;
};
function reverse(nex) {
  let pre, curr;
  pre = curr = null;
  while (nex) {
    curr = nex.next;
    nex.next = pre;
    pre = nex;
    nex = curr;
  }
  return pre;
}
