// Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array.
// max sum
// Input  : arr[] = {100, 200, 300, 400}, k = 2
// Output : 700

// Sliding Window Approach:
function abc(arr, k) {
    let i = 0;
    let j = 0;
    let sum = 0;
    let max_sum = -Infinity

    for (let i = 0; i < k; i++) {
        sum += arr[i]
        max_sum = sum
    }
    for (let j = k; j < arr.length; j++) {
        sum = sum + arr[j] - arr[j - k]
        max_sum = Math.max(max_sum, sum)
    }
    return max_sum
}

let res2 = abc([100, 200, 300, 400], 2)
console.log(res2)
// Time Complexity: O(n)



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