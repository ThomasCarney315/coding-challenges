// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

// FUNDAMENTALSSTRINGS

String.prototype.isUpperCase = function() {
    return this.split('').filter(char => char.charCodeAt(0) > 90 ).length ? false : true;
  }

  //learned better solution: to compare passed in string with a UpperCased version 

String.prototype.isUpperCase = function() {
return this == this.toUpperCase;
}