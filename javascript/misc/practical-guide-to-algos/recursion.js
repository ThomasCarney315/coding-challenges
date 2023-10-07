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