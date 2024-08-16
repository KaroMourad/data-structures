import CircularDoublyList from "./CircularDoublyList.js";
import { UnderflowException, OutOfBoundsException } from "../../utils/exceptions.js";

// Create a new CircularDoublyList
const list = new CircularDoublyList();

console.log("1. Insert elements into the list");

// Insert elements
console.log("Insert 'A' at the beginning:");
list.insertAtBeginning("A"); // List: A
console.log("  Current list:");
list.print(); // Expected Output: A

console.log("Insert 'B' at the end:");
list.insertAtEnd("B"); // List: A <-> B
console.log("  Current list:");
list.print(); // Expected Output: A <-> B

console.log("Insert 'C' at position 1:");
list.insertAtPosition(1, "C"); // List: A <-> C <-> B
console.log("  Current list:");
list.print(); // Expected Output: A <-> C <-> B

console.log("Insert 'D' at position -1:");
list.insertAtPosition(-1, "D"); // List: A <-> C <-> D <-> B
console.log("  Current list:");
list.print(); // Expected Output: A <-> C <-> D <-> B

// Traverse the list forward
console.log("2. Traverse the list forward:");
const forwardValues = [];
list.traverseForward((node) => forwardValues.push(node.value));
console.log("  Forward traversal values:", forwardValues); // Expected Output: ['A', 'C', 'D', 'B']

// Traverse the list backward
console.log("3. Traverse the list backward:");
const backwardValues = [];
list.traverseBackward((node) => backwardValues.push(node.value));
console.log("  Backward traversal values:", backwardValues); // Expected Output: ['B', 'D', 'C', 'A']

// Delete elements from the list
console.log("4. Delete elements from the list:");

console.log("Delete from the beginning:");
const deletedNode = list.deleteAtBeginning(); // List: C <-> D <-> B
console.log("  Deleted node value:", deletedNode.value); // Expected Output: 'A'
console.log("  Current list after deletion:");
list.print(); // Expected Output: C <-> D <-> B

console.log("Delete from the end:");
const deletedEndNode = list.deleteAtEnd(); // List: C <-> D
console.log("  Deleted end node value:", deletedEndNode.value); // Expected Output: 'B'
console.log("  Current list after deletion:");
list.print(); // Expected Output: C <-> D

console.log("Delete at position 0:");
const deletedPositionNode = list.deleteAtPosition(0); // List: D
console.log("  Deleted node at position 0 value:", deletedPositionNode.value); // Expected Output: 'C'
console.log("  Current list after deletion:");
list.print(); // Expected Output: D

// Handle edge cases
console.log("5. Handle edge cases:");

console.log("Try to insert at an invalid position (5):");
try {
  list.insertAtPosition(5, "X"); // Should throw OutOfBoundsException
} catch (e) {
  console.log("  Caught exception:", e instanceof OutOfBoundsException ? "OutOfBoundsException" : e.message); // Expected Output: true
}

console.log("Try to delete from an empty list:");
const emptyList = new CircularDoublyList();

console.log("Delete from beginning of empty list:");
try {
  emptyList.deleteAtBeginning(); // Should throw UnderflowException
} catch (e) {
  console.log("  Caught exception:", e instanceof UnderflowException ? "UnderflowException" : e.message); // Expected Output: true
}

console.log("Delete from end of empty list:");
try {
  emptyList.deleteAtEnd(); // Should throw UnderflowException
} catch (e) {
  console.log("  Caught exception:", e instanceof UnderflowException ? "UnderflowException" : e.message); // Expected Output: true
}

console.log("Delete at position 0 in empty list:");
try {
  emptyList.deleteAtPosition(0); // Should throw UnderflowException
} catch (e) {
  console.log("  Caught exception:", e instanceof UnderflowException ? "UnderflowException" : e.message); // Expected Output: true
}
