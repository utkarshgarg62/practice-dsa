

function twoSum(nums, target) {
    nums.sort((a, b) => a - b)
    let i = 0
    let j = nums.length - 1

    while (i < j) {
        let sum = nums[i] + nums[j]
        if (sum == target) {
            return [nums[i], nums[j]]
        }
        if (sum < target) i++
        else j--
    }
};

let result = twoSum([3, 2, 4], 6)
console.log(result)

// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] == target - nums[i]) {
//                 return [i, j]
//             }
//         }
//     }
// };

// let result2 = twoSum([3, 2, 4], 6)
// console.log(result2)

