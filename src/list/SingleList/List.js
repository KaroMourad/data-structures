import { OutOfBoundsException, UnderflowException } from "../../utils/exceptions";

/**
 * Represents a node in a singly linked list.
 * @class
 */
class Node {
  /**
   * Creates a new node.
   * @param {*} value - The value to store in the node.
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Represents a singly linked list.
 * @class
 */
class List {
  #size;

  /**
   * Initializes an empty linked list.
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.#size = 0;
  }

  /**
   * Traverses the list and executes the given callback function on each node.
   * @param {function(Node): void} callback - The function to execute on each node.
   * @returns {void}
   */
  traversal(callback) {
    for (let tmp = this.head; tmp !== null; tmp = tmp.next) {
      callback(tmp);
    }
  }

  /**
   * Adds a new node with the specified value to the beginning of the list.
   * @param {*} value - The value to add to the list.
   * @returns {void}
   */
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.#size++;
  }

  /**
   * Adds a new node with the specified value to the end of the list.
   * @param {*} value - The value to add to the list.
   * @returns {void}
   */
  append(value) {
    const node = new Node(value);
    if (this.isEmpty) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.#size++;
  }

  /**
   * Deletes the head node of the list.
   * @returns {Node|null} - The deleted node or null if the list is empty.
   * @throws {UnderflowException} - Thrown if the list is empty.
   */
  deleteHead() {
    if (this.isEmpty) {
      throw new UnderflowException();
    }
    const tmp = this.head;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.#size--;
    return tmp;
  }

  /**
   * Deletes the tail node of the list.
   * @returns {Node|null} - The deleted node or null if the list is empty.
   * @throws {UnderflowException} - Thrown if the list is empty.
   */
  deleteTail() {
    if (this.isEmpty) {
      throw new UnderflowException();
    }
    if (this.#size === 1) {
      return this.deleteHead();
    }

    let prev = this.head;
    while (prev.next !== this.tail) {
      prev = prev.next;
    }

    const tmp = this.tail;
    this.tail = prev;
    this.tail.next = null;
    this.#size--;
    return tmp;
  }

  /**
   * Deletes a node at the specified position in the list.
   * @param {number} position - The position of the node to delete.
   * @returns {Node|null} - The deleted node or null if the list is empty.
   * @throws {UnderflowException} - Thrown if the list is empty.
   * @throws {OutOfBoundsException} - Thrown if the position is out of bounds.
   */
  deleteAt(position) {
    if (this.isEmpty) {
      throw new UnderflowException();
    }
    if (position < 0 || position >= this.#size) {
      throw new OutOfBoundsException();
    }

    if (position === 0) {
      return this.deleteHead();
    }

    if (position === this.#size - 1) {
      return this.deleteTail();
    }

    let prev = this.head;
    for (let i = 1; i < position; i++) {
      prev = prev.next;
    }

    const tmp = prev.next;
    prev.next = tmp.next;
    this.#size--;
    return tmp;
  }

  /**
   * Finds the first node containing the specified value in the list.
   * @param {*} value - The value to find in the list.
   * @returns {Node|null} - The node containing the value, or null if not found.
   */
  find(value) {
    let foundNode = null;
    this.traversal((currentNode) => {
      if (currentNode.value === value) {
        foundNode = currentNode;
      }
    });
    return foundNode;
  }

  /**
   * Prints the entire list to the console in a readable format.
   * @returns {void}
   */
  print() {
    let stringList = "";
    this.traversal((currentNode) => {
      stringList += `${currentNode.value} => `;
    });
    console.log(stringList + "NULL");
  }

  /**
   * Checks if the list is empty.
   * @returns {boolean} - True if the list is empty, false otherwise.
   */
  get isEmpty() {
    return this.head === null;
  }

  /**
   * Gets the size of the list.
   * @returns {number} - The number of nodes in the list.
   */
  get size() {
    return this.#size;
  }
}

export default List;
