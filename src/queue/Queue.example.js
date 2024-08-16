import Queue from "./Queue.js";
import {
  OverflowException,
  NonNumericValuesException,
} from "../utils/exceptions.js";

try {
  // 1. Create a queue with a capacity of 5
  const queue = new Queue(5);
  console.log("1. Queue created with capacity:", queue.capacity);

  // 2. Enqueue elements
  console.log("\n2. Enqueuing elements...");
  console.log("  Enqueued:", queue.enqueue(10)); // Output: 10
  console.log("  Enqueued:", queue.enqueue(20)); // Output: 20
  console.log("  Enqueued:", queue.enqueue("A")); // Output: 'A'
  console.log("  Enqueued:", queue.enqueue(30)); // Output: 30
  console.log("  Enqueued:", queue.enqueue(40)); // Output: 40

  // 3. Attempt to enqueue another element (should throw OverflowException)
  console.log("\n3. Attempting to enqueue another element...");
  console.log("  Enqueued:", queue.enqueue(50)); // Throws OverflowException
} catch (e) {
  if (e instanceof OverflowException) {
    console.error("  OverflowException: Queue overflow - cannot add more elements");
  } else {
    console.error("  An unexpected error occurred:", e.message);
  }
}

try {
  // 4. Create a queue for non-numeric values
  const nonNumericQueue = new Queue();
  console.log("\n4. Queue created for non-numeric values.");

  // 5. Enqueue non-numeric elements
  console.log("\n5. Enqueuing non-numeric elements...");
  console.log("  Enqueued:", nonNumericQueue.enqueue("B"));
  console.log("  Enqueued:", nonNumericQueue.enqueue("C"));

  // 6. Attempt to get max/min (should throw NonNumericValuesException)
  console.log("\n6. Attempting to get max value from non-numeric queue...");
  console.log("  Max value:", nonNumericQueue.getMax()); // Throws NonNumericValuesException
} catch (e) {
  if (e instanceof NonNumericValuesException) {
    console.error("  NonNumericValuesException: Queue contains no numeric values.");
  } else {
    console.error("  An unexpected error occurred:", e.message);
  }
}
