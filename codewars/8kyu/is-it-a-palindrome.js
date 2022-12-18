// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    if(x.toUpperCase() === x.toUpperCase().split('').reverse().join('')){
      return true
    }else {
      return false
    }
  }