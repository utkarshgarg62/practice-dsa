function sort(arr) {

    function conquer(arr, start, mid, end) {
        let merged = Array(end - start + 1)
        let i = start
        let j = mid + 1
        let c = 0

        while (i <= mid && j <= end) {
            if (arr[i] <= arr[j]) {
                merged[c++] = arr[i++]
            }
            else {
                merged[c++] = arr[j++]
            }
        }
        while (i <= mid) {
            merged[c++] = arr[i++]
        }
        while (j <= end) {
            merged[c++] = arr[j++]
        }
        for (let i = 0, j = start; i < merged.length; i++, j++) {
            arr[j] = merged[i]
        }
    }

    function divide(arr, start, end) {

        if (start >= end) return
        let mid = Math.floor(start + (end - start) / 2)
        divide(arr, start, mid)
        divide(arr, mid + 1, end)
        conquer(arr, start, mid, end)

    }
    divide(arr, 0, arr.length - 1)
    return arr


}


let res = sort([5, 2, 3, 8, 25, 24])
console.log(res)