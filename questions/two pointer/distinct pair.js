// find the first pair having the sum = 0

// Approach 1:
function distinctPair1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}

console.log(distinctPair1([-5, -3, -2, 1, 2, 4]));
// Time Complexity: O(n^2)

console.log("********************")
//************************************************************************ */


// Approach 2:
// Two Pointer Approach
function distinctPair2(arr) {
    let i = 0
    let j = arr.length - 1

    while (i < j) {
        if (arr[i] + arr[j] == 0) {
            return [arr[i], arr[j]]
        }
        if (arr[i] + arr[j] < 0) i++
        else j--
    }
    return false

}

console.log(distinctPair2([-5, -3, -2, 1, 2, 4]));