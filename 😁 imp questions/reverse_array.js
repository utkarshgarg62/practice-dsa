// Reverse array without extra array
// arr = [1,2,3,4,5,6,7]

// 1st way:
function abc(arr) {

    function swap() {
        arr[i] = arr[i] + arr[j]
        arr[j] = arr[i] - arr[j]
        arr[i] = arr[i] - arr[j]
    }

    let i = 0
    let j = arr.length - 1
    while (i < j) {
        swap(arr[i], arr[j])
        i++
        j--
    }
    return arr

}


let res = abc([1, 2, 3, 4, 5, 6, 7])
console.log(res)


// 2nd way:
function abc(arr) {

    let i = 0
    let j = arr.length - 1
    while (i < j) {
        arr[i] = arr[i] + arr[j]
        arr[j] = arr[i] - arr[j]
        arr[i] = arr[i] - arr[j]
        i++
        j--
    }
    return arr

}


let res2 = abc([1, 2, 3, 4, 5, 6, 7])
console.log(res2)