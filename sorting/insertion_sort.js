// nums = [233, 12, 6, 89, 34, 56]
// output: [6, 12, 34, 56, 89, 233]

function insertion_sort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]
        let j = i - 1
        while (j >= 0 && current < arr[j]) {
            arr[j + 1] = arr[j]
            j--
        }
        // placement
        arr[j + 1] = current
    }
    return arr

}

let res = insertion_sort([233, 12, 6, 89, 34, 56])
console.log(res)