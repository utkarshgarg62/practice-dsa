// arr = [233, 12, 6, 89, 34, 56]
// output: [6, 12, 34, 56, 89, 233]

function bubble_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swap = false
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swap = true
            }
        }
        if (swap == false) break;
    }
    return arr
}


let res = bubble_sort([233, 12, 6, 89, 34, 56])
console.log(res)




function bubble_sort2(arr) {

    for (let i = 0; i < arr.length; i++) {
        // let swap = false
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                // swap = true
            }
        }
        // if (swap == false) break;
    }
    return arr
}


let res2 = bubble_sort2([233, 12, 6, 89, 34, 56])
console.log(res2)