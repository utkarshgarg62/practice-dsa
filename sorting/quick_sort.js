
function sort1(arr) {

    function partition(arr, low, high) {
        let pivot = arr[high]
        let i = low - 1
        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
        i++
        let temp = arr[i]
        arr[i] = pivot
        arr[high] = temp
        return i;
    }

    function quickSort(arr, low, high) {
        if (low < high) {
            let pivot = partition(arr, low, high);
            quickSort(arr, low, pivot - 1)
            quickSort(arr, pivot + 1, high)
        }
    }
    quickSort(arr, 0, arr.length - 1)
    return arr

}


let res = sort1([233, 12, 6, 89, 34, 56])
console.log(res)