/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let evens = nums.filter(num => num % 2 == 0)
    let odds = nums.filter(num => num % 2 != 0)

    return evens.concat(odds)
};