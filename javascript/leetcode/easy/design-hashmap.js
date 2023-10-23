// Design a HashMap without using any built-in hash table libraries.

// Implement the MyHashMap class:

// MyHashMap() initializes the object with an empty map.
// void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
// int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
 

// Example 1:

// Input
// ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
// [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
// Output
// [null, null, null, 1, -1, null, 1, null, -1]

// Explanation
// MyHashMap myHashMap = new MyHashMap();
// myHashMap.put(1, 1); // The map is now [[1,1]]
// myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
// myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
// myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
// myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
// myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
// myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
// myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]
 

// Constraints:

// 0 <= key, value <= 106
// At most 104 calls will be made to put, get, and remove.


/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

//method using es6 class syntax for a better oop approach for js (linked-list/array hashmap)
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class MyHashMap {
    constructor() {
        this.numBuckets = 1000;
        this.buckets = new Array(this.numBuckets).fill(null);
    }

    put(key, value) {
        const index = key % this.numBuckets;

        if (!this.buckets[index]) {
            this.buckets[index] = new Node(key, value);
        } else {
            let curr = this.buckets[index];
            while (curr) {
                if (curr.key === key) {
                    curr.value = value; // Update value if key exists
                    return;
                }
                if (!curr.next) {
                    break;
                }
                curr = curr.next;
            }
            curr.next = new Node(key, value); // Append a new node to the linked list
        }
    }

    get(key) {
        const index = key % this.numBuckets;
        let curr = this.buckets[index];

        while (curr) {
            if (curr.key === key) {
                return curr.value; // Return value if key exists
            }
            curr = curr.next;
        }

        return -1; // Key not found
    }

    remove(key) {
        const index = key % this.numBuckets;
        let curr = this.buckets[index];
        let prev = null;

        while (curr) {
            if (curr.key === key) {
                if (prev) {
                    prev.next = curr.next; // Remove the node from the linked list
                } else {
                    this.buckets[index] = curr.next; // Update the bucket head if it's the first node
                }
                return;
            }
            prev = curr;
            curr = curr.next;
        }
    }
}

// array based hashmap with older contructor function syntax for object's methods - still oop
var MyHashMap = function() {
    this.ans = new Array(1000001).fill(-1);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.ans[key] = value;
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    return this.ans[key];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    this.ans[key] = -1;
};