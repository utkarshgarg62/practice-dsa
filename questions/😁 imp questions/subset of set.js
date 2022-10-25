// Input: arr = [1, 2, 3]
// Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

function abc(arr) {
    let result = [[]]
    for(let value of arr){
        let len = result.length
        for(let i=0;i<len;i++){
            let temp = result[i].slice(0)
            temp.push(value)
            result.push(temp)
        }
    }
return result

}

let res = abc([1, 2, 3])
console.log(res)