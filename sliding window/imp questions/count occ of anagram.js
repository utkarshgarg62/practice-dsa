// Count Occurances of anagram
str = "forxxorfxaofr", ptr = "for"
output = 3

str = "aabaabaa", ptr = "aaba"
output = 4

var countAnagram = (str, ptr) => {

    let k = ptr.length
    let n = str.length
    let i = 0
    let j = 0
    let ans = 0

    let map = new Map()
    for (let ele of ptr) {
        map.set(ele, (map.get(ele) + 1) || 1)
    }
    // console.log(map)
    let count = map.size

    while (j < n) {
        // j - ki calculation
        if (map.has(str[j])) map.set(str[j], (map.get(str[j]) - 1))
        if (map.get(str[j]) == 0) count--

        if (j - i + 1 < k) j++
        else if (j - i + 1 == k) {
            if (count == 0) ans++
            // i - ki calculation
            if (map.has(str[i])) map.set(str[i], (map.get(str[i]) + 1))
            if (map.get(str[i]) > 0) count++
            i++
            j++
        }
    }
    return ans
}

let res1 = countAnagram("forxxorfxaofr", "for")
let res2 = countAnagram("aabaabaa", "aaba")
console.log(res1)
console.log(res2)