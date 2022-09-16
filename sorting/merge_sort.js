// // arr = [233, 12, 6, 3, 89, 34, 56]

// function merge_sort(arr, start, end) {

//     if (start >= end) return
//     let mid = Math.floor((start + end) / 2)
//     merge_sort(arr, start, mid)
//     merge_sort(arr, mid + 1, end)

//     merge(arr, start, mid, end)
    
//     // arr1: [start...mid]
//     // arr2: [mid+1...end]
//     function merge(arr, start, mid, end) {
//         let arr1 = []
//         let arr2 = []

//         let lenArr1 = mid - start + 1
//         let lenArr2 = end - mid
//         for (let i = 0; i < lenArr1; i++) {
//             arr1[i] = arr[start + i]
//         }
//         for (let i = 0; i < lenArr2; i++) {
//             arr2[i] = arr[mid + 1 + i]
//         }
//         let a = 0 //index of arr1
//         let b = 0 //index of arr2
//         let c = start //index of arr

//         while (a < lenArr1 && b < lenArr2) {
//             if (arr1[a] <= arr2[b]) {
//                 arr[c] = arr1[b]
//                 a++
//             }
//             else {
//                 arr[c] = arr2[b]
//                 b++
//             }
//         }

//         while (a < lenArr1) {
//             arr[c] = arr1[a]
//             a++
//             c++
//         }
//         while (b < lenArr2) {
//             arr[c] = arr2[b]
//             b++
//             c++
//         }
//     }
// }



// let res = merge_sort([233, 12, 6, 3, 89, 34, 56], 0, 7)
// console.log(res)

// var sortArray = function(nums) {
//     let len = nums.length;
//     if(len < 2) return nums;
//     const mid = Math.floor(len / 2);
//     const left = sortArray(nums.slice(0, mid));
//     const right = sortArray(nums.slice(mid, len));
//     return merge(left, right);
    
// };

// function merge(left, right) {
//     let res = [];
//     while(left.length && right.length) {
//         res.push( (left[0] < right[0]) ? left.shift() : right.shift() );
//     }
//     return res.concat(left, right);
// }


// let res = sortArray([233, 12, 6, 3, 89, 34, 56])
// console.log(res)


var sortArray3 = function(nums) {

    // merge sort
    function merge(nums,mid,left,right){
        let i = left;
        let j = mid+1;
        let arrLen = right-left+1
        let temp = new Array(arrLen);
        let k = 0;
        while(i<=mid && j<=right){
            // check if nums[i] is greate or smaller than nums[j]
            if(nums[i]<=nums[j]){
                temp[k] = nums[i];
                k++;
                i++;
            }
            else{
                 temp[k] = nums[j];
                k++;
                j++;
            }
        }
        
        //add the remaining elemnts
        // for i
        while(i<=mid){
            temp[k] = nums[i];
            k++;
            i++;
        }
        while(j<=right){
            temp[k] = nums[j];
            k++;
            j++;
        }
        k=0;
        // make the changes in the original array
        for(let i=left;i<=right;i++){
            nums[i] = temp[k];
            k++;
        }
    }
    
    function divide(nums,left,right){
        if(left<right){
            // calculate the mid
            let mid = parseInt((left+right)/2);
            divide(nums,left,mid);
            divide(nums,mid+1,right);
            merge(nums,mid,left,right);
        }
      
    }
    divide(nums,0,nums.length-1);
    return nums;
    
};


let res3 = sortArray3([233, 12, 6, 3, 89, 34, 56])
console.log(res3)
