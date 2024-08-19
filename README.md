# Data Structures

This repository contains custom implementations of various data structures in JavaScript. Each data structure is designed with a focus on performance, usability, and clarity.

## Implemented Data Structures

### Stack
- **Description:** LIFO (Last In, First Out) data structure.
- **Common Operations:**
  - `push(value)`: Adds an element. Throws `OverflowException` if full.
  - `pop()`: Removes and returns the top element. Throws `UnderflowException` if empty.
  - `peek()`: Returns the top element. Throws `UnderflowException` if empty.
  - `size`: Returns the number of elements.
  - `isEmpty()`: Checks if the stack is empty.
  - `isFull()`: Checks if the stack is full.
- **Example:**
  ```javascript
  import Stack from "path/to/src/Stack";

  const stack = new Stack(3);
  stack.push(10);
  console.log(stack.peek()); // Output: 10
  ```

### Queue
- **Description:** FIFO (First In, First Out) data structure.
- **Common Operations:**
  - `enqueue(value)`: Adds an element to the end. Throws `OverflowException` if full.
  - `dequeue()`: Removes and returns the front element. Throws `UnderflowException` if empty.
  - `front()`: Returns the front element without removing it. Throws `UnderflowException` if empty.
  - `rear()`: Returns the rear element without removing it. Throws `UnderflowException` if empty.
  - `size`: Returns the number of elements.
  - `isEmpty()`: Checks if the queue is empty.
  - `isFull()`: Checks if the queue is full.
- **Example:**
  ```javascript
  import Queue from "path/to/src/Queue";

  const queue = new Queue(5);
  queue.enqueue(10);
  console.log(queue.front()); // Output: 10
  ```

### Singly Linked List
- **Description:** Nodes contain a reference to the next node.
- **Common Operations:**
  - `prepend(value)`: Adds a new node to the beginning of the list.
  - `append(value)`: Adds a new node to the end of the list.
  - `deleteHead()`: Removes and returns the head node. Throws `UnderflowException` if empty.
  - `deleteTail()`: Removes and returns the tail node. Throws `UnderflowException` if empty.
  - `deleteAt(position)`: Removes and returns the node at the specified position. Throws `UnderflowException` if empty or `OutOfBoundsException` if the position is out of range.
  - `find(value)`: Finds and returns the first node containing the specified value, or null if not found.
  - `traversal(callback)`: Executes the callback function on each node in the list.
  - `size`: Returns the number of nodes in the list.
  - `print()`: Prints the entire list to the console in a readable format.
  - `isEmpty()`: Checks if the list is empty.
- **Example:**
  ```javascript
  import SinglyLinkedList from "path/to/src/SinglyLinkedList";

  const list = new SinglyLinkedList();
  list.append(10);
  list.prepend(5);
  console.log(list.size); // Output: 2
  ```

### Doubly Linked List
- **Description:** Nodes contain references to both the next and previous nodes.
- **Common Operations:**
  - `insertAtBeginning(value)`: Inserts a new node at the beginning of the list.
  - `insertAtEnd(value)`: Inserts a new node at the end of the list.
  - `insertAtPosition(position, value)`: Inserts a new node at the specified position. Throws `OutOfBoundsException` if the position is invalid.
  - `deleteFromBeginning()`: Removes and returns the node from the beginning of the list. Throws `UnderflowException` if empty.
  - `deleteFromEnd()`: Removes and returns the node from the end of the list. Throws `UnderflowException` if empty.
  - `deleteAtPosition(position)`: Removes and returns the node at the specified position. Throws `UnderflowException` if empty or `OutOfBoundsException` if the position is invalid.
  - `traverseForward(callback)`: Traverses the list from head to tail and applies the provided callback function to each node.
  - `traverseBackward(callback)`: Traverses the list from tail to head and applies the provided callback function to each node.
  - `search(value)`: Searches for a node with the specified value and returns its position. Returns -1 if not found.
  - `updateAtPosition(position, newValue)`: Updates the value of the node at the specified position. Throws `UnderflowException` if empty or `OutOfBoundsException` if the position is invalid.
  - `print()`: Prints the entire list from head to tail.
  - `isEmpty()`: Checks if the list is empty.
- **Example:**
  ```javascript
  import DoublyLinkedList from "path/to/src/DoublyLinkedList";

  const list = new DoublyLinkedList();
  list.insertAtEnd(10);
  list.insertAtBeginning(5);
  console.log(list.size); // Output: 2
  ```

### Circular Linked List
- **Description:** The last node is connected back to the first node.
- **Common Operations:**
  - `insertAtBeginning(value)`: Adds a node at the start, linking it between the current head and tail. If empty, the node links to itself.
  - `insertAtEnd(value)`: Adds a node at the end, linking it between the current tail and head. If empty, the node links to itself.
  - `insertAtPosition(position, value)`: Adds a node at the specified position, with support for negative indexing and wrapping. Throws `OutOfBoundsException` if invalid in an empty list.
  - `deleteAtBeginning()`: Removes the node at the start. If only one node, it empties the list. Otherwise, head moves to the next node.
  - `deleteAtEnd()`: Removes the node at the end. If only one node, it empties the list. Otherwise, tail moves to the previous node.
  - `deleteAtPosition(position)`: Removes the node at the specified position, with support for negative indexing and wrapping. Throws `UnderflowException` if empty.
  - `traverseForward(callback)`: Applies a callback to each node from head to tail, looping back to the head.
  - `traverseBackward(callback)`: Applies a callback to each node from tail to head, looping back to the tail.
  - `print()`: Displays the list's values from head to tail.
  - `isEmpty()`: Returns true if empty, false otherwise.
  - `size`: Returns the number of nodes.
- **Example:**
  ```javascript
  import CircularLinkedList from "path/to/src/CircularLinkedList";

  const list = new CircularLinkedList();
  list.insertAtEnd(10);
  list.insertAtBeginning(5);
  console.log(list.size); // Output: 2
  ```

### Hash Map
- **Description:** A key-value store optimized for fast lookups.
- **Common Operations:**
  - `put(key, value)`: Inserts or updates a key-value pair. Resizes if the load factor exceeds the threshold. Throws `NonStringValuesException` for non-string keys.
  - `get(key)`: Retrieves the value for a given key. Returns undefined if not found. Throws `NonStringValuesException` for non-string keys.
  - `remove(key)`: Removes the key-value pair associated with the key. Returns the removed value or undefined if not found. Throws `NonStringValuesException` for non-string keys.
  - `resize(newCapacity)`: Resizes the map and rehashes existing key-value pairs.
  - `clear()`: Clears all key-value pairs and resets size to zero.
  - `print()`: Prints the map's contents, showing each bucket and its linked list of key-value pairs.
  - `size`: Returns the number of key-value pairs.
  - `capacity`: Returns the current capacity.
  - `validateKey(key)`: Ensures the key is a string; throws `NonStringValuesException` if not.
- **Example:**
  ```javascript
  import HashMap from "path/to/src/HashMap";

  const map = new HashMap();
  map.put("key1", "value1");
  console.log(map.get("key1")); // Output: "value1"
  ```

## Upcoming Features

- **Trees**
  - Implementation of various tree structures such as Binary Trees, Binary Search Trees, and more.

## Usage

Each data structure is implemented as a class with methods corresponding to common operations. To use any of the data structures, import the class and instantiate it.

## Contributing

Contributions are welcome! If you have ideas for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
