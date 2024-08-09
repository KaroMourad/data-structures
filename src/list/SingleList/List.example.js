import List from "./List.js";

const list = new List();

// Add nodes
console.log("Prepend 1");
list.prepend(1);
list.print(); // Output: 1 => NULL

console.log("Append 2");
list.append(2);
list.print(); // Output: 1 => 2 => NULL

console.log("Append 3");
list.append(3);
list.print(); // Output: 1 => 2 => 3 => NULL

// Delete nodes
const deletedHead = list.deleteHead(); // Deletes 1
console.log("Delete head node: ", deletedHead.value);
list.print(); // Output: 2 => 3 => NULL

try {
  const deletedNode = list.deleteAt(1); // Deletes 3 at position 2
  console.log("Deletes 3 at position 1: ", deletedNode.value); // Output: 3
} catch (e) {
  console.error(e.message);
}
list.print(); // Output: 2 => NULL

// Find nodes
const foundNode = list.find(2);
console.log(foundNode ? `Found node: ${foundNode.value}` : "Not found"); // Output: 2

const notFoundNode = list.find(100);
console.log(notFoundNode ? `Found node: ${notFoundNode.value}` : "Not found"); // Output: Not found
