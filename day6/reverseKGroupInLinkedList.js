
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (k === 1 || !head) return head;
  let dummy = new ListNode();
  dummy.next = head;
  let pre, nex, curr;
  pre = nex = curr = dummy;
  let count = 0;
  while (curr.next) {
    curr = curr.next;
    count++;
  }
  while (count >= k) {
    curr = pre.next;
    nex = curr.next;
    for (let i = 1; i < k; i++) {
      curr.next = nex.next;
      nex.next = pre.next;
      pre.next = nex;
      nex = curr.next;
    }
    pre = curr;
    count -= k;
  }
  return dummy.next;
};
