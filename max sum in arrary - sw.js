// Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array.
// max sum
// Input  : arr[] = {100, 200, 300, 400}, k = 2
// Output : 700

// Brute Force Approach:
function abc(arr, k) {
    let max = -Infinity
    for (let i = 0; i < arr.length - k + 1; i++) {
        let sum = 0
        for (let j = 0; j < k; j++) {
            sum = sum + arr[i + j]
            max = Math.max(sum, max)
        }
    }
    return max
}

let res1 = abc([100, 200, 300, 400], 2)
console.log(res1)
// Time Complexity: O(n^2)



// Sliding Window Approach:
function abc(arr, k) {
    let sum = 0;
    let max = 0

    for (i = 0; i < k; i++) {
        sum = sum + arr[i]
        max = sum
    }
    for (let i = k; i < arr.length; i++) {
        sum = sum + arr[i] - arr[i - k]
        max = Math.max(sum, max)
    }
    return max
}

let res2 = abc([100, 200, 300, 400], 2)
console.log(res2)
// Time Complexity: O(n)