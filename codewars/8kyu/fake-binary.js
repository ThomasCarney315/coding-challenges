// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    let binaryArr= []
    x.split('').map(num => Number(num) < 5 ? binaryArr.push(0) : binaryArr.push(1)).join('')
    return binaryArr.join('')
  }
