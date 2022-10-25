var Dequeue = require('dequeue')

// Fist -ve Integer in every window of size k
arr = [12, -1, -7, 8, -15, 30, 16, 28]
n = 8
k = 3
output = [-1, -1, -7, -15, -15, 0]

var firstNeg = (arr, n, k) => {

    let i = 0
    let j = 0
    let dq = new Dequeue();
    let result = []
    while (j < n) {
        // j - ki calculation
        if (arr[j] < 0) dq.push(arr[j])

        if (j - i + 1 < k) j++
        else if (j - i + 1 == k) {
            if (dq.length == 0) result.push(0)
            else result.push(dq.first())

            // i - ki calculation
            if (arr[i] == dq.first()) dq.shift()
            j++
            i++
        }
    }
    return result
}
let res = firstNeg([12, -1, -7, 8, -15, 30, 16, 28], 8, 3)
console.log(res)


var firstNeg = (arr, n, k) => {
    let i=0;
    let j=0;
    let dq = new Dequeue()
    let result = []
    while(j<n){
        if(arr[j] < 0) dq.push(arr[j])
        if(j-i+1 < k ) j++
        else if(j-i+1 == k){
            if(dq.length == 0) result.push(0)
            else result.push(dq.first())
            if(arr[i] == dq.first()) dq.shift()
            i++
            j++
        }
    }
    return result
    
}
let res2 = firstNeg([12, -1, -7, 8, -15, 30, 16, 28], 8, 3)
console.log(res2)