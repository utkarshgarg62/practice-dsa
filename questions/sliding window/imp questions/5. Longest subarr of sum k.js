// Largest and smallest subarray of sum k
arr = [4, 1, 1, 1, 2, 3, 5]
n = 7
k = 5 //sum
output = 4

var sw = (arr, n, k) => {

    let i = 0
    let j = 0
    let sum = 0
    let max_ws = 0
    while (j < n) {
        // j ki calculation
        sum += arr[j]

        if (sum < k) j++
        else if (sum == k) {
            max_ws = Math.max(j - i + 1, max_ws)
            j++
        }
        else if (sum > k) {

            // i ki calculations
            while (sum > k) {
                sum -= arr[i]
                i++
            }
            j++
        }
    }
    return max_ws
}
let res1 = sw([4, 1, 1, 1, 2, 3, 5], 7, 5)
console.log(res1)

// let res2 = sw([-5, 8, -14, 2, 4, 12], 6, -5)
// console.log(res2)