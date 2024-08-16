import List from "./List.js";

const list = new List();

console.log("1. Prepend 1:");
list.prepend(1);
console.log("  Current list:");
list.print(); // Output: 1 => NULL

console.log("2. Append 2:");
list.append(2);
console.log("  Current list:");
list.print(); // Output: 1 => 2 => NULL

console.log("3. Append 3:");
list.append(3);
console.log("  Current list:");
list.print(); // Output: 1 => 2 => 3 => NULL

console.log("4. Delete head node:");
const deletedHead = list.deleteHead(); // Deletes 1
console.log("  Deleted head node value:", deletedHead.value);
console.log("  Current list after deleting head node:");
list.print(); // Output: 2 => 3 => NULL

try {
  console.log("5. Delete node at position 1:");
  const deletedNode = list.deleteAt(1); // Deletes 3 at position 1
  console.log("  Deleted node at position 1 value:", deletedNode.value); // Output: 3
} catch (e) {
  console.error("  Error:", e.message);
}
console.log("  Current list after deleting node at position 1:");
list.print(); // Output: 2 => NULL

console.log("6. Find node with value 2:");
const foundNode = list.find(2);
console.log(foundNode ? `  Found node: ${foundNode.value}` : "  Node not found"); // Output: 2

console.log("7. Find node with value 100:");
const notFoundNode = list.find(100);
console.log(notFoundNode ? `  Found node: ${notFoundNode.value}` : "  Node not found"); // Output: Not found
