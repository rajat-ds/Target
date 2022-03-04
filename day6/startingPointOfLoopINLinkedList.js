/**
 * @param {ListNode} head
 * @return {ListNode}
 */
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
