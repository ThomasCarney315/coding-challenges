// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

// Example 1:


// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:


// Input: root = [1,2,2,null,3,null,3]
// Output: false
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
 

// Follow up: Could you solve it both recursively and iteratively?

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
 * @return {boolean}
 */

//recursive approach
var isSymmetric = function(root) {

    function isMirror(left, right) {
        if (!left && !right) {
            return true;
        }
        if (!left || !right) {
            return false;
        }

        return (left.val === right.val) &&
               isMirror(left.left, right.right) &&
               isMirror(left.right, right.left);
    }

    if (!root) {
        return true;
    }
    return isMirror(root.left, root.right);
};

//iterative approach 
var isSymmetric = function(root) {

    if (!root) {
        return true;
    }
    
    const queue = [root, root];
    
    while (queue.length > 0) {
        const node1 = queue.shift();
        const node2 = queue.shift();
        
        if (!node1 && !node2) {
            continue;
        }
        if (!node1 || !node2 || node1.val !== node2.val) {
            return false;
        }
        
        queue.push(node1.left);
        queue.push(node2.right);
        queue.push(node1.right);
        queue.push(node2.left);
    }
    
    return true;

};