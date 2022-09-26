var Dequeue = require('dequeue')

// Maximum of all sub-array of size k
arr = [1, 3, -1, -3, 5, 3, 6, 7]
n = 8
k = 3
output = [3, 3, 5, 5, 6, 7]

var maxNum = (arr, n, k) => {

    let i = 0
    let j = 0
    let dq = new Dequeue()
    let ans = []
    while (j < n) {
        // j - ki calculation
        while (dq.last() < arr[j] && dq.length > 0) dq.pop() //delete the last element if smaller then arr[j]
        dq.push(arr[j])

        if (j - i + 1 < k) j++
        else if (j - i + 1 == k) {
            ans.push(dq.first())
            // i - ki calculation
            if (arr[i] == dq.first()) dq.shift() //delete the first element if similar to arr[i]
            i++
            j++
        }
    }
    return ans
}
let res = maxNum([1, 3, -1, -3, 5, 3, 6, 7], 8, 3)
console.log(res)
