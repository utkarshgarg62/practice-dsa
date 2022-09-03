// 3Sum
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// https://leetcode.com/problems/3sum/  => leetcode (Medium)

//Brute Force Approach:
function ThreeSum1(nums) {
    nums.sort(function (a, b) { return a - b })
    let newNums = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if ((nums[i] + nums[j] + nums[k]) == 0) {
                    newNums.push([nums[i], nums[j], nums[k]])
                    while (nums[k] === nums[k - 1]) k--
                }
            }
            while (nums[j] === nums[j + 1]) j++;
        }
        while (nums[i] === nums[i + 1]) i++;
    }
    return newNums
}

let res1 = ThreeSum1([-1, 0, 1, 2, -1, -4])
console.log(res1)
// Time Comple0ity: O(n) + O(n) + O(n) = O(n^3)


// Two Pointer Approach:
function ThreeSum2(nums) {

    nums.sort((a, b) => a - b)
    let len = nums.length
    let result = []
    for (let i = 0; i < len - 3; i++) {
            let j = i + 1
            let k = len - 1
            while (j < k) {
                let sum = nums[i] + nums[j] + nums[k]
                if (sum === 0) {
                    result.push([nums[i], nums[j], nums[k]])
                    while (nums[j] === nums[j + 1]) j++
                    while (nums[k] === nums[k - 1]) k--
                }
                if (sum < 0) j++
                else k--
            }
        while (nums[i] === nums[i + 1]) i++;
    }
    return result
 
};

let result = ThreeSum2([-1, 0, 1, 2, -1, -4])
console.log(result)
// Time Comple0ity: O(nlogn) + O(n) + O(n) = O(n^2)