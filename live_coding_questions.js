// 1. Return the alphanumeric character.
// arr =[true,123,"str","str123","abc"]
// output : "str123"


// 2. First Missing Integer.
// Given an unsorted integer array, find the first missing positive integer.
// Example:
// Given [1,2,0] return 3,
// [3,4,-1,1] return 2,
// [-8, -7, -6] returns 1
// Your algorithm should run in O(n) time and use constant space.


// 1.
var alphanumeric= function(arr){
    let Reg = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/
    for(let ele of arr){
        if(typeof ele=="string"){
            if(ele.match(Reg)){
                return ele
            }
        }
    }
}
let res = alphanumeric([true,123,"str","str123","abc"])
console.log(res)


console.log("***************")


// 2.
var firstMissingPositive = function (arr) {
    let nums = 1
    let set = new Set(arr)
    // console.log(set)
    for (let ele of set) {
        if (set.has(nums)) {
            nums++
        }

    }
    return nums
}
let res1 = firstMissingPositive([1, 2, 0])
let res2 = firstMissingPositive([3,4,-1,1])
let res3 = firstMissingPositive([-8, -7, -6])
console.log(res1)
console.log(res2)
console.log(res3)