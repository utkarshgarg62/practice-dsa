// Max Sum Subarray of size K
// Given an array of integers Arr of size N and a number K. Return the maximum sum of a subarray of size K.
// Input:
// N = 4, K = 2
// Arr = [100, 200, 300, 400]
// Output:
// 700
// Explanation:
// Arr3  + Arr4 =700,
// which is maximum.

// https://practice.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1  => Geeksforgeeks

// sliding window approach:
function swMaxSum(Arr, K) {
    let N = Arr.length
    let i = 0
    let j = 0
    let sum = 0
    let max_sum = -Infinity
    while (j < N) {
        sum = sum + Arr[j]
        if ((j - i + 1) < K) {
            j++
        }
        else if ((j - i + 1) == K) {
            if (max_sum < sum) {
                max_sum = sum
            }
            sum = sum - Arr[i]
            j++
            i++
        }
        else if ((j - i + 1) > K) {
            i++
        }
    }
    return max_sum
}

let result = swMaxSum([100, 200, 300, 400], 2)
console.log(result)


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
    let j = 0;
    let i = 0;
    let larg_num = [];
    let res = [];
    while (j < nums.length) {

        while (larg_num.length > 0 && larg_num[larg_num.length - 1] < nums[j]) {
            larg_num.pop()
        }
        larg_num.push(nums[j])

        if (j - i + 1 < k) {
            j++
        }
        else if (j - i + 1 == k) {
            res.push(larg_num[0])
            if (larg_num[0] == nums[i])
                larg_num.shift()
            j++
            i++
        }
    }
    return res
}

let result2 = sliding([1, 3, -1, -3, 5, 3, 6, 7], 3)
console.log(result2)