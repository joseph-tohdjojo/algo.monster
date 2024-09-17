export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
  }

  removeLeft() {
    if (this.head) {
      this.head = this.head.next;
      this.length -= 1;
    }
  }
}

export class RecentCounter {
  constructor() {
    this.queue = new LinkedList();
  }

  /**
   * @param {number} t
   * @return {number}
   */
  ping(t) {
    this.queue.add(t);

    while (this.queue.head.value < t - 3000) {
      this.queue.removeLeft();
    }

    return this.queue.length;
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
