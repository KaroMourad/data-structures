import List from "./List.js";
import { OutOfBoundsException, UnderflowException } from "../../utils/exceptions.js";

describe("Singly Linked List", () => {
  let list;

  beforeEach(() => {
    list = new List();
  });

  test("should initialize an empty list", () => {
    expect(list.isEmpty).toBe(true);
    expect(list.size).toBe(0);
  });

  test("should prepend a node to the list", () => {
    list.prepend(1);
    expect(list.isEmpty).toBe(false);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(1);
    expect(list.size).toBe(1);
  });

  test("should append a node to the list", () => {
    list.append(1);
    expect(list.isEmpty).toBe(false);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(1);
    expect(list.size).toBe(1);
  });

  test("should prepend multiple nodes to the list", () => {
    list.prepend(1);
    list.prepend(2);
    expect(list.head.value).toBe(2);
    expect(list.tail.value).toBe(1);
    expect(list.size).toBe(2);
  });

  test("should append multiple nodes to the list", () => {
    list.append(1);
    list.append(2);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(2);
    expect(list.size).toBe(2);
  });

  test("should delete the head node", () => {
    list.append(1);
    list.append(2);
    const deletedNode = list.deleteHead();
    expect(deletedNode.value).toBe(1);
    expect(list.head.value).toBe(2);
    expect(list.size).toBe(1);
  });

  test("should delete the only node in the list", () => {
    list.append(1);
    const deletedNode = list.deleteHead();
    expect(deletedNode.value).toBe(1);
    expect(list.isEmpty).toBe(true);
    expect(list.size).toBe(0);
  });

  test("should throw an exception when deleting from an empty list", () => {
    expect(() => list.deleteHead()).toThrow(UnderflowException);
  });

  test("should delete a node at a specific position", () => {
    list.append(1);
    list.append(2);
    list.append(3);
    const deletedNode = list.deleteAt(1);
    expect(deletedNode.value).toBe(2);
    expect(list.head.next.value).toBe(3);
    expect(list.size).toBe(2);
  });

  test("should throw an exception when deleting a node at an invalid position", () => {
    list.append(1);
    expect(() => list.deleteAt(5)).toThrow(OutOfBoundsException);
    expect(() => list.deleteAt(-1)).toThrow(OutOfBoundsException);
  });

  test("should find the first node with a given value", () => {
    list.append(1);
    list.append(2);
    list.append(3);
    const node = list.find(2);
    expect(node).not.toBeNull();
    expect(node.value).toBe(2);
  });

  test("should return null when finding a non-existent value", () => {
    list.append(1);
    list.append(2);
    const node = list.find(3);
    expect(node).toBeNull();
  });

  test("should return the correct size of the list", () => {
    list.append(1);
    list.append(2);
    expect(list.size).toBe(2);
    list.deleteHead();
    expect(list.size).toBe(1);
  });

  test("should print the list in the correct format", () => {
    console.log = jest.fn();
    list.append(1);
    list.append(2);
    list.append(3);
    list.print();
    expect(console.log).toHaveBeenCalledWith("1 => 2 => 3 => NULL");
  });

  test("should correctly identify an empty list", () => {
    expect(list.isEmpty).toBe(true);
    list.append(1);
    expect(list.isEmpty).toBe(false);
  });
});
