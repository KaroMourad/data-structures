import HashMap from './HashMap';

// 1. Basic Insertion and Retrieval
console.log('--- 1. Basic Insertion and Retrieval ---');
const hashMap = new HashMap();
hashMap.put('cat', 'meow');
console.log("Inserted 'cat': 'meow'");
console.log("Retrieve 'cat':", hashMap.get('cat')); // Output: meow

// 2. Updating an Existing Key
console.log('\n--- 2. Updating an Existing Key ---');
hashMap.put('cat', 'purr');
console.log("Updated 'cat' to 'purr'");
console.log("Retrieve 'cat':", hashMap.get('cat')); // Output: purr

// 3. Handling Non-Existent Keys
console.log('\n--- 3. Handling Non-Existent Keys ---');
console.log("Retrieve non-existent key 'dog':", hashMap.get('dog')); // Output: undefined

// 4. Removing a Key-Value Pair
console.log('\n--- 4. Removing a Key-Value Pair ---');
hashMap.put('dog', 'bark');
console.log("Inserted 'dog': 'bark'");
console.log("Removed 'dog':", hashMap.remove('dog')); // Output: bark
console.log("Retrieve 'dog' after removal:", hashMap.get('dog')); // Output: undefined

// 5. Clearing the HashMap
console.log('\n--- 5. Clearing the HashMap ---');
hashMap.put('fish', 'swim');
hashMap.put('bird', 'fly');
console.log("Inserted 'fish': 'swim' and 'bird': 'fly'");
hashMap.clear();
console.log("Cleared HashMap");
console.log("Current size:", hashMap.size); // Output: 0

// 6. Checking Size and Capacity
console.log('\n--- 6. Checking Size and Capacity ---');
hashMap.put('apple', 'red');
console.log("Inserted 'apple': 'red'");
console.log("Current size:", hashMap.size);     // Output: 1
console.log("Current capacity:", hashMap.capacity); // Output: 10 (or initial capacity)

// 7. Resizing When Load Factor is Exceeded
console.log('\n--- 7. Resizing When Load Factor is Exceeded ---');
for (let i = 0; i < 20; i++) {
    hashMap.put(`key${i}`, `value${i}`);
}
console.log("Inserted 20 key-value pairs");
console.log("Current capacity after resizing:", hashMap.capacity); // Output: 40 (capacity doubles from 20 to 40)

// 8. Printing the HashMap's Internal Structure
console.log('\n--- 8. Printing the HashMap\'s Internal Structure ---');
hashMap.print();
// Output example: [0]: key0: value0 -> key10: value10 -> null ...

// 9. Handling Collisions with Linked List Chaining
console.log('\n--- 9. Handling Collisions with Linked List Chaining ---');
hashMap.put('name', 'Alice');
hashMap.put('eman', 'Bob'); // 'name' and 'eman' might produce the same hash
console.log("Inserted 'name': 'Alice' and 'eman': 'Bob'");
hashMap.print();
// Output: Both 'name' and 'eman' are stored in the same bucket but chained

// 10. Using Custom Hash Function
console.log('\n--- 10. Using Custom Hash Function ---');
const customHashFn = (key, capacity) => key.length % capacity;
const customHashMap = new HashMap(10, customHashFn);
customHashMap.put('key1', 'value1');
console.log("Using custom hash function, inserted 'key1': 'value1'");
console.log("Retrieve 'key1' using custom hash function:", customHashMap.get('key1')); // Output: value1

// 11. Inserting with Keys of Different Lengths
console.log('\n--- 11. Inserting with Keys of Different Lengths ---');
hashMap.put('short', 'A');
hashMap.put('aVeryLongKey', 'B');
console.log("Inserted 'short': 'A' and 'aVeryLongKey': 'B'");
console.log("Retrieve 'short':", hashMap.get('short'));       // Output: A
console.log("Retrieve 'aVeryLongKey':", hashMap.get('aVeryLongKey')); // Output: B

// 12. Key Validation - Non-String Keys
console.log('\n--- 12. Key Validation - Non-String Keys ---');
try {
    hashMap.put(123, 'numberKey');
} catch (e) {
    console.log("Error when inserting non-string key:", e.message); // Output: Key must be a string
}

// 13. High Load Factor with Small Initial Capacity
console.log('\n--- 13. High Load Factor with Small Initial Capacity ---');
const smallCapacityMap = new HashMap(2);
smallCapacityMap.put('a', 1);
console.log("Inserted 'a': 1");
smallCapacityMap.put('b', 2);
console.log("Inserted 'b': 2");
smallCapacityMap.put('c', 3); // Triggers resize
console.log("Inserted 'c': 3, triggering resize");
console.log("Current capacity after resize:", smallCapacityMap.capacity); // Output: 4 (capacity doubles)

// 14. Accessing a Non-Existent Key After Multiple Insertions
console.log('\n--- 14. Accessing a Non-Existent Key After Multiple Insertions ---');
hashMap.put('fruit', 'banana');
hashMap.put('vegetable', 'carrot');
console.log("Inserted 'fruit': 'banana' and 'vegetable': 'carrot'");
console.log("Retrieve non-existent key 'meat':", hashMap.get('meat')); // Output: undefined

// 15. Overwriting a Value and Checking Size
console.log('\n--- 15. Overwriting a Value and Checking Size ---');
hashMap.put('car', 'Tesla');
console.log("Inserted 'car': 'Tesla'");
hashMap.put('car', 'Toyota'); // Overwrites 'Tesla'
console.log("Updated 'car' to 'Toyota'");
console.log("Retrieve 'car':", hashMap.get('car')); // Output: Toyota
console.log("Current size after update:", hashMap.size); // Output: Size remains constant as 1
