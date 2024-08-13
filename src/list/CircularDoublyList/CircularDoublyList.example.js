import CircularDoublyList from "./CircularDoublyList.js";
import { UnderflowException, OutOfBoundsException } from "utils/exceptions.js";

// Create a new CircularDoublyList
const list = new CircularDoublyList();

// Insert elements into the list
list.insertAtBeginning("A"); // List: A
list.insertAtEnd("B"); // List: A <-> B
list.insertAtPosition(1, "C"); // List: A <-> C <-> B
list.insertAtPosition(-1, "D"); // List: A <-> C <-> D <-> B

// Print the list
list.print(); // Output: A <-> C <-> D <-> B

// Traverse the list forward
const forwardValues = [];
list.traverseForward((node) => forwardValues.push(node.value));
console.log(forwardValues); // Output: ['A', 'C', 'D', 'B']

// Traverse the list backward
const backwardValues = [];
list.traverseBackward((node) => backwardValues.push(node.value));
console.log(backwardValues); // Output: ['B', 'D', 'C', 'A']

// Delete elements from the list
const deletedNode = list.deleteAtBeginning(); // List: C <-> D <-> B
console.log(deletedNode.value); // Output: 'A'

const deletedEndNode = list.deleteAtEnd(); // List: C <-> D
console.log(deletedEndNode.value); // Output: 'B'

const deletedPositionNode = list.deleteAtPosition(0); // List: D
console.log(deletedPositionNode.value); // Output: 'C'

// Try to insert at an invalid position
try {
  list.insertAtPosition(5, "X"); // Should throw OutOfBoundsException
} catch (e) {
  console.log(e instanceof OutOfBoundsException); // Output: true
}

// Try to delete from an empty list
const emptyList = new CircularDoublyList();
try {
  emptyList.deleteAtBeginning(); // Should throw UnderflowException
} catch (e) {
  console.log(e instanceof UnderflowException); // Output: true
}

try {
  emptyList.deleteAtEnd(); // Should throw UnderflowException
} catch (e) {
  console.log(e instanceof UnderflowException); // Output: true
}

try {
  emptyList.deleteAtPosition(0); // Should throw UnderflowException
} catch (e) {
  console.log(e instanceof UnderflowException); // Output: true
}
