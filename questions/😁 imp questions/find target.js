// Find target index after array is sorted
// arr = [8,2,6,7,1,9,3], k=3

function abc(arr,k){

    function partition(arr,low,high){
        let pivot = arr[high]
        let i =low-1
        for(let j=low;j<high;j++){
            if(arr[j] < pivot){
                i++
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
        i++
        let temp = arr[i]
        arr[i] = pivot
        arr[high] = temp
        return i;
    }

    function quicksort(arr,low,high){
        if(low<high){
            let pivot = partition(arr,low,high)
            quicksort(arr,low,pivot-1)
            quicksort(arr,pivot+1,high)
        }
    }
    quicksort(arr,0,arr.length-1)
    // return arr
    return arr[k]
}


let res = abc([8,2,6,7,1,9,3],3)
console.log(res)