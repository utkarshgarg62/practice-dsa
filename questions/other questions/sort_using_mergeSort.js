
function sort(arr) {

    var conquer = function (arr, start, mid, end) {
        let merged = Array(end - start + 1).fill(0)
        let idx1 = start
        let idx2 = mid + 1
        let x = 0

        while (idx1 <= mid && idx2 <= end) {
            if (arr[idx1] >= arr[idx2]) {         // For Ascending Order sign will be :  <=
                merged[x] = arr[idx1]           // For Decending Order sign will be :  >=
                x++
                idx1++
            }
            else {
                merged[x] = arr[idx2]
                x++
                idx2++
            }
        }

        while (idx1 <= mid) {
            merged[x] = arr[idx1]
            x++
            idx1++
        }
        while (idx2 <= end) {
            merged[x] = arr[idx2]
            x++
            idx2++
        }

        for (let i = 0, j = start; i < merged.length; i++, j++) {
            arr[j] = merged[i]
        }

    }

    var divide = function (arr, start, end) {

        if (start >= end) return;
        let mid = Math.floor(start + (end - start) / 2)

        divide(arr, start, mid)
        divide(arr, mid + 1, end)
        conquer(arr, start, mid, end)
    }
    divide(arr, 0, arr.length - 1)
    return arr


}


let res = sort([9, 2, 10, 4, 1, 5, 3, 7, 8, 15, 25, 11, 63])
console.log(res)