// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?

/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     return x.toString() === x.toString().split('').reverse().join('')
// };

//follow up 
var isPalindrome = function(x) {
    let y = x
    let revNum = 0
    while(y > 0) {
        revNum *= 10;
        revNum += y % 10;
        y = Math.floor(y/10);
    }
    return x === revNum
};