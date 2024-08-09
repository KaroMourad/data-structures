import Queue from "./Queue.js";
import {
  UnderflowException,
  OverflowException,
  NonNumericValuesException,
} from "../error/exceptions.js";

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue(5); // Initialize with a capacity of 5
  });

  test("should enqueue elements", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size).toBe(2);
    expect(queue.front()).toBe(1);
    expect(queue.rear()).toBe(2);
  });

  test("should throw OverflowException when full", () => {
    queue = new Queue(2);
    queue.enqueue(1);
    queue.enqueue(2);
    expect(() => queue.enqueue(3)).toThrow(OverflowException);
  });

  test("should dequeue elements", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.size).toBe(1);
    expect(queue.front()).toBe(2);
  });

  test("should throw UnderflowException when empty", () => {
    expect(() => queue.dequeue()).toThrow(UnderflowException);
  });

  test("should return front element without removing it", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.front()).toBe(1);
    expect(queue.size).toBe(2);
  });

  test("should return rear element without removing it", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.rear()).toBe(2);
  });

  test("should check if the queue is empty", () => {
    expect(queue.isEmpty).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty).toBe(false);
  });

  test("should check if the queue is full", () => {
    queue = new Queue(2);
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.isFull).toBe(true);
  });

  test("should get max value from the queue", () => {
    queue.enqueue(3);
    queue.enqueue(1);
    queue.enqueue(4);
    expect(queue.getMax()).toBe(4);
  });

  test("should get min value from the queue", () => {
    queue.enqueue(3);
    queue.enqueue(1);
    queue.enqueue(4);
    expect(queue.getMin()).toBe(1);
  });

  test("should throw UnderflowException when getting max from an empty queue", () => {
    expect(() => queue.getMax()).toThrow(UnderflowException);
  });

  test("should throw UnderflowException when getting min from an empty queue", () => {
    expect(() => queue.getMin()).toThrow(UnderflowException);
  });

  test("should handle mixed data types by throwing error in getMax()", () => {
    queue.enqueue(1);
    queue.enqueue("b");
    expect(() => queue.getMax()).toThrow(NonNumericValuesException);
  });

  test("should handle mixed data types by throwing error in getMin()", () => {
    queue.enqueue(1);
    queue.enqueue("b");
    expect(() => queue.getMin()).toThrow(NonNumericValuesException);
  });
});
