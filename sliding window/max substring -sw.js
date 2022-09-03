// Given a string str, find the length of the longest substring without repeating characters. 
// s = "ABDEFGABEF"
// output = 6



function abc1(s) {
    let arr = s.split("")
    let n = arr.length
    let j = 0
    let max_length = 0
    let box = new Set()
    for (let i = 0; i < n; i++) {
        while (box.has(arr[i])) {
            box.delete(arr[j])
            j++
        }
        box.add(arr[i])
        max_length = Math.max(max_length, box.size)
    }
    return max_length
}


let res1 = abc1("ABDEFGABEF")
console.log(res1)



function abc2(s) {
    let arr = s.split("")
    let n = arr.length
    let i = 0
    let j = 0
    let max_length = 0
    let mp = new Set()
    while (i < n) {
        while (mp.has(arr[i])) {
            mp.delete(arr[j])
            j++
        }
        mp.add(arr[i])
        max_length = Math.max(max_length, mp.size)
        i++
    }

    return max_length


}


let res2 = abc2("ABDEFGABEF")
console.log(res2)


// 1876. Substrings of Size Three with Distinct Characters

// A string is good if there are no repeated characters.
// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
// A substring is a contiguous sequence of characters in a string.

// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
// The only good substring of length 3 is "xyz".

// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/  => Leetcode (Easy)


function abc3(s) {
    let arr = s.split("")
    let n = arr.length
    let i = 0
    let j = 0
    let gud_str_count = 0
    let box = new Set()
    while (i < n) {
        while (box.has(arr[i])) {
            box.delete(arr[j])
            j++
        }
        box.add(arr[i])
        if (box.size == 3) {
            gud_str_count++
            box.delete(arr[j])
            j++
        }
        i++
    }
    return gud_str_count
}


let res3 = abc3("xyzzaz")
console.log(res3)