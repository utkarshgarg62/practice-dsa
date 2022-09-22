// arr = [1,2,3,2,1]

function checkPalin(arr) {
    let i = 0
    let j = arr.length - 1
    while (i < j) {
        if (arr[i] != arr[j]) {
            return false
        }
        i++
        j--
    }
    return true
}


let res = checkPalin([1, 2, 3, 2, 1])
console.log(res)



function palin(str) {
    if(str.length<=1)return true
    return (str[0] == str.slice(-1) && palin(str.slice(1,-1)))
}


let res2 = palin("abcba")
console.log(res2)


function palin2(str) {
    if(str.length<=1)return true
    if(str[0] ==str.slice(-1)){
        return palin2(str.slice(1,-1))
    }
    else{
        return false
    }
}


let res3 = palin2("rwfer")
console.log(res3)