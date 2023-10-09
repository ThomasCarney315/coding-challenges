        // TASK: Implement linear search.

    function linearSearch(list, item) {
        for (let i = 0; i < list.length; i++) {
            if (list[i] === item) {
                return list[i]
            }
        }
    }   

    let res = linearSearch([2,6,7,90,103], 90);
    console.log(res);

    // TASK: Implement binary search.

function binarySearch(list, item) {
    let lowerIndex = 0;
    let upperIndex = list.length - 1;
    let current;
    let val;
    while (lowerIndex <= upperIndex) {
        current = ~~((lowerIndex + upperIndex) / 2);
        val = list[current]
        if(val === item) {
            return val;
        } else {
            if (item < val) {
                upperIndex = current - 1
            }
            else {
                lowerIndex = current + 1
            }
        }
    }
    return 'not found'
}

let res2 = binarySearch([2,6,7,90,103], 90);
console.log(res2);