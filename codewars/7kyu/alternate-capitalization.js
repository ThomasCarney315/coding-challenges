// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
    let even = s.split('');
    for(let i = 0; i < s.length; i++){
        i % 2 === 0 ? even[i] = even[i].toUpperCase() : 0;
      }
    even = even.join('');
    
    let odd = s.split(''); 
    for(let i = 0; i < s.length; i++){
       i % 2 !== 0 ? odd[i] = odd[i].toUpperCase() : 0;
    }
    odd = odd.join('');
    
      return [even, odd];
  };