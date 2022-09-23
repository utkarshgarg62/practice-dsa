// Fist -ve Integer in every window of size k
arr = [12, -1, -7, 8, -15, 30, 16, 28]
n = 8
k = 3
output = [-1, -1, -7, -15, -15, 0]

var firstNeg = (arr, n, k) => {

    let i = 0
    let j = 0
    let deque = [];
    let result = []
    while (j < n) {
        // j - ki calculation
        if (arr[j] < 0) deque.push(arr[j])

        if (j - i + 1 < k) j++
        else if (j - i + 1 == k) {
            if (deque.length == 0) result.push(0)
            else result.push(deque[0])

            // i - ki calculation
            if (arr[i] == deque[0]) deque.shift()
            j++
            i++
        }
    }
    return result
}
let res = firstNeg([12, -1, -7, 8, -15, 30, 16, 28], 8, 3)
console.log(res)