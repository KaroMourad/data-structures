import {
  NonNumericValuesException,
  UnderflowException,
  OverflowException,
} from "../utils/exceptions";

/**
 * Stack represents a stack data structure (LIFO).
 * Supports basic stack operations with additional functionality like capacity limiting.
 */
class Stack {
  #data = [];
  #capacity = 0;

  /**
   * Creates a new Stack.
   * @param {number} capacity - The maximum capacity of the stack.
   */
  constructor(capacity = Infinity) {
    this.#capacity = capacity;
  }

  /**
   * Adds an element to the top of the stack.
   * @param {*} value - The element to add to the stack.
   * @returns {*} The element that was added to the stack.
   * @throws {OverflowException} If the stack has reached its maximum capacity.
   */
  push(value) {
    if (this.isFull) {
      throw new OverflowException();
    }
    this.#data.push(value);
    return value;
  }

  /**
   * Removes and returns the element at the top of the stack.
   * @returns {*} The element removed from the top of the stack.
   * @throws {UnderflowException} If the stack is empty.
   */
  pop() {
    if (this.isEmpty) {
      throw new UnderflowException();
    }
    return this.#data.pop();
  }

  /**
   * Returns the element at the top of the stack without removing it.
   * @returns {*} The element at the top of the stack.
   * @throws {UnderflowException} If the stack is empty.
   */
  peek() {
    if (this.isEmpty) {
      throw new UnderflowException();
    }
    return this.#data.at(-1);
  }

  /**
   * Returns the current size of the stack.
   * @returns {number} The number of elements in the stack.
   */
  get size() {
    return this.#data.length;
  }

  /**
   * Checks if the stack is empty.
   * @returns {boolean} `true` if the stack is empty, otherwise `false`.
   */
  get isEmpty() {
    return this.size === 0;
  }

  /**
   * Checks if the stack is full.
   * @returns {boolean} `true` if the stack has reached its capacity, otherwise `false`.
   */
  get isFull() {
    return this.size >= this.#capacity;
  }

  /**
   * Gets the maximum capacity of the stack.
   * @returns {number} The maximum capacity of the stack.
   */
  get capacity() {
    return this.#capacity;
  }

  /**
   * Prints the current state of the stack.
   */
  print() {
    console.log("Stack: ", this.#data);
  }

  /**
   * Returns the maximum value in the stack.
   * @returns {*} The maximum value in the stack.
   * @throws {UnderflowException} If the stack is empty.
   * @throws {NonNumericValuesException} If the stack has no numeric values.
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
   * Returns the minimum value in the stack.
   * @returns {*} The minimum value in the stack.
   * @throws {UnderflowException} If the stack is empty.
   * @throws {NonNumericValuesException} If the stack contains no numeric values.
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

export default Stack;
