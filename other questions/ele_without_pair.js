// Find the element without a pair. Here is 3 and 7 in below array
// arr = [11, 1, 7, 11, 1, 2, 2, 3, 3, 3, 48, 4, 4, 48]
// output : 7 and 3

function withoutPair(arr){
    let map = new Map()
    for(let ele of arr){
        map.set(ele, (map.get(ele)+1) || 1)
    }
    
    for(let [ele,count] of map){
        if(count%2==1){
            console.log(ele+ " has no pair")
        }
    }
    return ""

}

let res = withoutPair([11, 1, 7, 11, 1, 2, 2, 3, 3, 3, 48, 4, 4, 48])
console.log(res)