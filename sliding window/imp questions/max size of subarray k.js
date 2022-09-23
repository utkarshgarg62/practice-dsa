// Maximum sum sub-array of size k
arr = [2, 5, 1, 8, 2, 9, 1]
n = 7
k = 3
output = 19

var maxSum = (arr, n, k) => {

    let i = 0
    let j = 0
    let sum = 0
    let max_sum = -Infinity
    while (j < n) {
        // j - ki calculation
        sum += arr[j]

        if (j - i + 1 < k) j++
        else if (j - i + 1 == k) {
            max_sum = Math.max(max_sum, sum)

            // i - ki calculation
            sum -= arr[i]
            i++
            j++
        }
    }
    return max_sum
}
let res = maxSum([2, 5, 1, 8, 2, 9, 1], 7, 3)
console.log(res)