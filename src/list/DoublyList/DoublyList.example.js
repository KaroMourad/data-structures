import DoublyList from "./DoublyList.js";

// Create a new doubly linked list
const list = new DoublyList();

console.log("1. Insert nodes");

// Insert nodes
console.log("Insert 10 at the beginning:");
list.insertAtBeginning(10); // Inserts 10 at the beginning
console.log("  Current list:");
list.print(); // Expected Output: 10 <=> NULL

console.log("Insert 20 at the beginning:");
list.insertAtBeginning(20); // Inserts 20 at the beginning
console.log("  Current list:");
list.print(); // Expected Output: 20 <=> 10 <=> NULL

console.log("Insert 30 at the end:");
list.insertAtEnd(30); // Inserts 30 at the end
console.log("  Current list:");
list.print(); // Expected Output: 20 <=> 10 <=> 30 <=> NULL

console.log("Insert 40 at the end:");
list.insertAtEnd(40); // Inserts 40 at the end
console.log("  Current list:");
list.print(); // Expected Output: 20 <=> 10 <=> 30 <=> 40 <=> NULL

console.log("Insert 25 at position 1:");
list.insertAtPosition(1, 25); // Inserts 25 at position 1 (second position)
console.log("  Current list:");
list.print(); // Expected Output: 20 <=> 25 <=> 10 <=> 30 <=> 40 <=> NULL

// Delete nodes
console.log("2. Delete nodes");

const deletedHead = list.deleteFromBeginning(); // Deletes the first node (20)
console.log(`  Deleted from beginning: ${deletedHead.value}`); // Expected Output: 20
console.log("  Current list after deleting from beginning:");
list.print(); // Expected Output: 25 <=> 10 <=> 30 <=> 40 <=> NULL

const deletedTail = list.deleteFromEnd(); // Deletes the last node (40)
console.log(`  Deleted from end: ${deletedTail.value}`); // Expected Output: 40
console.log("  Current list after deleting from end:");
list.print(); // Expected Output: 25 <=> 10 <=> 30 <=> NULL

const deletedNode = list.deleteAtPosition(1); // Deletes the node at position 1 (10)
console.log(`  Deleted at position 1: ${deletedNode.value}`); // Expected Output: 10
console.log("  Current list after deleting node at position 1:");
list.print(); // Expected Output: 25 <=> 30 <=> NULL

// Print the list after deletions
console.log("3. List after deletions:");
list.print(); // Expected Output: 25 <=> 30 <=> NULL

// Traverse the list forward
console.log("4. Traversing forward:");
list.traverseForward((node) => {
  console.log(`  ${node.value}`); // Expected Output: 25, 30
});

// Traverse the list backward
console.log("5. Traversing backward:");
list.traverseBackward((node) => {
  console.log(`  ${node.value}`); // Expected Output: 30, 25
});

// Search for a value
console.log("6. Search for a value:");
const position = list.search(30); // Searches for the value 30
console.log(`  Position of 30: ${position}`); // Expected Output: 1 (since 30 is at position 1)

// Update a node's value
console.log("7. Update a node's value:");
const updatedNode = list.updateAtPosition(0, 35); // Updates the value at position 0 to 35
console.log(`  Updated node value: ${updatedNode.value} at position 0`); // Expected Output: 35

// Print the list after update
console.log("8. List after update:");
list.print(); // Expected Output: 35 <=> 30 <=> NULL
