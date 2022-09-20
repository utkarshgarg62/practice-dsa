// arr = [1,2,3,2,1]

function checkPalin(arr){
    let i=0
    let j=arr.length-1
    while(i<j){
        if(arr[i] != arr[j]){
            return false
        }
        i++
        j--
    }
    return true

}


let res = checkPalin([1,2,3,2,1])
console.log(res)