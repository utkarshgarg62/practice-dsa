// Given an array [1,1,2,22,3,5,11,2], filter out the duplicate elements
// and give unique element in arr.

function abc(arr) {
    let map = new Map()
    for (let ele of arr) {
        map.set(ele, (map.get(ele) + 1) || 1)
    }
    let result = []
    for (let [ele, count] of map) {
        if (count == 1) {
            result.push(ele)
        }
    }
    return result
}


let res = abc([1, 1, 2, 22, 3, 5, 11, 2])
console.log(res)
