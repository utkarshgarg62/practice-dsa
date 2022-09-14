// arr = [233, 12, 6, 3, 89, 34, 56]

function merge_sort(arr) {

    if (start >= end) return
    let mid = Math.round((start + end) / 2)
    merge_sort(arr, start, mid)
    merge_sort(arr, mid + 1, end)

    merge(arr, start, mid, end)

    function merge(arr, start, mid, end) {

    }
}



let res = merge_sort([233, 12, 6, 3, 89, 34, 56])
console.log(res)