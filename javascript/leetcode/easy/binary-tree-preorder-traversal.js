// Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

// Example 1:


// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
 

// Follow up: Recursive solution is trivial, could you do it iteratively?

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//recursive approach
var preorderTraversal = function(root) {
    let result = []
    function preorder(root) {
        if (!root) return
        result.push(root.val)
        preorder(root.left)
        preorder(root.right)
    }
    preorder(root)
    return result
};

//iterative approach
var preorderTraversal = function(root) {
    if (!root) return []; // Handle edge case
    
    let result = [];
    let stack = [root];
    
    while (stack.length > 0) {
        let currentNode = stack.pop();
        result.push(currentNode.val);
        if (currentNode.right) {
            stack.push(currentNode.right);
        }
        if (currentNode.left) {
            stack.push(currentNode.left);
        }
    }
    return result;
}