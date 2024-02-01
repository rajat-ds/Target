// two stacks with costly enQueue()
class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }
  enQueue(x) {
    while (this.s1.length != 0) this.s2.push(this.s1.pop());

    this.s1.push(x);

    while (this.s2.length != 0) {
      this.s1.push(this.s2.pop());
      //s2.pop();
    }
  }

  deQueue() {
    if (this.s1.length == 0) return -1;
    let x = this.s1[this.s1.length - 1];
    this.s1.pop();
    return x;
  }
}

// Driver code
// let q = new Queue();
// q.enQueue(1);
// q.enQueue(2);
// q.enQueue(3);

// two stacks with costly deQueue()
class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enQueue(x) {
    this.s1.push(x);
  }
  deQueue() {
    if (this.s1.length == 0 && this.s2.length == 0) {
      return -1;
    }
    if (this.s2.length == 0) {
      while (this.s1.length != 0) {
        this.s2.push(this.s1[0]);
        this.s1.shift();
      }
    }
    let x = this.s2[0];
    this.s2.shift();
    return x;
  }
}

let q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
