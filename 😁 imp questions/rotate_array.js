// Write a js program to cyclically rotate an array - rotate(arr,d) that rotates arr by d elements
// arr = [12, 3, 6, 2, 9, 11] , d = 2
// output : [ 9, 11, 12, 3, 6, 2 ]

// 1st way :
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
// console.log(res)


// 2nd way :
function abc(arr, k) {
    let temp = (new Array(arr.length)).fill(0);
    // console.log(temp)

    for (let i = 0; i < arr.length; i++) {
        let idx = (i + k) % arr.length;
        temp[idx] = arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = temp[i]
    }
    return arr

}


let res2 = abc([12, 3, 6, 2, 9, 11], 2)
console.log(res2)



function rotate4(arr, d) {

    function reverse(arr,i,j) {
        while (i < j) {
            arr[i] = arr[i] + arr[j]
            arr[j] = arr[i] - arr[j]
            arr[i] = arr[i] - arr[j]
            i++
            j--
        }
        return arr
    }

    arr = reverse(arr,0,arr.length-1)
    // console.log(arr)
    let newArr = arr.splice(0, d)
    newArr = reverse(newArr)
    arr = reverse(arr)
    let res = newArr.concat(arr)
    return res

}

let res4 = rotate4([12, 3, 6, 2, 9, 11], 2)
console.log(res4)