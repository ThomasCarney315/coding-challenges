// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// STRINGSARRAYSFUNDAMENTALS

function duplicateEncode(word){
    let encode = ''
    let letterCount = 0
    let array = word.toLowerCase().split('')
    
    for (let i = 0; i < array.length; i++){
      letterCount = 0
      for (let j = 0; j < array.length; j++){
        array[i] === array[j] ? letterCount++ : null
      }
      letterCount > 1 ? encode += ')' : encode += '('
    }
    return encode
}