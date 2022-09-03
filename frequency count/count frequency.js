// Find the freqency of array element

// approach 1: 
function count_freq1(arr) {
    let visitedArr = []
    let visited = -1
    for (let i = 0; i < arr.length; i++) {
        let count = 1
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
                visitedArr[j] = visited
            }
        }
        if (visitedArr[i] != visited) {
            visitedArr[i] = count
        }

    }
    for (let i = 0; i < visitedArr.length; i++) {
        if (visitedArr[i] != visited) {
            console.log(arr[i] + " occurs " + visitedArr[i])
        }
    }
}

count_freq1([1, 2, 3, 3, 4, 4, 7, 7, 8, 1, 3])
// Time Complexity: O(n^2)

console.log("********************")
//************************************************************************ */


// approach 2:
function count_freq2(arr) {
    let n = arr.length
    arr = arr.sort()
    var mp = new Map();
    for (var i = 0; i < n; i++) {
        if (mp.has(arr[i]))
            mp.set(arr[i], mp.get(arr[i]) + 1)
        else
            mp.set(arr[i], 1)
    }

    for (var i = 0; i < n; i++) {
        if (mp.get(arr[i]) != -1) {
            console.log(arr[i] + " occurs " + mp.get(arr[i]));
            mp.set(arr[i], -1);
        }
    }
}

count_freq2([1, 2, 3, 3, 4, 4, 7, 7, 8, 1, 3])
// Time Complexity: O(n)

console.log("********************")
//************************************************************************ */


// approach 3:
function count_freq3(arr) {
    let n = arr.length
    let freq_obj = {}

    for (let i = 0; i < n; i++) {
        if (freq_obj[arr[i]]) {
            freq_obj[arr[i]] += 1
        }
        else {
            freq_obj[arr[i]] = 1
        }
    }

    // console.log(freq_obj)
    for (let element in freq_obj) {
        console.log(element + " occurs " + freq_obj[element])
    }
}

count_freq3([1, 2, 3, 3, 4, 4, 7, 7, 8, 1, 3])
// Time Complexity: O(n)

console.log("********************")
//************************************************************************ */


// approach 4:
function count_freq4(arr) {

    let n = arr.length
    let freq_obj = {}

    for (let element of arr) {
        if (freq_obj.hasOwnProperty(element)) {
            freq_obj[element] += 1
        }
        else {
            freq_obj[element] = 1
        }
    }

    // console.log(freq_obj)
    for (let element in freq_obj) {
        console.log(element + " occurs " + freq_obj[element])
    }
}

count_freq4([1, 2, 3, 3, 4, 4, 7, 7, 8, 1, 3])
// Time Complexity: O(n)


function freq(str){
    let arr=str.split(" ").join("")
    
    let obj={}
    for(let ele of arr){
       if(obj[ele]){
        obj[ele] +=1
       }
       else{
        obj[ele]=1
       }
    }
    return obj
}

console.log(freq("hello world"))


// function freq(str){
//     let arr=str.split(" ").join("")
    
//     let obj={}
//     for(let ele of arr){
//         obj[ele]=(obj[ele] || 0 )+1
//      }
//      return obj
// }

// console.log(freq("hello world"))