// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0

    let longestSubstr = s[0]
    let currSubstr = longestSubstr
    let currIndex = 0

    for (let i = 1; i < s.length; i++) {
        let curr = s.slice(currIndex, i)
        
        if (curr.includes(s[i])) {
            currIndex++
            i -= 1
        }
        else if (!currSubstr.includes(s[i])) {
            currSubstr = curr + s[i]
            if (currSubstr.length > longestSubstr.length) {
                longestSubstr = currSubstr
            }
        }
    }

    return longestSubstr.length
};