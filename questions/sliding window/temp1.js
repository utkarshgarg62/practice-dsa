// Input: num = 240, k = 2
// Output: 2
// Explanation: The following are the substrings of num of length k:
// - "24" from "240": 24 is a divisor of 240.
// - "40" from "240": 40 is a divisor of 240.
// Therefore, the k-beauty is 2.

function abc(num, k) {
    let arr = num.toString()
    let i = 0
    let j = 0
    let count = 0
    while (j < arr.length) {
        if (j - i + 1 == k) {
            let divisor = parseInt(arr.substring(i, j + 1));
            if (divisor !== 0 && num % divisor === 0) {
                count++
            }
        }
        if (j - i + 1 < k) j++
        else i++
    }
    return count
}

let res = abc(240, 2)
console.log(res)


var lengthOfLongestSubstring = function (s) {
    let start = 0, end = 0, maxLength = 0, startIndex = 0, endIndex = 0, next = 0;
    const object = new Set();
    let res = []
    while (end < s.length) {
        if (!object.has(s[end])) {
            object.add(s[end])
            maxLength = Math.max(maxLength, end - start + 1)
            if (end - start + 1 == maxLength) {
                endIndex = end
                startIndex = start
            }
            end++;
        } else {
            object.delete(s[start])
            start++;
        }
    }
    for (let i = startIndex; i < endIndex + 1; i++) {
        res.push(s[i])
    }
    console.log(maxLength)
    return console.log(res.join(""))
};
let s = 'lengthOfLongestSubstring'
s = s.toLowerCase()
return (lengthOfLongestSubstring(s))
//shpakum
//pwwkep
// startste



    if (nums.length == 0) return -1
    let start = 0
    let end = nums.length - 1
    
    while (start <= end) {
        let mid = Math.floor( start + (end - start)/2 )
        if (nums[mid] == target) return mid
        if (nums[start] <= nums[mid]) {   
            if (target >= nums[start] && target < nums[mid]) end = mid - 1
            else start = mid + 1 
        }
        else {
            if (target > nums[mid] && target <= nums[end]) start = mid + 1
            else end = mid - 1
        }
    }
    return -1



