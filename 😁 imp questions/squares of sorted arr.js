// Input: arr = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

function squares(arr){
    let i=0
    let j= arr.length-1
    let result=Array(arr.length)
    for(let k=arr.length-1;k>=0;k--){
        if(Math.abs(arr[i]) > arr[j]){
            result[k] = arr[i] * arr[i]
            i++
        }
        else{
            result[k] = arr[j] * arr[j]
            j--
        }
    }
    return result
}


let res = squares([-4,-1,0,3,10])
console.log(res)
