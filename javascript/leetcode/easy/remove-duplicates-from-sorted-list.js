// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

// Example 1:


// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]
 

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


//First Try
var deleteDuplicates = function(head) {
    const seen = [];
    let current = head;

    while (current) {
        seen.push(current.val);
        current = current.next;
    };
    
    seen.sort((a,b) => b - a);
    let arr = [...new Set(seen)];
  
    const linkedList = arr.reduce((prev, curr) => {
        const node = {
            val: curr,
            next: prev,
        };
    return node;
    }, null);

    return linkedList;
};

//Learned
var deleteDuplicates = function(head) {
    let node = head

    while(node !== null) {
        if (node.next !== null) {
            if (node.val === node.next.val) {
                node.next = node.next.next
                continue
            }
        }
        node = node.next
    }
    return head
};