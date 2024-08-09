import Stack from "./Stack.js";
import { UnderflowException, OverflowException } from "../error/exceptions.js";

// Create a stack with a capacity of 3
const stack = new Stack(3);

console.log("Stack created with capacity:", stack.capacity);

// Push elements onto the stack
try {
  console.log("Pushing elements onto the stack...");
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log("Stack size after pushes:", stack.size);
  console.log("Top element after pushes:", stack.peek());

  // Uncomment the next line to see the OverflowException in action
  //   stack.push(40);
} catch (error) {
  if (error instanceof OverflowException) {
    console.error("OverflowException: The stack is full!");
  } else {
    console.error("An unexpected error occurred:", error);
  }
}

// Pop an element from the stack
try {
  console.log("Popping element from the stack...");
  const poppedElement = stack.pop();
  console.log("Popped element:", poppedElement);
  console.log("Stack size after pop:", stack.size);
} catch (error) {
  if (error instanceof UnderflowException) {
    console.error("UnderflowException: The stack is empty!");
  } else {
    console.error("An unexpected error occurred:", error);
  }
}

// Peek at the top element
try {
  console.log("Peeking at the top element...");
  console.log("Top element:", stack.peek());
} catch (error) {
  if (error instanceof UnderflowException) {
    console.error("UnderflowException: The stack is empty!");
  } else {
    console.error("An unexpected error occurred:", error);
  }
}

// Get maximum and minimum values in the stack
try {
  console.log("Getting maximum value in the stack...");
  console.log("Max value:", stack.getMax());
  console.log("Getting minimum value in the stack...");
  console.log("Min value:", stack.getMin());
} catch (error) {
  if (error instanceof UnderflowException) {
    console.error("UnderflowException: The stack is empty!");
  } else {
    console.error("An unexpected error occurred:", error);
  }
}

// Print the current state of the stack
console.log("Current stack state:");
stack.print();
