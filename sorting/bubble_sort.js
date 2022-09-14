// nums = [233, 12, 6, 89, 34, 56]
// output: [6, 12, 34, 56, 89, 233]

function bubble_sort(nums) {
    for (let i = 0; i < nums.length; i++) {
        let swap = false
        for (let j = 0; j < nums.length - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                nums[j] = nums[j] + nums[j + 1]
                nums[j + 1] = nums[j] - nums[j + 1]
                nums[j] = nums[j] - nums[j + 1]
                swap = true
            }
        }
        if (swap == false) break;
    }
    return nums
}


let res = bubble_sort([233, 12, 6, 89, 34, 56])
console.log(res)