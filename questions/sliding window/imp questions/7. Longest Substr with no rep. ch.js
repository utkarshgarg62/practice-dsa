// Longest Substring with No Repeating Characters.
str = "pwwkew"

var lengthOfLongestSubstring = (str) => {
    let i = 0
    let j = 0
    let n = str.length

    let map = new Map()
    let max_len = 0
    while (j < n) {
        // j ki calcualation
        map.set(str[j], (map.get(str[j]) + 1) || 1)

        if (map.size < j - i + 1) {
            while (map.size < j - i + 1) {
                map.set(str[i], (map.get(str[i]) - 1))
                if (map.get(str[i]) == 0) map.delete(str[i])
                i++
            }
            j++
        }
        else if (map.size == j - i + 1) {
            max_len = Math.max(max_len, j - i + 1)
            j++
        }

    }
    return max_len

}
let res = lengthOfLongestSubstring("pwwkew")
console.log(res)