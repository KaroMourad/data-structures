import { UnderflowException, OutOfBoundsException } from "utils/exceptions.js";

/**
 * Represents a node in a doubly linked list.
 */
class Node {
  /**
   * @param {*} value - The value to store in the node.
   */
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

/**
 * Represents a doubly linked list.
 */
class DoublyList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Inserts a new node at the beginning of the list.
   * @param {*} value - The value to insert.
   * @returns {Node} - The inserted node.
   * @throws {Error} - If an error occurs during insertion.
   */
  insertAtBeginning(value) {
    const node = new Node(value);
    if (this.isEmpty) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    return node;
  }

  /**
   * Inserts a new node at the end of the list.
   * @param {*} value - The value to insert.
   * @returns {Node} - The inserted node.
   * @throws {Error} - If an error occurs during insertion.
   */
  insertAtEnd(value) {
    const node = new Node(value);
    if (this.isEmpty) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    return node;
  }

  /**
   * Inserts a new node at a specific position in the list.
   * @param {number} position - The position to insert the new node.
   * @param {*} value - The value to insert.
   * @returns {Node} - The inserted node.
   * @throws {Error} - If the position is out of bounds or an error occurs during insertion.
   */
  insertAtPosition(position, value) {
    if (position < 0) {
      throw new OutOfBoundsException();
    }

    if (position === 0) {
      return this.insertAtBeginning(value);
    }

    let tmp = this.head;
    for (let i = 0; i < position - 1; i++) {
      if (tmp === null) {
        throw new OutOfBoundsException();
      }
      tmp = tmp.next;
    }

    if (tmp === null) {
      throw new OutOfBoundsException();
    }

    const node = new Node(value);
    node.next = tmp.next;
    node.prev = tmp;
    if (tmp.next !== null) {
      tmp.next.prev = node;
    }
    tmp.next = node;
    if (node.next === null) {
      this.tail = node;
    }
    return node;
  }

  /**
   * Deletes the node at the beginning of the list.
   * @returns {Node} - The deleted node.
   * @throws {UnderflowException} - If the list is empty.
   */
  deleteFromBeginning() {
    if (this.isEmpty) {
      throw new UnderflowException();
    }
    let tmp = this.head;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    return tmp;
  }

  /**
   * Deletes the node at the end of the list.
   * @returns {Node} - The deleted node.
   * @throws {UnderflowException} - If the list is empty.
   */
  deleteFromEnd() {
    if (this.isEmpty) {
      throw new UnderflowException();
    }
    let tmp = this.tail;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    return tmp;
  }

  /**
   * Deletes the node at a specific position in the list.
   * @param {number} position - The position of the node to delete.
   * @returns {Node} - The deleted node.
   * @throws {UnderflowException} - If the list is empty.
   * @throws {Error} - If the position is out of bounds.
   */
  deleteAtPosition(position) {
    if (this.isEmpty) {
      throw new UnderflowException();
    }
    if (position < 0) {
      throw new OutOfBoundsException();
    }
    if (position === 0) {
      return this.deleteFromBeginning();
    }
    let tmp = this.head;
    for (let i = 0; i < position; i++) {
      if (tmp === null) {
        throw new OutOfBoundsException();
      }
      tmp = tmp.next;
    }

    if (tmp === null) {
      throw new OutOfBoundsException();
    }

    if (tmp.prev !== null) {
      tmp.prev.next = tmp.next;
    }
    if (tmp.next !== null) {
      tmp.next.prev = tmp.prev;
    }
    if (tmp === this.tail) {
      this.tail = tmp.prev;
    }
    return tmp;
  }

  /**
   * Traverses the list from head to tail, applying a callback function to each node.
   * @param {Function} callback - The function to apply to each node.
   * @throws {Error} - If an error occurs during traversal.
   */
  traverseForward(callback) {
    for (let tmp = this.head; tmp !== null; tmp = tmp.next) {
      callback(tmp);
    }
  }

  /**
   * Traverses the list from tail to head, applying a callback function to each node.
   * @param {Function} callback - The function to apply to each node.
   * @throws {Error} - If an error occurs during traversal.
   */
  traverseBackward(callback) {
    for (let tmp = this.tail; tmp !== null; tmp = tmp.prev) {
      callback(tmp);
    }
  }

  /**
   * Searches for a node with a specific value in the list.
   * @param {*} value - The value to search for.
   * @returns {number} - The position of the node if found, or -1 if not found.
   * @throws {Error} - If an error occurs during the search.
   */
  search(value) {
    for (let tmp = this.head, position = 0; tmp !== null; tmp = tmp.next) {
      if (tmp.value === value) {
        return position;
      }
      position++;
    }
    return -1;
  }

  /**
   * Updates the value of the node at a specific position.
   * @param {number} position - The position of the node to update.
   * @param {*} newValue - The new value to assign to the node.
   * @returns {Node|null} - The updated node, or null if an error occurred.
   * @throws {UnderflowException} - If the list is empty.
   * @throws {Error} - If the position is out of bounds.
   */
  updateAtPosition(position, newValue) {
    if (this.isEmpty) {
      throw new UnderflowException();
    }
    if (position < 0) {
      throw new OutOfBoundsException();
    }
    let tmp = this.head;
    for (let i = 0; i < position; i++) {
      if (tmp === null) {
        throw new OutOfBoundsException();
      }
      tmp = tmp.next;
    }
    if (tmp !== null) {
      tmp.value = newValue;
    }
    return tmp;
  }

  /**
   * Prints the list from head to tail in a readable format.
   */
  print() {
    if (this.isEmpty) {
      console.log("The list is empty.");
      return;
    }
    const values = [];
    for (let tmp = this.head; tmp !== null; tmp = tmp.next) {
      values.push(tmp.value);
    }
    console.log(`null <= ${values.join(" <=> ")} => null`);
  }

  /**
   * Checks if the list is empty.
   * @returns {boolean} - True if the list is empty, false otherwise.
   */
  get isEmpty() {
    return this.head === null;
  }
}

export default DoublyList;
