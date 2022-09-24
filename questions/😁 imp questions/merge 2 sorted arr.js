function merge(arr1, m, arr2, n) {
    let merged = Array(m + n)
    let i = 0
    let j = 0
    let c = 0

    while (i < m && j < n) {
        if (arr1[i] <= arr2[j]) {
            merged[c++] = arr1[i++]
        }
        else {
            merged[c++] = arr2[j++]
        }
    }
    while (i < m) {
        merged[c++] = arr1[i++]
    }
    while (j < n) {
        merged[c++] = arr2[j++]
    }
    
    for(let i=0;i<merged.length;i++){
        arr1[i] = merged[i]
    }
    return arr1
}


let res = merge([1, 3, 5, 7, 9], 5, [2, 4, 6, 8, 10], 5)
console.log(res)