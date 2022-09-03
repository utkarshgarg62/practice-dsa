// Given a number N reverse the number and print it.
// Input: N = 123
// Output: 321

function reverse(N){
    let arr=N.toString().split("")
    let newArr=[]
    for(let i=arr.length-1;i>=0;i--){
        newArr.push(arr[i])
    }
    return newArr.join("")
}

console.log(reverse(123)); //321
