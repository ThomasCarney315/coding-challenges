// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let aow = str.split(' ')
    let transWord
    for(let i = 0; i < aow.length; i++){
    transWord = aow[i].split('').reverse().join('')
    aow[i] = transWord
    }
     return aow.join(' ')
    }