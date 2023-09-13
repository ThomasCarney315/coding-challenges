// Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

// If the string's length is odd drop the central element.

// For example:

// charConcat("abcdef")    == 'af1be2cd3'
// charConcat("abc!def")   == 'af1be2cd3' // same result
// FUNDAMENTALS

function charConcat(string){
    let count = 0;
    let result = '';
    while (count < ~~(string.length / 2) ) {
      result += string[count];
      result += string[string.length - (1 + count)];
      result += count + 1;
      count++;
    }
    return result;
  }