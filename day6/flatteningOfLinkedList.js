const flatten = (head) => {
  // Base cases ( first head when null is passed as null other wise look for last node )
  if (!head || !head.next) {
    return head;
  }
  // recursively flatten the next node
  head.next = this.flatten(head.next);
  // merge the flattened next node with the current node
  head = merge(head, head.next);
  return head;
};

const merge = (a, b) => {
  if (!a) return b;
  if (!b) return a;
  let result;
  if (a.data < b.data) {
    result = a;
    result.bottom = this.merge(a.bottom, b);
  } else {
    result = b;
    result.bottom = this.merge(a, b.bottom);
  }
  return result;
};
