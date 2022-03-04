var copyRandomList = function (head) {
  let iter, front;
  iter = front = head;
  while (iter) {
    front = iter.next;
    let copy = new Node(iter.val);
    iter.next = copy;
    copy.next = front;
    iter = front;
  }
  iter = head;
  while (iter) {
    if (iter.random != null) iter.next.random = iter.random.next;
    iter = iter.next.next;
  }
  iter = head;
  let Phead = new Node(0);
  let copy = Phead;
  while (iter) {
    front = iter.next.next;
    copy.next = iter.next;
    copy = copy.next;
    iter.next = front;
    iter = front;
  }
  return Phead.next;
};
