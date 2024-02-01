class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(x) {
    this.q2.push(x);
    while (this.q1.length != 0) {
      this.q2.push(this.q1[0]);
      this.q1.shift();
    }
    this.q = this.q1;
    this.q1 = this.q2;
    this.q2 = this.q;
  }

  pop = () => {
    if (this.q1.length == 0) this.q1.shift();
  };

  top() {
    if (this.q1.length == 0) return -1;
    return this.q1[0];
  }

  size() {
    return this.q1.length;
  }

  isEmpty() {
    return this.q1.length === 0;
  }

  front() {
    return this.q1[0];
  }
}

let s = new Stack();
s.push(1);
s.push(2);
s.push(3);

console.log("current size: ");
s.size();
console.log(s.top());
s.pop();
console.log(s.top());
s.pop();
console.log(s.top());

console.log("current size: ");
s.size();

//========================================================================

class Stack1 {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  pop() {
    if (this.q1.length == 0) return;

    while (this.q1.length != 1) {
      this.q2.push(this.q1[0]);
      this.q1.shift();
    }
    this.q1.shift();

    this.q = this.q1;
    this.q1 = this.q2;
    this.q2 = this.q;
  }

  push(x) {
    this.q1.push(x);
  }

  top() {
    if (this.q1.length == 0) return -1;

    while (this.q1.length != 1) {
      this.q2.push(this.q1[0]);
      this.q1.shift();
    }

    let temp = this.q1[0];
    this.q1.shift();

    this.q2.push(temp);
    this.q = this.q1;
    this.q1 = this.q2;
    this.q2 = this.q;
    return temp;
  }

  size() {
    return this.q1.length;
  }

  isEmpty() {
    return this.q1.length == 0;
  }

  front() {
    return this.q1[0];
  }
}

// Driver code
let s2 = new Stack();
s2.push(1);
s2.push(2);
s2.push(3);
console.log("current size: ", s2.size());
console.log(s2.top());
s2.pop();
console.log(s2.top());
s2.pop();
console.log(s.top());
console.log("current size: ", s2.size());
