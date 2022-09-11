// 1358. Number of Substrings Containing All Three Characters
// Given a string s consisting only of characters a, b and c.
// Return the number of substrings containing at least one occurrence of all these characters a, b and c.

// Input: s = "abcabc"
// Output: 10
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 


// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/ => Leetcode(medium)


function abc(s) {
    const map = new Map()
    let i = 0
    let j = 0
    let count = 0

    while (j < s.length) {
        let ele = s[j]
        if (map.has(ele)) {
            map.set(ele, map.get(ele) + 1)
        } else {
            map.set(ele, 1)
        }

        while (map.size === 3) {
            count += s.length - j
            const i_count = map.get(s[i])
            if (i_count > 1) {
                map.set(s[i], i_count - 1)
            } else {
                map.delete(s[i])
            }
            i++
        }
        j++
    }
    return count
}


let res = abc("abcabc")
console.log(res)