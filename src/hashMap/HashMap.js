import { sdbmHashing } from "./hash-functions";
import { NonStringValuesException } from "../utils/exceptions";

class Node {
  /**
   * Represents a node in the linked list.
   * @param {string} key - The key of the node.
   * @param {*} value - The value of the node.
   * @param {Node|null} [next=null] - The next node in the list.
   */
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class HashMap {
  #buckets;
  #capacity;
  #size;
  #hashFn;
  #loadFactorThreshold = 0.75;

  /**
   * Creates a new HashMap.
   * @param {number} [capacity=10] - Initial capacity of the hash map.
   * @param {function} [hashFn=sdbmHashing] - Hash function to use for key hashing.
   */
  constructor(capacity = 10, hashFn = sdbmHashing) {
    this.#buckets = new Array(capacity).fill(null);
    this.#capacity = capacity;
    this.#size = 0;
    this.#hashFn = hashFn;
  }

  /**
   * Hashes a key using the provided hash function.
   * @param {string} key - The key to hash.
   * @returns {number} The hash index.
   */
  hash(key) {
    return this.#hashFn(key, this.#capacity);
  }

  /**
   * Traverses a bucket and applies a callback to each node.
   * @param {Node} bucket - The head node of the bucket.
   * @param {function} callback - The function to apply to each node.
   */
  traverseBucket(bucket, callback) {
    let currentNode = bucket;
    while (currentNode !== null) {
      callback(currentNode);
      currentNode = currentNode.next;
    }
  }

  /**
   * Inserts or updates a key-value pair in the hash map.
   * @param {string} key - The key to insert or update.
   * @param {*} value - The value to associate with the key.
   * @returns {*} The value associated with the key.
   * @throws {NonStringValuesException} If the key is not a string.
   */
  put(key, value) {
    this.validateKey(key);

    if (this.#size / this.#capacity > this.#loadFactorThreshold) {
      this.resize(this.#capacity * 2);
    }
    const index = this.hash(key);
    const currentBucket = this.#buckets[index];
    if (currentBucket) {
      let currentNode = currentBucket;
      let prevNode = currentNode;
      do {
        if (currentNode.key === key) {
          currentNode.value = value;
          return value;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
      } while (currentNode !== null);

      const node = new Node(key, value);
      prevNode.next = node;
      this.#size++;
      return node.value;
    } else {
      const node = new Node(key, value);
      this.#buckets[index] = node;
      this.#size++;
      return node.value;
    }
  }

  /**
   * Retrieves the value associated with a given key.
   * @param {string} key - The key to search for.
   * @returns {*} The value associated with the key, or undefined if the key is not found.
   * @throws {NonStringValuesException} If the key is not a string.
   */
  get(key) {
    this.validateKey(key);

    const index = this.hash(key);
    const currentBucket = this.#buckets[index];
    if (currentBucket) {
      let currentNode = currentBucket;
      while (currentNode !== null) {
        if (currentNode.key === key) {
          return currentNode.value;
        }
        currentNode = currentNode.next;
      }
    }
  }

  /**
   * Removes a key-value pair from the hash map.
   * @param {string} key - The key to remove.
   * @returns {*} The value associated with the removed key, or undefined if the key is not found.
   * @throws {NonStringValuesException} If the key is not a string.
   */
  remove(key) {
    this.validateKey(key);

    const index = this.hash(key);
    const currentBucket = this.#buckets[index];

    if (currentBucket) {
      let currentNode = currentBucket;
      let prevNode = currentNode;
      while (currentNode !== null) {
        if (currentNode.key === key) {
          if (currentNode === currentBucket) {
            this.#buckets[index] = currentNode.next;
          } else {
            prevNode.next = currentNode.next;
          }
          this.#size--;
          return currentNode.value;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }

  /**
   * Resizes the hash map to a new capacity.
   * @param {number} newCapacity - The new capacity of the hash map.
   */
  resize(newCapacity) {
    const oldBuckets = this.#buckets;
    this.#buckets = new Array(newCapacity).fill(null);
    this.#capacity = newCapacity;
    this.#size = 0;

    for (const bucket of oldBuckets) {
      let currentNode = bucket;
      while (currentNode !== null) {
        this.put(currentNode.key, currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }

  /**
   * Clears all key-value pairs from the hash map.
   */
  clear() {
    this.#buckets = new Array(this.#capacity).fill(null);
    this.#size = 0;
  }

  /**
   * Validates that the key is a string.
   * @param {*} key - The key to validate.
   * @throws {NonStringValuesException} If the key is not a string.
   * @returns {string} The validated key.
   */
  validateKey(key) {
    if (typeof key !== "string") {
      throw new NonStringValuesException("Key must be a string");
    }
    return key;
  }

  /**
   * Prints the current state of the hash map to the console.
   */
  print() {
    for (let i = 0; i < this.#capacity; i++) {
      let currentNode = this.#buckets[i];
      let str = "";
      while (currentNode !== null) {
        str += `${currentNode.key}: ${currentNode.value} -> `;
        currentNode = currentNode.next;
      }
      str += "null";
      console.log(`[${i}]: ${str}`);
    }
    console.log(`Size: ${this.#size}`);
  }

  /**
   * Returns the number of key-value pairs in the hash map.
   * @returns {number} The size of the hash map.
   */
  get size() {
    return this.#size;
  }

  /**
   * Returns the current capacity of the hash map.
   * @returns {number} The capacity of the hash map.
   */
  get capacity() {
    return this.#capacity;
  }
}

export default HashMap;
