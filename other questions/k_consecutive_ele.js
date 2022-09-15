// Write a function to calculate the max sum of 3 consecutive elements


function abc(arr){

    if(arr.length<3){
        return
    }

    let max_sum = - Infinity
    for(let i=0;i<arr.length-3;i++){
        if(arr[i]+arr[i+1]+arr[i+2] > max_sum){
            max_sum = arr[i]+arr[i+1]+arr[i+2] 
        }
    }
    return max_sum

}


let res = abc([14,24,24,63,26,75])
console.log(res)