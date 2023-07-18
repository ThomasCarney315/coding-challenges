// 1. Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]

function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

// 2. Add up the Numbers from a Single Number
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples
// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300

function addUp(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i
    };
    return sum;
}

// 3. Left Shift by Powers of Two
// The left shift operation is similar to multiplication by powers of two.

// Sample calculation using the left shift operator (<<):

// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20
// Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

// Examples
// shiftToLeft(5, 2) ➞ 20
// shiftToLeft(10, 3) ➞ 80
// shiftToLeft(-32, 2) ➞ -128
// shiftToLeft(-6, 5) ➞ -192
// shiftToLeft(12, 4) ➞ 192
// shiftToLeft(46, 6) ➞ 2944

const shiftToLeft = (a, b) => a * 2**b;

// 4. RegEx Exercise 1: Find the Time
// The time has a format: hours:minutes. Both hours and minutes have two digits, like 09:00.

// Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. In this task there's no need to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.
function findTime(str){
    return str.match(/\b\d{2}:\d{2}\b/g);
}

// 5. Largest Swap
// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

// To illustrate:

// largestSwap(27) ➞ false

// largestSwap(43) ➞ true
// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

// Examples
// largestSwap(14) ➞ false
// largestSwap(53) ➞ true
// largestSwap(99) ➞ true

function largestSwap(num) {
    let swap = parseInt(num.toString().split('').reverse().join(''));
    return num >= swap;
}

// 6. How Much is True?
// Create a function which returns the number of "true" values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0

const countTrue = (arr) => arr.filter(bool => bool === true).length;

// How do you fix the syntax error that results from running this code? 

// const person =(firstName, lastName) =>
// {
//   first: firstName,
//   last: lastName
// }
// console.log(person("Jill", "Wilson"))

const person =(firstName, lastName) => ({first: firstName, last: lastName});