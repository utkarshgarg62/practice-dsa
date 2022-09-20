// Find the Majority Element
// Given an array of integers A, find the Majority Element.

// Display the Majority Element in the array. If no majority element then display 0. 

// Input
//     5 
//     1 2 1 2 2
//     Where, 
// First line represents the size of an array. 
// Second line represents array elements separated by single space.

// Output
//     2 

// Here for the given array, 2 appears 3 times in the array of size 5. 


function abc(arr, n) {
    let obj = {}
    for (let ele of arr) {
        obj[ele] = (obj[ele] || 0) + 1
    }
    // console.log(obj)

    for (let ele in obj) {
        if(obj[ele] > n/2){
            return ele
        }
    }

}


let res = abc([1, 2, 1, 2, 2], 5)
console.log(res)
