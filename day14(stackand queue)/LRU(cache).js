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
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.remove = function (nod) {
  let prev = nod.prev;
  let next = nod.next;
  prev.next = next;
  next.prev = prev;
};

// insert in front
LRUCache.prototype.insert = function (temp) {
  let nodeAfterHead = this.head.next;
  this.head.next = temp;
  temp.prev = this.head;
  temp.next = nodeAfterHead;
  nodeAfterHead.prev = temp;
};

LRUCache.prototype.get = function (key1) {
  if (this.map.get(key1)) {
    let nod = this.map.get(key1);
    let { key, value } = nod.val;
    this.remove(nod); //remove the already existing one

    let temp = new node({ key, value });
    this.insert(temp); // insert in front
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
    this.remove(nod); //remove the already existing one

    this.insert(temp);  // insert in front
    this.map.set(key1, temp);
  } else if (this.map.size === this.capacity) {
    let delNode = this.tail.prev;
    let { key, value } = delNode.val;
    this.map.delete(key);
    this.remove(delNode); // remove the last one

    this.insert(temp);   // insert in front
    this.map.set(key1, temp);
  } else {
    this.insert(temp);  // insert in front
    this.map.set(key1, temp);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
