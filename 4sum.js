// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]


// Brute Force Approach:
var fourSum = function (nums, target) {
    nums.sort(function (a, b) { return a - b })
    let newNums = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                for (let l = k + 1; l < nums.length; l++) { 
                    if ((nums[i] + nums[j] + nums[k]) + nums[l] == target) {
                        newNums.push([nums[i], nums[j], nums[k], nums[l]])
                        while (nums[l] === nums[l - 1]) l--
                    }
                }
                while (nums[k] === nums[k + 1]) k++
            }
            while (nums[j] === nums[j + 1]) j++;
        }
        while (nums[i] === nums[i + 1]) i++;
    }
    return newNums
}

let result = fourSum([1, 0, -1, 0, -2, 2], 0)
console.log(result)


// Two Pointer Approach:
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b)
    let len = nums.length
    let result = []
    for (let i = 0; i < len - 3; i++) {
        for (let j = i + 1; j < len - 2; j++) {
            let k = j + 1
            let l = len - 1
            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l]
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[k], nums[l]])
                    while (nums[k] === nums[k + 1]) k++
                    while (nums[l] === nums[l - 1]) l--
                }
                if (sum < target) k++
                else l--
            }
            while (nums[j] === nums[j + 1]) j++;
        }
        while (nums[i] === nums[i + 1]) i++;
    }
    return result
};

let result2 = fourSum([1, 0, -1, 0, -2, 2], 0)
console.log(result2)