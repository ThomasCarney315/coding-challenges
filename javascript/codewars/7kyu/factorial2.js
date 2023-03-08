// Your task is to write function factorial.

function factorial(n){
    let result = n
    if(!n){
      return 1
    } else {
        for (let i = n - 1; i > 0; i--){
          result *= i
       }
    }
    return result
  }