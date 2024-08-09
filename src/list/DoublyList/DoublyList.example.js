import DoublyList from "./DoublyList.js";

// Create a new doubly linked list
const list = new DoublyList();

// Insert nodes
console.log("Insert 10 at the beginning");
list.insertAtBeginning(10); // Inserts 10 at the beginning
list.print();
console.log("Insert 20 at the beginning");
list.insertAtBeginning(20); // Inserts 20 at the beginning
list.print();
console.log("Insert 30 at the end");
list.insertAtEnd(30); // Inserts 30 at the end
list.print();
console.log("Insert 40 at the end");
list.insertAtEnd(40); // Inserts 40 at the end
list.print();
console.log("Insert 25 at position 1");
list.insertAtPosition(1, 25); // Inserts 25 at position 1 (second position)
list.print();

// Delete nodes
const deletedHead = list.deleteFromBeginning(); // Deletes the first node (20)
console.log(`Deleted from beginning: ${deletedHead.value}`); // Outputs: 20

list.print();
const deletedTail = list.deleteFromEnd(); // Deletes the last node (40)
console.log(`Deleted from end: ${deletedTail.value}`); // Outputs: 40

list.print();
const deletedNode = list.deleteAtPosition(1); // Deletes the node at position 1 (10)
console.log(`Deleted at position 1: ${deletedNode.value}`); // Outputs: 10

// Print the list after deletions
console.log("List after deletions:");
list.print(); // Outputs: null <= 25 <=> 30 => null

// Traverse the list forward
console.log("Traversing forward:");
list.traverseForward((node) => {
  console.log(node.value); // Outputs: 25, 30
});

// Traverse the list backward
console.log("Traversing backward:");
list.traverseBackward((node) => {
  console.log(node.value); // Outputs: 30, 25
});

// Search for a value
const position = list.search(30); // Searches for the value 30
console.log(`Position of 30: ${position}`); // Outputs: 1 (since 30 is at position 1)

// Update a node's value
const updatedNode = list.updateAtPosition(0, 35); // Updates the value at position 0 to 35
console.log(`Updated node value: ${updatedNode.value} at position 0`); // Outputs: 35

// Print the list after update
console.log("List after update:");
list.print(); // Outputs: null <= 35 <=> 30 => null
