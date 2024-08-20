import Stack from "./Stack";
import { UnderflowException, OverflowException } from "../utils/exceptions";

// 1. Create a stack with a capacity of 3
const stack = new Stack(3);
console.log("1. Stack created with capacity:", stack.capacity);

// 2. Push elements onto the stack
try {
  console.log("\n2. Pushing elements onto the stack...");
  stack.push(10);
  console.log("  Pushed 10, stack size:", stack.size);
  stack.push(20);
  console.log("  Pushed 20, stack size:", stack.size);
  stack.push(30);
  console.log("  Pushed 30, stack size:", stack.size);
  console.log("  Top element after pushes:", stack.peek());

  // Uncomment the next line to see the OverflowException in action
  // console.log("\n  Attempting to push 40 onto the stack...");
  // stack.push(40);
} catch (error) {
  if (error instanceof OverflowException) {
    console.error("  OverflowException: The stack is full!");
  } else {
    console.error("  An unexpected error occurred:", error);
  }
}

// 3. Pop an element from the stack
try {
  console.log("\n3. Popping element from the stack...");
  const poppedElement = stack.pop();
  console.log("  Popped element:", poppedElement);
  console.log("  Stack size after pop:", stack.size);
  console.log("  Top element after pop:", stack.peek());
} catch (error) {
  if (error instanceof UnderflowException) {
    console.error("  UnderflowException: The stack is empty!");
  } else {
    console.error("  An unexpected error occurred:", error);
  }
}

// 4. Peek at the top element
try {
  console.log("\n4. Peeking at the top element...");
  const topElement = stack.peek();
  console.log("  Top element:", topElement);
} catch (error) {
  if (error instanceof UnderflowException) {
    console.error("  UnderflowException: The stack is empty!");
  } else {
    console.error("  An unexpected error occurred:", error);
  }
}

// 5. Get maximum and minimum values in the stack
try {
  console.log("\n5. Getting maximum value in the stack...");
  const maxValue = stack.getMax();
  console.log("  Max value:", maxValue);

  console.log("\n6. Getting minimum value in the stack...");
  const minValue = stack.getMin();
  console.log("  Min value:", minValue);
} catch (error) {
  if (error instanceof UnderflowException) {
    console.error("  UnderflowException: The stack is empty!");
  } else {
    console.error("  An unexpected error occurred:", error);
  }
}

// 7. Print the current state of the stack
console.log("\n7. Current stack state:");
stack.print();
