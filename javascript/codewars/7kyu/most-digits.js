// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// STRINGSFUNDAMENTALS

function findLongest(array){
    const longest = Math.max(...array).toString().length
    return array.find(num => num.toString().length === longest)
  }