// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Input: nums = [1,2,3,1]
// Output: true

function duplicate(nums){
    let obj={}
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]){
            obj[nums[i]]+=1
        }
        else{
            obj[nums[i]]=1
        }
    }
    for(let value in obj){
        if(obj[value]>1){
            return true
        }
    }
    return false
}

console.log(duplicate([1,2,3,1]))
// Time Complexity - O(n)