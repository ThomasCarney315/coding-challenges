// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"
// FUNDAMENTALS

function replace(s){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return s.split('')
            .map(letter =>  vowels.includes(letter.toLowerCase()) ? '!' : letter )
            .join('')
  }

// realized that it would be easiert to check against a string containg the vowels rather that an array

function replaceImproved(s) {
    return s.split('')
    .map(letter =>  'aeiou'.includes(letter.toLowerCase()) ? '!' : letter )
    .join('')   
}