import {
  NonNumericValuesException,
  UnderflowException,
  OverflowException,
} from "utils/exceptions.js";

/**
 * Queue represents a queue data structure (FIFO).
 * Supports basic queue operations with additional functionality like capacity limiting,
 * tracking max/min values, and more.
 */
class Queue {
  #data = [];
  #capacity = 0;

  constructor(capacity = Infinity) {
    this.#capacity = capacity;
  }

  /**
   * Adds an element to the end of the queue.
   * @param {*} value - The element to add to the queue.
   * @returns {*} The element that was added to the queue.
   * @throws {OverflowException} If the queue has reached its maximum capacity.
   */
  enqueue(value) {
    if (this.isFull) {
      throw new OverflowException();
    }
    this.#data.push(value);
    return value;
  }

  /**
   * Removes and returns the element at the front of the queue.
   * @returns {*} The element removed from the front of the queue, or `undefined` if the queue is empty.
   * @throws {UnderflowException} If the queue is empty.
   */
  dequeue() {
    if (this.isEmpty) {
      throw new UnderflowException();
    }
    return this.#data.shift();
  }

  /**
   * Returns the element at the front of the queue without removing it.
   * @returns {*} The element at the front of the queue.
   * @throws {UnderflowException} If the queue is empty.
   */
  front() {
    if (this.isEmpty) {
      throw new UnderflowException();
    }
    return this.#data[0];
  }

  /**
   * Returns the element at the rear of the queue without removing it.
   * @returns {*} The element at the rear of the queue.
   * @throws {UnderflowException} If the queue is empty.
   */
  rear() {
    if (this.isEmpty) {
      throw new UnderflowException();
    }
    return this.#data.at(-1);
  }

  /**
   * Checks if the queue is full.
   * @returns {boolean} `true` if the queue has reached its capacity, otherwise `false`.
   */
  get isFull() {
    return this.size >= this.#capacity;
  }

  /**
   * Checks if the queue is empty.
   * @returns {boolean} `true` if the queue is empty, otherwise `false`.
   */
  get isEmpty() {
    return this.size === 0;
  }

  /**
   * Returns the current size of the queue.
   * @returns {number} The number of elements in the queue.
   */
  get size() {
    return this.#data.length;
  }

  /**
   * Gets the maximum capacity of the queue.
   * @returns {number} The maximum capacity of the queue.
   */
  get capacity() {
    return this.#capacity;
  }

  /**
   * Prints the current state of the queue.
   */
  print() {
    console.log("Queue: ", this.#data);
  }

  /**
   * Returns the maximum value in the queue.
   * @returns {*} The maximum value in the queue.
   * @throws {UnderflowException} If the queue is empty.
   */
  getMax() {
    if (this.isEmpty) {
      throw new UnderflowException();
    }

    const isNumeric = this.#data.every((item) => typeof item === "number");

    if (!isNumeric) {
      throw new NonNumericValuesException();
    }

    return Math.max(...this.#data);
  }

  /**
   * Returns the minimum value in the queue.
   * @returns {*} The minimum value in the queue.
   * @throws {UnderflowException} If the queue is empty.
   */
  getMin() {
    if (this.isEmpty) {
      throw new UnderflowException();
    }

    const isNumeric = this.#data.every((item) => typeof item === "number");

    if (!isNumeric) {
      throw new NonNumericValuesException();
    }

    return Math.min(...this.#data);
  }
}

export default Queue;
