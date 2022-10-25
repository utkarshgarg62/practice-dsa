// Minimum Window Substring

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

var minWindow = function (s, t) {
    let i = 0
    let j = 0
    let result = ""

    // Counting freq for t
    let map = new Map()
    for (let ele of t) map.set(ele, map.get(ele) + 1 || 1)

    let count = map.size

    while (j < s.length) {
        if (map.has(s[j])) {
            map.set(s[j], map.get(s[j]) - 1)
            if (map.get(s[j]) === 0) count--
        }
        while (count == 0) {
            if (result === "" || result.length > (j - i + 1)) {
                result = s.slice(i, j + 1)
            }

            if (map.has(s[i])) {
                map.set(s[i], map.get(s[i]) + 1)
                if (map.get(s[i]) >= 1) count++
            }
            i++
        }
        j++
    }
    return result
};
let res = minWindow("ADOBECODEBANC", "ABC")
console.log(res)