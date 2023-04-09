// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"
// FUNDAMENTALS

function remove (string) {  
    while (string.endsWith('!')){
      string = string.split('').splice(0,string.length-1).join('')
    }
    return string
    }