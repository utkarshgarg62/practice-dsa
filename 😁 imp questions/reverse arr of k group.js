// Input: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], K = 3 
// Output: [3, 2, 1, 6, 5, 4, 9, 8, 7]

function rev(arr, k) {
    let n = arr.length
    for (let i = 0; i < n; i = i + k) {
        let left = i
        let right = Math.min(i + k - 1, n - 1)
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }
    return arr

}

let res = rev([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
console.log(res)

// Time complexity: O(N)