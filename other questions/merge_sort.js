function abc(arr) {

    function conquer(arr, start, mid, end) {
        let merged = Array(end - start + 1).fill(0)
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

        for (let k = 0, p = start; k < merged.length; k++, p++) {
            arr[p] = merged[k]
        }
    }

    function divide(arr, start, end) {

        if (start >= end) return;
        let mid = Math.floor(start + (end - start) / 2)
        divide(arr, start, mid)
        divide(arr, mid + 1, end)
        conquer(arr, start, mid, end)

    }
    divide(arr, 0, arr.length - 1)
    return arr

}


let res = abc([9, 7, 1, 8, 2, 5])
// console.log(res)



function merge(arr1, m, arr2, n) {

    let merged=Array(m+n)
    let i=0
    let j=0
    let c=0

    while(i<m && j<n){
        if(arr1[i] <= arr2[j]){
            merged[c++]= arr1[i++]
        }else{
            merged[c++]= arr2[j++]
        }
    }
    while(i<m){
        merged[c++]= arr1[i++]
    }

    while(j<n){
        merged[c++]= arr2[j++]
    }

    for(let i=0;i<merged.length;i++){
        arr1[i] = merged[i]
    }
return arr1
}


let res2 = merge([1, 3, 5, 7, 9], 5, [2, 4, 6], 3)
console.log(res2)