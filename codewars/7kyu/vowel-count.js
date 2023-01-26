// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let count = 0
    str.split('').forEach(letter => {
      letter === 'a' ? count++ :
      letter === 'e' ? count++ :
      letter === 'i' ? count++ :
      letter === 'o' ? count++ :
      letter === 'u' ? count++ : 0
    })
    return count
  }