import Queue from './Queue.js';
import {
  OverflowException,
  UnderflowException,
  NonNumericValuesException,
} from './exceptions.js';

try {
  // Create a queue with a capacity of 5
  const queue = new Queue(5);

  // Enqueue elements
  console.log(queue.enqueue(10));  // Output: 10
  console.log(queue.enqueue(20));  // Output: 20
  console.log(queue.enqueue('A')); // Output: 'A'
  console.log(queue.enqueue(30));  // Output: 30
  console.log(queue.enqueue(40));  // Output: 40

  // Try to enqueue another element (should throw OverflowException)
  console.log(queue.enqueue(50));  // Throws OverflowException
} catch (e) {
  if (e instanceof OverflowException) {
    console.error('Queue overflow: cannot add more elements');
  } else {
    console.error(e.message);
  }
}

try {
  // Check the front and rear elements
  console.log('Front element:', queue.front()); // Output: 10
  console.log('Rear element:', queue.rear());   // Output: 40

  // Dequeue elements
  console.log(queue.dequeue());  // Output: 10
  console.log(queue.dequeue());  // Output: 20

  // Check max and min values in the queue
  console.log('Max value:', queue.getMax()); // Output: 40
  console.log('Min value:', queue.getMin()); // Output: 30

  // Dequeue all elements and then try to dequeue from an empty queue (should throw UnderflowException)
  console.log(queue.dequeue());  // Output: 'A'
  console.log(queue.dequeue());  // Output: 30
  console.log(queue.dequeue());  // Output: 40
  console.log(queue.dequeue());  // Throws UnderflowException
} catch (e) {
  if (e instanceof UnderflowException) {
    console.error('Queue underflow: no elements to remove');
  } else {
    console.error(e.message);
  }
}

try {
  // Create a queue with non-numeric values
  const nonNumericQueue = new Queue();
  nonNumericQueue.enqueue('B');
  nonNumericQueue.enqueue('C');

  // Try to get max/min (should throw NonNumericValuesException)
  console.log(nonNumericQueue.getMax());  // Throws NonNumericValuesException
} catch (e) {
  if (e instanceof NonNumericValuesException) {
    console.error('Queue contains no numeric values.');
  } else {
    console.error(e.message);
  }
}
