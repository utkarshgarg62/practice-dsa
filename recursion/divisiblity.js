// Check if elements are divisible by 7
// arr = [14, 7, 23, 67, 70, 77, 101, 4, 45]

// using iteration 
function abc(arr){
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i] %7 ==0) console.log("Yes")
        else console.log("No")
    }
return ""
}


let res1 = abc([14, 7, 23, 67, 70, 77, 101, 4, 45])
console.log(res1)


// using recursion
function divBy7(arr) {

    if(arr.length==0) return
    else{
        let ele= arr.pop()
        if(ele % 7==0) console.log("Yes")
        else console.log("No")
        divBy7(arr)
    }
    return ""
}


let res = divBy7([14, 7, 23, 67, 70, 77, 101, 4, 45])
console.log(res)