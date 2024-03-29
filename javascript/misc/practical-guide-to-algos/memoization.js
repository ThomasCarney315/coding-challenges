// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = (n) => n * 10;

console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~');
console.log('times10 returns:', times10(9));

// Task 2: Use an object to cache the results of your times10 function. 
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

const cache = {};

const memoTimes10 = (n) => {
  if (cache[n] != undefined) {
    return cache[n]
  }
  else {
    cache[n] = times10(n)
  }
  return cache[n]
}

console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
console.log('Task 2 calculated value:', memoTimes10(9));	// calculated
console.log('Task 2 cached value:', memoTimes10(9));	// cached


// ----------------------------------------------------------------------------------------------------------------------

const timesM = (n, m) => n * m;

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

const memoizedClosureTimesM = (m) => {
    let cache = {};
    return (n) => {
        if (n in cache) {
            return cache[n];
          }
          else {
            cache[n] = timesM(n, m);
          }
          return cache[n];
    }
};

//this assigns the returned function to the variable - the closure maintains the access to the cache object within the outer function's scope - also makes the cache variable private 
const memoClosureTimes10 = memoizedClosureTimesM(10);
const memoClosureTimes5 = memoizedClosureTimesM(5);
console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
try {
  console.log('Task 3 calculated value:', memoClosureTimes10(9));	// calculated
  console.log('Task 3 cached value:', memoClosureTimes10(9));	// cached
} catch(e) {
  console.error('Task 3:', e);
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Task 4: Make your memo function generic and accept the times10 function as a callback rather than defining the n * 10 logic inside the if/else or pulling it in from the global scope.

// protip: Take advantage of the fact that parameters are saved in the closure as well, just like the cache from the previous example.

const memoize = (cb) => {
  let cache = {};
	return (n, ...args) => { //[9]
		if (n in cache) {
			console.log('Fetching from cache:', n);
			return cache[n];
		}
		else {
			console.log('Calculating result');
			let result = cb(n, ...args); // cb(9)
			cache[n] = result;
			return result;
		}
	};
};

// returned function from memoizedAdd
const memoizedTimes10 = memoize(times10);
// console.log('~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~');
console.log('Task 4 calculated value:', memoizedTimes10(9));	// calculated
console.log('Task 4 cached value:', memoizedTimes10(9));	// cached
