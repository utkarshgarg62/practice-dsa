// Count Occurances of anagram
str = "forxxorfxaofr", ptr = "for"
output = 3

str = "aabaabaa", ptr = "aaba"
output = 4

var countAnagram = (str, ptr) => {

    let i = 0
    let j = 0
    let k = ptr.length
    let n = str.length
    let res = 0

    //   Hash Map of ptr
    let map = new Map()
    for (let ele of ptr) {
        map.set(ele, (map.get(ele) + 1) || 1)
    }
    let count = map.size

    while (j < n) {
        //   Decreasing the count in map and calculating map size
        if (map.has(str[j])) {
            map.set(str[j], (map.get(str[j]) - 1))
            if (map.get(str[j]) == 0) count--
        }

        if (j - i + 1 < k) j++
        else if (j - i + 1 == k) {

            //   counting the map size and increasing the main count
            if (count == 0) res++

            //   Increasing the count in map and calculating map size
            if (map.has(str[i])) {
                map.set(str[i], map.get(str[i]) + 1 )
                if (map.get(str[i]) == 1) count++
            }

            //   sliding window by i++, j++
            i++
            j++
        }
    }
    return res
}

let res1 = countAnagram("forxxorfxaofr", "for")
let res2 = countAnagram("aabaabaa", "aaba")
console.log(res1)
console.log(res2)