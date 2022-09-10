// Write a js program to cyclically rotate an array - rotate(arr,d) that rotates arr by d elements
// arr = [12, 3, 6, 2, 9, 11] , d = 2
// output : [ 9, 11, 12, 3, 6, 2 ]

function rotate(arr, d) {

    function reverse(arr) {
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

    arr = reverse(arr)
    let newArr = arr.splice(0, d)
    newArr = reverse(newArr)
    arr = reverse(arr)
    let res = newArr.concat(arr)
    return res

}

let res = rotate([12, 3, 6, 2, 9, 11], 2)
console.log(res)