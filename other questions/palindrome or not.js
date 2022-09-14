// Check if a number is Palindrome or Not
// Input: N = 123
// Output: Not Palindrome Number

// Input: N = 121
// Output: Palindrome Number

function palindrome(N) {
    let arr = N.toString().split("")
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    let reverse = newArr.join("")
    if (N == reverse) {
        return "Palindrome Number"
    }
    else {
        return "Not Palindrome Number"
    }
}

console.log(palindrome(123)); //Not Palindrome Number
console.log(palindrome(121)); //Palindrome Number