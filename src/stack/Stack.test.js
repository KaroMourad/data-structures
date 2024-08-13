import Stack from "./Stack.js";
import { UnderflowException, OverflowException } from "utils/exceptions.js";

describe("Stack", () => {
  test("should create an empty stack with default capacity", () => {
    const stack = new Stack();
    expect(stack.size).toBe(0);
    expect(stack.isEmpty).toBe(true);
    expect(stack.isFull).toBe(false);
  });

  test("should create a stack with a specific capacity", () => {
    const stack = new Stack(3);
    expect(stack.capacity).toBe(3);
  });

  test("should push elements onto the stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.size).toBe(2);
    expect(stack.peek()).toBe(2);
  });

  test("should pop elements from the stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.size).toBe(1);
  });

  test("should peek the top element without removing it", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toBe(1);
    expect(stack.size).toBe(1);
  });

  test("should throw UnderflowException on pop from an empty stack", () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow(UnderflowException);
  });

  test("should throw UnderflowException on peek from an empty stack", () => {
    const stack = new Stack();
    expect(() => stack.peek()).toThrow(UnderflowException);
  });

  test("should throw OverflowException when pushing to a full stack", () => {
    const stack = new Stack(2);
    stack.push(1);
    stack.push(2);
    expect(() => stack.push(3)).toThrow(OverflowException);
  });

  test("should be full when size equals capacity", () => {
    const stack = new Stack(2);
    stack.push(1);
    stack.push(2);
    expect(stack.isFull).toBe(true);
  });

  test("should get maximum value from the stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(3);
    stack.push(2);
    expect(stack.getMax()).toBe(3);
  });

  test("should get minimum value from the stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(3);
    stack.push(2);
    expect(stack.getMin()).toBe(1);
  });

  test("should throw UnderflowException on getMax from an empty stack", () => {
    const stack = new Stack();
    expect(() => stack.getMax()).toThrow(UnderflowException);
  });

  test("should throw UnderflowException on getMin from an empty stack", () => {
    const stack = new Stack();
    expect(() => stack.getMin()).toThrow(UnderflowException);
  });

  test("should handle pushing and popping with specific capacity", () => {
    const stack = new Stack(3);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size).toBe(3);
    expect(stack.pop()).toBe(3);
    expect(stack.size).toBe(2);
  });

  test("should correctly report when the stack is empty", () => {
    const stack = new Stack();
    expect(stack.isEmpty).toBe(true);
    stack.push(1);
    expect(stack.isEmpty).toBe(false);
    stack.pop();
    expect(stack.isEmpty).toBe(true);
  });

  test("should correctly report when the stack is full", () => {
    const stack = new Stack(2);
    stack.push(1);
    stack.push(2);
    expect(stack.isFull).toBe(true);
    stack.pop();
    expect(stack.isFull).toBe(false);
  });
});
