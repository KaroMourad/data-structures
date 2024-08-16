/**
 * djb2 Hashing Function
 * A hash function designed by Dan Bernstein. It is known for its good distribution and simplicity.
 * 
 * @param {string | number} key - The key to hash. It will be converted to a string if it's not already.
 * @param {number} capacity - The number of buckets in the hash table.
 * @returns {number} - The hash code, which is an index within the range of [0, capacity).
 */
export function djb2Hashing(key, capacity) {
  let hash = 5381;
  const strKey = key.toString();
  for (let i = 0; i < strKey.length; i++) {
    hash = (hash * 33) ^ strKey.charCodeAt(i);
  }
  return Math.abs(hash) % capacity;
}

/**
 * sdbm Hashing Function
 * A hash function originally used by the SDBM database. It is designed to handle various key types and provides a good hash distribution.
 * 
 * @param {string | number} key - The key to hash. It will be converted to a string if it's not already.
 * @param {number} capacity - The number of buckets in the hash table.
 * @returns {number} - The hash code, which is an index within the range of [0, capacity).
 */
export function sdbmHashing(key, capacity) {
  let hash = 0;
  const strKey = key.toString();
  for (let i = 0; i < strKey.length; i++) {
    hash = strKey.charCodeAt(i) + (hash << 6) + (hash << 16) - hash;
  }
  return Math.abs(hash) % capacity;
}

/**
 * lose-lose Hashing Function
 * A simple hash function that sums the ASCII values of all characters in the key.
 * This method is less sophisticated but still can be useful for specific cases.
 * 
 * @param {string | number} key - The key to hash. It will be converted to a string if it's not already.
 * @param {number} capacity - The number of buckets in the hash table.
 * @returns {number} - The hash code, which is an index within the range of [0, capacity).
 */
export function loseLoseHashing(key, capacity) {
  let hash = 0;
  const strKey = key.toString();
  for (let i = 0; i < strKey.length; i++) {
    hash += strKey.charCodeAt(i);
  }
  return Math.abs(hash) % capacity;
}
