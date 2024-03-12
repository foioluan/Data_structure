export default class CircularQueue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.data = [];
    this.begin = 1;
    this.end = 1;
  }

  enqueue(element) {
    if (this.isFull()) {
      throw new Error('QueueOverflow');
    }
    this.data[this.end++] = element;
    if (this.end == this.maxSize + 1) {
      this.end = 0;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('QueueUnderflow');
    }
    let removed = this.data[this.begin];
    if (this.begin == this.maxSize + 1) {
      this.begin = 0;
    } else {
      this.begin++;
    }

    return removed;
  }

  front() {
    if (this.isEmpty()) {
      throw new Error('Empty queue');
    }

    return this.data[this.begin];
  }

  isFull() {
    return this.end + 1 === this.begin
  }

  isEmpty() {
    return this.end === this.begin;
  }

  length() {
    if (this.end < this.begin) {
      return this.maxSize - this.end + this.begin + 1;
    }

    return this.end - this.begin;
  }

  clear() {
    this.begin = this.end = 1;
  }

  toString() {
    let string = '';
    if (this.begin < this.end) {
      for (let i = begin; i < this.end; i++) {
        string += this.data[i];
      }
    }

    return string;
  }
}