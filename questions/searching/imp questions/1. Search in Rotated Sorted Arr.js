// 33. Search in Rotated Sorted Array

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4


var search = function(nums, target) {
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
};