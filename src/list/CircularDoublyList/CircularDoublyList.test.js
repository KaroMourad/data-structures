import CircularDoublyList from "./CircularDoublyList.js";
import { UnderflowException, OutOfBoundsException } from "utils/exceptions.js";

describe("CircularDoublyList", () => {
  let list;

  beforeEach(() => {
    list = new CircularDoublyList();
  });

  test("initializes an empty list", () => {
    expect(list.isEmpty).toBe(true);
    expect(list.size).toBe(0);
  });

  test("insertAtBeginning adds a node at the beginning", () => {
    list.insertAtBeginning(10);
    expect(list.isEmpty).toBe(false);
    expect(list.size).toBe(1);
    expect(list.head.value).toBe(10);
    expect(list.tail.value).toBe(10);
    expect(list.head.next).toBe(list.head);
    expect(list.head.prev).toBe(list.tail);
  });

  test("insertAtEnd adds a node at the end", () => {
    list.insertAtBeginning(10);
    list.insertAtEnd(20);
    expect(list.size).toBe(2);
    expect(list.head.value).toBe(10);
    expect(list.tail.value).toBe(20);
    expect(list.head.next.value).toBe(20);
    expect(list.tail.prev.value).toBe(10);
  });

  test("insertAtPosition correctly handles positive positions", () => {
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtEnd(30);
    list.insertAtPosition(1, 15);
    expect(list.size).toBe(4);
    expect(list.head.next.value).toBe(15);
    expect(list.head.next.next.value).toBe(20);
  });

  test("insertAtPosition correctly handles negative positions", () => {
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtEnd(30);
    list.insertAtPosition(-1, 25); // Should be before 30
    expect(list.size).toBe(4);
    expect(list.tail.value).toBe(30);
    expect(list.tail.prev.value).toBe(25);
  });

  test("deleteAtBeginning removes the first node", () => {
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    const deletedNode = list.deleteAtBeginning();
    expect(deletedNode.value).toBe(10);
    expect(list.size).toBe(1);
    expect(list.head.value).toBe(20);
    expect(list.tail.value).toBe(20);
  });

  test("deleteAtEnd removes the last node", () => {
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    const deletedNode = list.deleteAtEnd();
    expect(deletedNode.value).toBe(20);
    expect(list.size).toBe(1);
    expect(list.head.value).toBe(10);
    expect(list.tail.value).toBe(10);
  });

  test("deleteAtPosition correctly handles positive positions", () => {
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtEnd(30);
    const deletedNode = list.deleteAtPosition(1);
    expect(deletedNode.value).toBe(20);
    expect(list.size).toBe(2);
    expect(list.head.next.value).toBe(30);
  });

  test("deleteAtPosition correctly handles negative positions", () => {
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtEnd(30);
    const deletedNode = list.deleteAtPosition(-1); // Should remove 30
    expect(deletedNode.value).toBe(30);
    expect(list.size).toBe(2);
    expect(list.tail.value).toBe(20);
  });

  test("throws UnderflowException when deleting from an empty list", () => {
    expect(() => list.deleteAtBeginning()).toThrow(UnderflowException);
    expect(() => list.deleteAtEnd()).toThrow(UnderflowException);
    expect(() => list.deleteAtPosition(0)).toThrow(UnderflowException);
  });

  test("traverseForward correctly traverses the list", () => {
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtEnd(30);
    const values = [];
    list.traverseForward((node) => values.push(node.value));
    expect(values).toEqual([10, 20, 30]);
  });

  test("traverseBackward correctly traverses the list", () => {
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtEnd(30);
    const values = [];
    list.traverseBackward((node) => values.push(node.value));
    expect(values).toEqual([30, 20, 10]);
  });

  test("print method outputs the list in the correct format", () => {
    console.log = jest.fn();
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtEnd(30);
    list.print();
    expect(console.log).toHaveBeenCalledWith("10 <=> 20 <=> 30");
  });

  test("handles insertion and deletion at various positions", () => {
    list.insertAtEnd("A");
    list.insertAtEnd("B");
    list.insertAtEnd("C");
    list.insertAtPosition(1, "X"); // A <-> X <-> B <-> C
    expect(list.head.next.value).toBe("X");
    list.deleteAtPosition(1); // A <-> B <-> C
    expect(list.head.next.value).toBe("B");
    expect(list.size).toBe(3);
  });

  test("handles negative position for insertion", () => {
    list.insertAtEnd("A");
    list.insertAtEnd("B");
    list.insertAtPosition(-1, "X"); // A <-> X <-> B
    expect(list.head.next.value).toBe("X");
    expect(list.tail.value).toBe("B");
    expect(list.size).toBe(3);
  });

  test("handles negative position for deletion", () => {
    list.insertAtEnd("A");
    list.insertAtEnd("B");
    list.insertAtEnd("C");
    const node = list.deleteAtPosition(-1); // A <-> B
    expect(node.value).toBe("C");
    expect(list.tail.value).toBe("B");
    expect(list.size).toBe(2);
  });

  test("throws an exception for out-of-bounds insertion and deletion", () => {
    expect(() => list.insertAtPosition(1, "A")).toThrow(OutOfBoundsException);
    expect(() => list.deleteAtPosition(1)).toThrow(UnderflowException);
  });

  test("handles edge case of multiple insertions and deletions", () => {
    list.insertAtEnd("A");
    list.insertAtEnd("B");
    list.insertAtEnd("C");
    list.deleteAtPosition(1); // A <-> C
    list.insertAtBeginning("D"); // D <-> A <-> C
    list.insertAtEnd("E"); // D <-> A <-> C <-> E
    expect(list.size).toBe(4);
    expect(list.head.value).toBe("D");
    expect(list.tail.value).toBe("E");
    expect(list.head.next.next.next.value).toBe("E");
  });
});
