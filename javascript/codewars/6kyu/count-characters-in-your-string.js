// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// STRINGSFUNDAMENTALS

function count(string) {
    let setOfChars = [...new Set(string.split(''))];
    let charCounts = {};
    
    setOfChars.forEach(char => {
      charCounts[char] = string.split('').filter(x => x === char).length;
    });
    
    return charCounts;
  }