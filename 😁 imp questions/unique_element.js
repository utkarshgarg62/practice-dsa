// Given an array [1, 1, 2, 22, 3, 5, 11, 2] , filter out the duplicate elements
// and give unique element in arr.
// output - [ 22, 3, 5, 11 ]

// using frequency count
function removeDuplicates1(arr) {
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


let res = removeDuplicates1([1, 1, 2, 22, 3, 5, 11, 2])
console.log(res)


// Given an array [1, 1, 2, 22, 3, 5, 11, 2], Remove the duplicates.
// output - [ 1, 2, 22, 3, 5, 11 ]


// using set (ES6 Sintax) and (...spreadOperator) [shallow copy]
function removeDuplicates2(arr){
    let set = new Set(arr)
    return [...set]

}


let res2 = removeDuplicates2([1, 1, 2, 22, 3, 5, 11, 2])
console.log(res2)