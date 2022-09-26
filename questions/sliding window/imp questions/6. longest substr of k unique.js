// Longest Substring With K Unique Characters
str = "aabacbebebe", k = 3
output = 3
// Explanation: "cbebebe" is the longest 
// substring with K distinct characters.

str = "aaaa", k = 2
output = -1
// Explanation: There's no substring with K
// distinct characters.

var longestSubstr = (str, k) => {

    let n = str.length
    let i = 0
    let j = 0
    let map = new Map()
    let max_size = 0
    while (j < n) {
        // j ki calculations
        map.set(str[j], (map.get(str[j]) + 1) || 1)

        if (map.size < k) j++
        else if (map.size == k) {
            max_size = Math.max(j - i + 1, max_size)
            j++
        }
        else if (map.size > k) {
            // i ki calculations
            while (map.size > k) {
                map.set(str[i], map.get(str[i]) - 1)
                if (map.get(str[i]) == 0) map.delete(str[i])
                i++
            }
            j++
        }
    }
    return max_size == 0 ? -1 : max_size
}

let res1 = longestSubstr("aabacbebebe", 3)
let res2 = longestSubstr("aaaa", 2)
console.log(res1)
console.log(res2)