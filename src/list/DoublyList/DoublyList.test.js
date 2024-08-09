import DoublyList from "./DoublyList.js";
import { UnderflowException } from "../../error/exceptions.js";

describe("DoublyList", () => {
  let list;

  beforeEach(() => {
    list = new DoublyList();
  });

  test("should insert a node at the beginning of the list", () => {
    list.insertAtBeginning(10);
    expect(list.head.value).toBe(10);
    expect(list.tail.value).toBe(10);
    expect(list.head.next).toBeNull();
    expect(list.head.prev).toBeNull();
  });

  test("should insert multiple nodes at the beginning of the list", () => {
    list.insertAtBeginning(10);
    list.insertAtBeginning(20);
    expect(list.head.value).toBe(20);
    expect(list.head.next.value).toBe(10);
    expect(list.tail.value).toBe(10);
    expect(list.head.next.prev.value).toBe(20);
  });

  test("should insert a node at the end of the list", () => {
    list.insertAtEnd(30);
    expect(list.head.value).toBe(30);
    expect(list.tail.value).toBe(30);
    expect(list.head.next).toBeNull();
    expect(list.head.prev).toBeNull();
  });

  test("should insert multiple nodes at the end of the list", () => {
    list.insertAtEnd(40);
    list.insertAtEnd(50);
    expect(list.head.value).toBe(40);
    expect(list.tail.value).toBe(50);
    expect(list.head.next.value).toBe(50);
    expect(list.tail.prev.value).toBe(40);
  });

  test("should insert a node at a specific position in the list", () => {
    list.insertAtEnd(60);
    list.insertAtEnd(70);
    list.insertAtPosition(1, 65);
    expect(list.head.next.value).toBe(65);
    expect(list.head.next.next.value).toBe(70);
    expect(list.tail.prev.value).toBe(65);
  });

  test("should delete a node from the beginning of the list", () => {
    list.insertAtEnd(80);
    list.insertAtEnd(90);
    const deletedNode = list.deleteFromBeginning();
    expect(deletedNode.value).toBe(80);
    expect(list.head.value).toBe(90);
    expect(list.tail.value).toBe(90);
  });

  test("should throw UnderflowException when deleting from an empty list", () => {
    expect(() => list.deleteFromBeginning()).toThrow(UnderflowException);
  });

  test("should delete a node from the end of the list", () => {
    list.insertAtEnd(100);
    list.insertAtEnd(110);
    const deletedNode = list.deleteFromEnd();
    expect(deletedNode.value).toBe(110);
    expect(list.head.value).toBe(100);
    expect(list.tail.value).toBe(100);
  });

  test("should delete a node at a specific position in the list", () => {
    list.insertAtEnd(120);
    list.insertAtEnd(130);
    list.insertAtEnd(140);
    const deletedNode = list.deleteAtPosition(1);
    expect(deletedNode.value).toBe(130);
    expect(list.head.next.value).toBe(140);
    expect(list.tail.prev.value).toBe(120);
  });

  test("should update a node at a specific position in the list", () => {
    list.insertAtEnd(150);
    list.insertAtEnd(160);
    list.updateAtPosition(1, 165);
    expect(list.tail.value).toBe(165);
    expect(list.head.next.value).toBe(165);
  });
});
