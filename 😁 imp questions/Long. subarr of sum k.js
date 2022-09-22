// Input: arr[] = { 10, 5, 2, 7, 1, 9 }, k = 15
// Output: 4

// using iteration - Brute Force Approach
function longestSubarray(arr, k) {
    let max_len = -Infinity
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]
            if (sum == k) {
                max_len = Math.max(max_len, j - i + 1)
            }
        }
    }
    return max_len

}

let res1 = longestSubarray([10, 5, 2, 7, 1, 9], 15)
console.log(res1)

// Time Complexity: O(N2)
// Auxiliary Space: O(1)



// using sliding window 
function abc(arr, k) {
    let i = 0
    let j = 0
    let sum = 0
    let max_len = -Infinity
    while (j < arr.length) {
        sum += arr[j]
        if (sum == k) {
            max_len = Math.max(max_len, j - i + 1)
            j++
        }
        else if (sum < k) {
            j++
        }
        else if (sum > k) {
            while (sum > k) {
                sum -= arr[i];
                i++;
            }
            if (sum == k) {
                max_len = Math.max(max_len, j - i + 1);
            }
            j++;
        }

    }
return max_len

}

let res = abc([10, 5, 2, 7, 1, 9], 15)
console.log(res)

// Time Complexity: O(N)
// Auxiliary Space: O(1)