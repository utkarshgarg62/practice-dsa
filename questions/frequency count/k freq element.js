// Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Approach 1: Using Hash Map 
function top_K_element(nums, k) {
    let mp = new Map()

    for (let ele of nums) {
        if (mp.has(ele)) {
            mp.set(ele, mp.get(ele) + 1)
        }
        else {
            mp.set(ele, 1)
        }
    }
    let array = [];
    for (let [key, value] of mp) {
        array.push([key, value]);
    }
    array.sort(function (a, b) {
        return b[1] - a[1];
    })
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(array[i][0]);
    }
    return result;

}

let res = top_K_element([1, 1, 1, 2, 2, 3], 2)
console.log(res)