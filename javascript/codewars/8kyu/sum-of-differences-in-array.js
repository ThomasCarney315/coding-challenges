// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

// ARRAYSFUNDAMENTALS

function sumOfDifferences(arr) {
  return arr.sort((a,b) => b - a).reduce((acc, x, i ,a) => typeof a[i+1] === 'number' ? acc + (x - a[i+1]) : acc + 0 , 0);
}