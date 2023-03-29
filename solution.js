const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top) {
    this.top = top || null;
  }

  push(data) {
    let newItem = new Node(data);
    if (this.top === null) {
      this.top = newItem;
    } else {
      newItem.next = this.top;
      this.top = newItem;
    }
  }

  size() {
    let count = 0;
    let node = this.top;
    while (node) {
      node = node.next;
      count++;
    }
    return count;
  }

  pop() {
    let popped = this.top;
    this.top = popped.next;
    return popped;
  }
}

class Queue {
  constructor(value) {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = value;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
