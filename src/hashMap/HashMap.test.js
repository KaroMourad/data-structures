import HashMap from "./HashMap.js";
import { NonStringValuesException } from "../utils/exceptions.js";

describe("HashMap", () => {
  let hashMap;

  beforeEach(() => {
    hashMap = new HashMap();
  });

  test("should insert and retrieve a key-value pair", () => {
    hashMap.put("cat", "meow");
    expect(hashMap.get("cat")).toBe("meow");
  });

  test("should update the value of an existing key", () => {
    hashMap.put("cat", "meow");
    hashMap.put("cat", "purr");
    expect(hashMap.get("cat")).toBe("purr");
  });

  test("should return undefined for a non-existent key", () => {
    expect(hashMap.get("dog")).toBeUndefined();
  });

  test("should remove a key-value pair", () => {
    hashMap.put("dog", "bark");
    const removedValue = hashMap.remove("dog");
    expect(removedValue).toBe("bark");
    expect(hashMap.get("dog")).toBeUndefined();
  });

  test("should clear the HashMap", () => {
    hashMap.put("fish", "swim");
    hashMap.put("bird", "fly");
    hashMap.clear();
    expect(hashMap.size).toBe(0);
    expect(hashMap.get("fish")).toBeUndefined();
    expect(hashMap.get("bird")).toBeUndefined();
  });

  test("should return the correct size after operations", () => {
    expect(hashMap.size).toBe(0);
    hashMap.put("apple", "red");
    expect(hashMap.size).toBe(1);
    hashMap.put("banana", "yellow");
    expect(hashMap.size).toBe(2);
    hashMap.remove("apple");
    expect(hashMap.size).toBe(1);
  });

  test("should resize when load factor exceeds 0.75", () => {
    for (let i = 0; i < 8; i++) {
      hashMap.put(`key${i}`, `value${i}`);
    }
    expect(hashMap.capacity).toBe(10);
    hashMap.put("key8", "value8");
    expect(hashMap.capacity).toBe(20); // Should resize
  });

  test("should handle collisions with linked list chaining", () => {
    hashMap.put("name", "Alice");
    hashMap.put("eman", "Bob"); // 'name' and 'eman' may collide depending on hash function
    expect(hashMap.get("name")).toBe("Alice");
    expect(hashMap.get("eman")).toBe("Bob");
  });

  test("should throw an error when a non-string key is used", () => {
    expect(() => {
      hashMap.put(123, "numberKey");
    }).toThrow(NonStringValuesException);
  });

  test("should return undefined for non-existent keys after multiple insertions", () => {
    hashMap.put("fruit", "banana");
    hashMap.put("vegetable", "carrot");
    expect(hashMap.get("meat")).toBeUndefined();
  });

  test("should overwrite a value and maintain the correct size", () => {
    hashMap.put("car", "Tesla");
    expect(hashMap.size).toBe(1);
    hashMap.put("car", "Toyota");
    expect(hashMap.get("car")).toBe("Toyota");
    expect(hashMap.size).toBe(1); // Size remains the same
  });

  test("should handle keys of different lengths correctly", () => {
    hashMap.put("short", "A");
    hashMap.put("aVeryLongKey", "B");
    expect(hashMap.get("short")).toBe("A");
    expect(hashMap.get("aVeryLongKey")).toBe("B");
  });

  test("should resize correctly with a small initial capacity", () => {
    const smallCapacityMap = new HashMap(2);
    smallCapacityMap.put("a", 1);
    smallCapacityMap.put("b", 2);
    expect(smallCapacityMap.capacity).toBe(2);
    smallCapacityMap.put("c", 3); // Triggers resize
    expect(smallCapacityMap.capacity).toBe(4);
  });

  test("should use a custom hash function", () => {
    const customHashFn = (key, capacity) => key.length % capacity;
    const customHashMap = new HashMap(10, customHashFn);
    customHashMap.put("key1", "value1");
    expect(customHashMap.get("key1")).toBe("value1");
  });
});
