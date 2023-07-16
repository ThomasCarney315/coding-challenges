// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

 

// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:

// Input: 
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.
 

// Constraints:

// -1000 <= n <= 1000
// At most 1000 calls to counter() will be made

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n - 1  //this is a great example of closure. when calling counter(). it still has access to the variables in its surrounding scope where/when it was initialized 
    return function() {
        return count += 1; //apparently ++ increments after the value is returned and += increments then returns the value. += is faster despite having to decrement the init of count
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */