// 239. Sliding Window Maximum
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// https://leetcode.com/problems/sliding-window-maximum/  => leetcode [difficult]

// sliding window approach:
function sliding(nums, k) {
    let i = 0
    let j = 0
    let large_num = []
    let result = []
    while (j < nums.length) {
        while (large_num.length > 0 && large_num[large_num.length - 1] < nums[j]) large_num.pop()
        large_num.push(nums[j])
        if (j - i + 1 == k) {
            result.push(large_num[0])
            if (large_num[0] == nums[i]) large_num.shift()
            i++; j++;
        }
        if (j - i + 1 < k) j++
    }
    return result
}

let result2 = sliding([1, 3, -1, -3, 5, 3, 6, 7], 3)
console.log(result2)