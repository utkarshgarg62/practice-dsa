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





function highestFreq2(arr) {
    
    let obj ={}
    for(let ele of arr){
        obj[ele] =( obj[ele] || 0 )+1
    }
    // console.log(obj)

    let max_ele=-Infinity
    let max_freq= -Infinity
    for(let ele in obj){
        if(obj[ele] > max_freq){
            max_freq= obj[ele]
            max_ele=ele
        }
    }
return max_ele + " has max freq of " + max_freq

}


let res2 = highestFreq2([11, 113, 11, 31, 2, 1, 3, 4, 5, 4, 32, 2, 21, 4, 5])
console.log(res2)