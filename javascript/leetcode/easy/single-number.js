// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // for (let num of nums) {
    //     if (nums.filter(x => x == num).length < 2) {
    //         return num
    //     }
    // }

    // for (let i = 0; i < nums.length; i++) {
    //     let num = nums[i]
    //     nums.splice(i,1)
    //     let idx = nums.indexOf(num)
    //     if (idx === -1) {
    //         return num
    //     }
    //     else {
    //         nums.splice(idx,1)
    //         i--
    //     }
    // }

    // nums.sort((a,b) => a - b)

    // for (let i = 0; i < nums.length; i += 2) {
    //     if(nums[i] != nums[i+1]) {
    //         return nums[i]
    //     }
    // }

    let uniqNum = 0;
    for (let idx = 0; idx < nums.length; idx++) {
        uniqNum = uniqNum ^ nums[idx];
    } return uniqNum;
};