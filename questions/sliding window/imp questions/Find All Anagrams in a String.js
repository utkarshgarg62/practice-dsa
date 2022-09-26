// Find All Anagrams in a String
// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

var findAnagrams = function (s, p) {
    let map = new Map()
    for (let i = 0; i < p.length; i++) {
        let ch = p.charAt(i)
        map.set(ch, (map.get(ch) + 1) || 1)
    }
    let count = map.size

    let i = 0
    let j = 0
    let n = s.length
    let k = p.length
    let ans = []

    while (j < n) {
        let ch_p = s.charAt(j)
        if (map.has(ch_p)) {
            map.set(ch_p, map.get(ch_p) - 1)
            if (map.get(ch_p) == 0) count--
        }

        j++
        while (count === 0) {
            if (j - i === k) {
                ans.push(i)
            }
            let ch_i = s.charAt(i)
            if (map.has(ch_i)) {
                map.set(ch_i, map.get(ch_i) + 1)
                if (map.get(ch_i) > 0) count++
            }

            i++
        }
    }
    return ans

};

let res = findAnagrams("cbaebabacd", "abc")
console.log(res)