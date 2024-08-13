import { OutOfBoundsException, UnderflowException } from "utils/exceptions.js";

class Node {
  /**
   * Creates a new Node.
   * @param {*} value - The value to be stored in the node.
   */
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class CircularDoublyList {
  constructor() {
    /** @type {Node|null} */
    this.head = null;
    /** @type {Node|null} */
    this.tail = null;
    /** @type {number} */
    this._size = 0;
  }

  /**
   * Inserts a new value at the beginning of the list.
   * @param {*} value - The value to be added.
   * @returns {Node} The newly inserted node.
   */
  insertAtBeginning(value) {
    const node = new Node(value);
    if (this.isEmpty) {
      return this.#insertNodeIfEmpty(node);
    } else {
      node.next = this.head;
      node.prev = this.tail;
      this.head.prev = node;
      this.head = node;
      this.tail.next = this.head;
    }
    this._size++;
    return node;
  }

  /**
   * Inserts a new value at the end of the list.
   * @param {*} value - The value to be added.
   * @returns {Node} The newly inserted node.
   */
  insertAtEnd(value) {
    const node = new Node(value);
    if (this.isEmpty) {
      return this.#insertNodeIfEmpty(node);
    } else {
      node.next = this.head;
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
      this.head.prev = this.tail;
    }
    this._size++;
    return node;
  }

  /**
   * Inserts a new value at a specific position in the list.
   * The position is normalized to allow for wrapping around
   * both forward and backward.
   *
   * @param {number} position - The position where the value should be inserted. Can be negative.
   * @param {*} value - The value to be added.
   * @returns {Node} The newly inserted node.
   * @throws {OutOfBoundsException} If the position is out of bounds for an empty list.
   */
  insertAtPosition(position, value) {
    if (this.isEmpty && position !== 0) {
      throw new OutOfBoundsException();
    }

    if (this.isEmpty) {
      return this.#insertNodeIfEmpty(new Node(value));
    }

    if (position < 0) {
      // Normalize negative position
      position = (this.size + (position % this.size)) % this.size;
    } else {
      // Normalize positive position
      position = position % this.size;
    }

    if (position === 0) {
      return this.insertAtBeginning(value);
    }
    if (position === this.size) {
      return this.insertAtEnd(value);
    }

    const node = new Node(value);
    let tmp = this.head;

    for (let i = 0; i < position; i++) {
      tmp = tmp.next;
    }

    return this.#insertNode(tmp.prev, node);
  }

  /**
   * Deletes the node at the beginning of the list.
   * @returns {Node} The deleted node.
   * @throws {UnderflowException} If the list is empty.
   */
  deleteAtBeginning() {
    if (this.isEmpty) {
      throw new UnderflowException();
    }
    let tmp = this.head;

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head.next.prev = this.tail;
      this.tail.next = this.head.next;
      this.head = this.head.next;
    }
    this._size--;
    return tmp;
  }

  /**
   * Deletes the node at the end of the list.
   * @returns {Node} The deleted node.
   * @throws {UnderflowException} If the list is empty.
   */
  deleteAtEnd() {
    if (this.isEmpty) {
      throw new UnderflowException();
    }
    let tmp = this.tail;

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail.prev.next = this.head;
      this.head.prev = this.tail.prev;
      this.tail = this.tail.prev;
    }
    this._size--;
    return tmp;
  }

  /**
   * Deletes a node at a specific position in the list.
   * The position is normalized to allow for wrapping around
   * both forward and backward.
   *
   * @param {number} position - The position of the node to be deleted. Can be negative.
   * @returns {Node} The deleted node.
   * @throws {UnderflowException} If the list is empty.
   * @throws {OutOfBoundsException} If the position is out of bounds for an empty list.
   */
  deleteAtPosition(position) {
    if (this.isEmpty) {
      throw new UnderflowException();
    }

    if (position < 0) {
      // Normalize negative position
      position = (this.size + (position % this.size)) % this.size;
    } else {
      // Normalize positive position
      position = position % this.size;
    }

    if (position === 0) {
      return this.deleteAtBeginning();
    }
    if (position === this.size - 1) {
      return this.deleteAtEnd();
    }

    let tmp = this.head;

    for (let i = 0; i < position; i++) {
      tmp = tmp.next;
    }

    return this.#deleteNode(tmp);
  }

  /**
   * Traverses the list forward and applies the callback function to each node.
   * @param {function(Node): void} callback - The function to apply to each node.
   */
  traverseForward(callback) {
    if (this.isEmpty) {
      console.log("The list is empty.");
      return;
    }
    let tmp = this.head;
    do {
      callback(tmp);
      tmp = tmp.next;
    } while (tmp !== this.head);
  }

  /**
   * Traverses the list backward and applies the callback function to each node.
   * @param {function(Node): void} callback - The function to apply to each node.
   */
  traverseBackward(callback) {
    if (this.isEmpty) {
      console.log("The list is empty.");
      return;
    }
    let tmp = this.tail;
    do {
      callback(tmp);
      tmp = tmp.prev;
    } while (tmp !== this.tail);
  }

  /**
   * Prints the list values from head to tail.
   */
  print() {
    if (this.isEmpty) {
      console.log("The list is empty.");
      return;
    }
    const arr = [];
    this.traverseForward((node) => arr.push(node.value));
    console.log(arr.join(" <=> "));
  }

  /**
   * Checks if the list is empty.
   * @returns {boolean} True if the list is empty, false otherwise.
   */
  get isEmpty() {
    return this.head === null;
  }

  /**
   * Returns the current size of the list.
   * @returns {number} The number of nodes in the list.
   */
  get size() {
    return this._size;
  }

  /**
   * Inserts a node when the list is empty.
   * @param {Node} node - The node to be inserted.
   * @returns {Node} The inserted node.
   * @private
   */
  #insertNodeIfEmpty(node) {
    node.next = node;
    node.prev = node;
    this.head = this.tail = node;
    this._size++;
    return node;
  }

  /**
   * Inserts a new node after the specified node.
   * @param {Node} atNode - The node after which the new node should be inserted.
   * @param {Node} newNode - The new node to be inserted.
   * @returns {Node} The newly inserted node.
   * @private
   */
  #insertNode(atNode, newNode) {
    newNode.next = atNode.next;
    newNode.prev = atNode;
    atNode.next.prev = newNode;
    atNode.next = newNode;
    this._size++;
    return newNode;
  }

  /**
   * Deletes a specified node from the list.
   * @param {Node} node - The node to be deleted.
   * @returns {Node} The deleted node.
   * @private
   */
  #deleteNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
    this._size--;
    return node;
  }
}

export default CircularDoublyList;
