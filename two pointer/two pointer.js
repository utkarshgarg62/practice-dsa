// Find the two numbers whose sum is equal to the given sum.
// arr = [10, 20, 35, 50, 75, 80]
// sum = 70

// Brute Force Approach :
function sumIsEqualTo(arr, sum) {
    let n = arr.length
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (arr[i] + arr[j] == sum) {
                return [arr[i], arr[j]]
            }
        }
    }
    return "No Pairs Found"

}

let result = sumIsEqualTo([10, 20, 35, 50, 75, 80], 30)
console.log(result)

// Time Complexity: O(n^2)


// Two Pointer Approach:
function sumIsEqualTo1(arr, sum) {
    let n = arr.length
    let i = 0
    let j = n - 1
    while (i < j) {
        if (arr[i] + arr[j] == sum) {
            return [arr[i], arr[j]]
        }
        if (arr[i] + arr[j] < sum) i++
        else j--
    }
    return "No Pair Found"

}


let res = sumIsEqualTo1([10, 20, 35, 50, 75, 80], 70)
console.log(res)




// Check if the given string is palindrome or not
// str = "ABCDCBA"

// Brute Force Approach:
function isPalindrome1(str) {
    let arr = str.split("")
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    if (newArr.join("") == str) {
        return true
    }
    else {
        return false
    }
}

let res3 = isPalindrome1("ABCDCBA")
console.log(res3)




// Two Pointer Approach:
function isPalindrome2(str) {
    let arr = str.split("")
    let i = 0
    let j = arr.length - 1

    while (i < j) {
        if (arr[i] != arr[j]) {
            return false
        }
        else {
            i++;
            j--;
        }
    }
    return true


}

let res2 = isPalindrome2("ABCDCBA")
console.log(res2)


// 3Sum
// arr=[1,4,45,6,10,8]
// x=22


//Brute Force Approach:
function ThreeSum1(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if ((arr[i] + arr[j] + arr[k]) == x) {
                    return [arr[i], arr[j], arr[k]]
                }
            }
        }
    }
    return "No Pairs Found"
}

let res4 = ThreeSum1([1, 4, 45, 6, 10, 8], 22)
console.log(res4)
// Time Complexity: O(n^3)


// Two Pointer Approach:
function ThreeSum2(arr, x) {
    arr.sort(function (a, b) { return a - b })
    for (let i = 0; i < arr.length - 2; i++) {
        let j = i + 1
        let k = arr.length - 1
        while (j < k) {
            if (arr[i] + arr[j] + arr[k] == x) {
                return [arr[i], arr[j], arr[k]]
            }
            else if (arr[i] + arr[j] + arr[k] < x) {
                j++
            }
            else if (arr[i] + arr[j] + arr[k] > x) {
                k--
            }
        }
    }
    return "No Pairs Found"


}


let res5 = ThreeSum2([1, 4, 45, 6, 10, 8], 22)
console.log(res5)