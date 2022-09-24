// Given an integer N , write program to count number of digits in N.
// Input: N = 12345
// Output: 5

function count(N) {
    let result = N.toString()
    return result.length
}

console.log(count(12345)); //5
