// arr = [-1, 0, 3, 5, 9, 12]
// target = 9

function binarySearch(arr, target) {
    function search(start, end) {
        if (start > end) return -1
        let mid = Math.floor((start + end) / 2)
        if (target == arr[mid]) return mid
        else if (target < arr[mid]) return search(start, mid - 1)
        else if (target > arr[mid]) return search(mid + 1, end)
    }
    return search(0, arr.length - 1)
}


let res = binarySearch([-1, 0, 3, 5, 9, 12], 9)
console.log(res)