// Task: rewrite this function so that it uses a loop rather than recursion

function joinElements(array, joinString) {

  function recurse(index, resultSoFar) {
    resultSoFar += array[index];

    if(index === array.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString);
    }
  }

  return recurse(0, '');
}

function joinElementsIterative(array, deliniator) {
    let [str] = array

    for (let i = 1; i < array.length; i++) {
        str += deliniator +  array[i]
    }

    return str
}

// let res = joinElements(['s','cr','t cod', ' :) :)'], 'e');

let res = joinElementsIterative(['s','cr','t cod', ' :) :)'], 'e');

console.log(res)

// Task 1: Without peeking, write your own recursive factorial method
function factorial(n) {
  if (n < 2) {
    return n
  }
  return n * factorial(n - 1)
}

// Task 2: Use your memo function from the previous exercise to memoize your factorial method


const memoize = (cb) => {
  let cache = {}
	return (n, ...args) => { //[9]
		if (n in cache) {
			console.log('Fetching from cache:', n)
			return cache[n]
		}
		else {
			console.log('Calculating result');
			let result = cb(n, ...args)
			cache[n] = result
			return result
		}
	};
};

const factorialMemo = memoize(factorial)
let fact = factorialMemo(5)
console.log(fact)
fact = factorialMemo(5)
console.log(fact)