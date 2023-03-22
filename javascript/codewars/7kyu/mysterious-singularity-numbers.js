// Task
// The point is that a natural number N (1 <= N <= 10^9) is given. You need to write a function which finds the number of natural numbers not exceeding N and not divided by any of the numbers [2, 3, 5].

// Example
// Let's take the number 5 as an example:

// 1 - doesn't divide integer by 2, 3, and 5
// 2 - divides integer by 2
// 3 - divides integer by 3
// 4 - divides integer by 2
// 5 - divides integer by 5
// Answer: 1

// because only one number doesn't divide integer by any of 2, 3, 5

// Note
// Again, try to think of a formula that will shorten your solution and help you pass big tests.

// Good luck :)

// If you want to solve our problems, they are here: From Singularity Hub Community

// FUNDAMENTALSLOGICMATHEMATICSARRAYSALGORITHMSPERFORMANCE

function realNumbers(n){
  
    //   return [...Array(n+1).keys()].filter(x => x % 2 && x % 3 && x % 5).length ----> too slow!
      
    //   let count = 0
    //   for (let i = 1; i <= n; i+=2){ i % 3 && i % 5 ? count++ : 0} ---> faster but still too slow!
    //   return count
      
      return n - ~~(n/2) - ~~(n/3) - ~~(n/5) + ~~(n/6) + ~~(n/10) + ~~(n/15) - ~~(n/30)
      //a handful of calulations vs potentially millions of checks
      // double tilde(~~) is a faster version of Math.floor()
    }