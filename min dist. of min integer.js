// Given an array of integers, find the minimum distance between any two occurrences of the minimum integer in the array.
// let arr = [5, 1, 2, 3, 4, 1, 2, 1]

function dis_count(arr){
    let index_arr = []
    let min_el = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min_el) {
            min_el = arr[i];

        }
    }

    console.log(min_el)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == min_el) {
            index_arr.push(i)
        }
    }

    index_arr.sort(function (a, b) { return a - b })
    console.log(index_arr)

    let min_dis=Number.MAX_VALUE
    
    for (let i=0;i<index_arr.length;i++){
        if(index_arr[i]-index_arr[i-1]<min_dis){
            min_dis=index_arr[i]-index_arr[i-1]
        }
    }
    return min_dis


}

console.log(dis_count([5, 1, 2, 3, 4, 1, 2, 1]))







