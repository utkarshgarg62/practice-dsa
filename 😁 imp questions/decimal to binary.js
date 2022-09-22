// n = 10
// output : 1010

function decimalToBinary(n){

    let binaryNum = Array(32)
    let i=0
    while(n>0){
        binaryNum[i] = n % 2
        n = Math.floor(n/2)
        i++
    }
    let result =[]
    for(j=i-1 ;j>=0;j--){
        result.push(binaryNum[j])
    }
    return result.join("")

}

let res = decimalToBinary(10)
console.log(res)

// Time Complexity : O(logn)