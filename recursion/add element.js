function findSum(arr,n) {
    if (n <= 0)
        return 0;
    return parseInt(findSum(arr, n - 1) + parseInt(arr[n - 1]));


}


let res = findSum(["1","2","3","4","5"],5)
console.log(res)