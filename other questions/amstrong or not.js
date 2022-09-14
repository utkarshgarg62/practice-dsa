// Check if a number is Armstrong Number or not
// Input:153 
// Output: Yes, it is an Armstrong Number

function armstrong(N) {
    let arr = N.toString().split("")
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i] * arr[i]
    }
    if (N == sum) {
        return "Yes, it is an Armstrong Number"
    }
    else {
        return "No, it is not an Armstrong Numberr"
    }
}

console.log(armstrong(153)); //Yes, it is an Armstrong Number