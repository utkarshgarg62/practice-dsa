
function greatestSum(arr) {

    let left = 0
    let right = arr.length - 1
    let sum = 0
    while (left < right) {
        if (arr[left] + arr[right] > sum) {
            sum = arr[left] + arr[right]
            left = left + 1
        }
        else {
            return sum
        }
    }

}

console.log(greatestSum([23, -10, 0]))

function abc(arr) {
    let first, second
    if (arr[0] < arr[1]) {
        first = arr[0]
        second = arr[1]
    }
    else {
        first = arr[1]
        second = arr[0]
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first
            first = arr[i]
        }
        else if (arr[i] > second && arr[i] != first) {
            second = arr[i]
        }
    }
    return first + second

}

console.log(abc([23, -10, 0]))