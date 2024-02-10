function node(val = null, next = null, prev = null) {
  this.next = next || null;
  this.prev = prev || null;
  this.val = val || null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map();
  this.capacity = capacity;
  this.head = new node();
  this.tail = new node();
  this.head.next = this.tail;
  this.tail.prev = this.head;

  this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key1) {
  if (this.map.get(key1)) {
    let nod = this.map.get(key1);
    let { key, value } = nod.val;
    let prev = nod.prev;
    let next = nod.next;
    prev.next = next;
    next.prev = prev;

    let nodeAfterHead = this.head.next;
    let temp = new node({ key, value });

    this.head.next = temp;
    temp.prev = this.head;
    temp.next = nodeAfterHead;
    nodeAfterHead.prev = temp;
    this.map.delete(key1);
    this.map.set(key1, temp);

    return value;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key1, value) {
  let temp = new node({ key: key1, value });
  if (this.map.get(key1)) {
    let nod = this.map.get(key1);
    let prev = nod.prev;
    let next = nod.next;
    prev.next = next;
    next.prev = prev;

    let nodeAfterHead = this.head.next;

    this.head.next = temp;
    temp.prev = this.head;
    temp.next = nodeAfterHead;
    nodeAfterHead.prev = temp;

    this.map.set(key1, temp);
  } else if (this.map.size === this.capacity) {
    let delNode = this.tail.prev;
    let { key, value } = delNode.val;
    this.map.delete(key);
    let prev = this.tail.prev.prev;
    prev.next = this.tail;
    this.tail.prev = prev;

    let nodeAfterHead = this.head.next;
    this.head.next = temp;
    temp.prev = this.head;
    temp.next = nodeAfterHead;
    nodeAfterHead.prev = temp;
    this.map.set(key1, temp);
  } else {
    let nodeAfterHead = this.head.next;
    this.head.next = temp;
    temp.prev = this.head;
    temp.next = nodeAfterHead;
    nodeAfterHead.prev = temp;
    this.map.set(key1, temp);
  }
};
