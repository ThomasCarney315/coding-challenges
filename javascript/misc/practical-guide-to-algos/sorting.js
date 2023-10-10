//TASK: Implement bubblesort!

function bubbleSort(arr) {
    let count = 0
    let a
    let b
    while (count != arr.length) {
        count = 0
        for (let i = 0; i < arr.length; i++) {
            a = arr[i]
            b = arr[i+1]
            if(a > b) {
                arr[i] = b
                arr[i+1] = a
            } 
            else {
                count++
            }
        }
    }
    return arr
}

let test = bubbleSort([5,4,3,17,2,1,1,9,3])
console.log(test)