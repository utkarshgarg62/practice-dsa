// We have given an array as input containing 0's and 1's we need to sort the array.
// arr = [0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1]
// output: [
//   0, 0, 0, 0, 0, 0, 0,
//   0, 1, 1, 1, 1, 1, 1,
//   1, 1, 1
// ]


// 1st way :
function abc(arr) {
    let count_0 = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) count_0++
    }
    let count_1 = arr.length - count_0

    // count_0 = 8
    // count_1 = 9
    let index = 0
    while (count_0 > 0) {
        arr[index] = 0
        count_0--
        index++
    }

    while (count_1 > 0) {
        arr[index] = 1
        count_1--
        index++
    }
    return arr
}

let res = abc([0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1])
console.log(res)



// 2nd way :
function sorting(arr){
    let left=0
    let right=arr.length-1

    while(left<right){
        while(arr[left] == 0  && left<right) left++
        while(arr[right] == 1 && left<right) right--
        if(left<right){
            [arr[left],arr[right]] = [arr[right],arr[left]]
        }
    }
return arr
}

let res2 = sorting([0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1])
console.log(res2)