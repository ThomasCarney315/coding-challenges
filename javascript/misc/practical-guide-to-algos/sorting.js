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

//TASK: implement mergesort!
// protip: Split the array into halves and merge them recursively 
// protip: return once we hit an array with a single item. That is a sorted array of size 1!
// protip: compare the arrays item by item and return the concatenated result

function mergeSort(arr) {
    if (arr.length < 2) return arr
    function merge(arr1, arr2) {
        let res = []
        while (arr1?.length || arr2?.length) {
            let [a] = arr1
            let [b] = arr2
            if (a < b || b === undefined) {
                res.push(a)
                arr1.shift()
            }
            else {
                res.push(b)
                arr2.shift()
            }
        }
        return res
    }

    let center = ~~(arr.length / 2)
    let left = arr.slice(0, center)
    let right = arr.slice(center)
    
    let leftSorted = mergeSort(left)
    let rightSorted = mergeSort(right)

    return merge(leftSorted, rightSorted)

}

let list = [7,6,1,12]
let list2 = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list2))
console.log(mergeSort(list))

