// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let uniqueElements = [...new Set([...nums])]
    let majorityElement = nums[0] 
    let highestCount = 0
    let currentCount = 0

    for (let num of uniqueElements) {
        currentCount = nums.reduce((cnt, el) => el == num ? cnt + 1 : cnt,0)
        if (currentCount > highestCount) {
            highestCount = currentCount
            majorityElement = num
        }
        currentCount = 0
    }

    return majorityElement
};