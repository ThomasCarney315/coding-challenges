// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// STRINGS FUNDAMENTALS

function duplicateCount(text){
    let textArr = text.toLowerCase().split('')
    let dups = []
    textArr.forEach((char, index) =>{
      textArr.lastIndexOf(char) !== index ? dups.push(char) : null
    })
    return [... new Set(dups)].length
  }
        //first attempt
  // function duplicateCount(text){
  //   let dupList = [];
  //   let count = 0;
  //   text = text.toUpperCase().split('');
  //   for (let i = 0; i < text.length; i++){
  //     count = 0
  //     for (let j = 0; j < text.length; j++){
  //       if (text[i] == text[j]){
  //         count++
  //       }
  //       count > 1 ? dupList.push(text[i]) : null
  //     }
  //   }
  //   let dupCount = [... new Set(dupList)];
  //   return dupCount.length;
  // }