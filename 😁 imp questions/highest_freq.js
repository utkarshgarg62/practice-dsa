// Given an array of repeated elements, return the most repeated element from the array.
// Find the Highest frequency element in an array.
// arr = [11, 113, 11, 31, 2, 1, 3, 4, 5, 4, 32, 2, 21, 4, 5]

function highestFreq(arr) {
    let map = new Map()
    for (let ele of arr) {
        map.set(ele, (map.get(ele) + 1) || 1)
    }
    // console.log(map)

    let max_ele = -Infinity
    let max_freq = -Infinity
    for (let [ele, count] of map) {
        if (count > max_freq) {
            max_freq = count
            max_ele = ele
        }
    }
    return max_ele + " has highest frequency of " + max_freq
}


let res = highestFreq([11, 113, 11, 31, 2, 1, 3, 4, 5, 4, 32, 2, 21, 4, 5])
console.log(res)