// Find unique pairs of elements (inside and array) whose sum is equal to a target k
// arr=[7,2,4,6,9,11,34,3,2,1]
// k=5

function abc(arr, k) {
    let map = new Map()
    for (let ele of arr) {
        map.set(ele, (map.get(ele) + 1) || 1)
    }
    // console.log(map)

    let result_map = new Map()
    for (let [ele, count] of map) {
        if (map.has(k - ele) && !result_map.has(k - ele)) {
            result_map.set(ele, k - ele)
        }
    }
    // return result_map
    let output = [...result_map]
    return output
}


let res = abc([7, 2, 4, 6, 9, 11, 34, 3, 2, 1], 5)
console.log(res)