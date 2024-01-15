/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// l1 ditance travel by slow before entering loop
// l2 distance travel by slow after enterting toop
// l1  + l2 dist travel by slow
// l1 + l2 + nc dist ravel by fast
// 2 (l1 + l2 ) = l1 + l2 +nc
// l1 = nc - l2
var detectCycle = function (head) {
  if (!head || !head.next) return null;

  let slow, fast, entry;
  slow = fast = entry = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      while (slow) {
        if (slow === entry) return entry;
        slow = slow.next;
        entry = entry.next;
      }
    }
  }
  return null;
};
