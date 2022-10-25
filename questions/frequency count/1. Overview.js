function count_freq2(arr) {
    // way 1 :
    let map = new Map()
    for(let ele of arr){
        map.set(ele, map.get(ele)+1 || 1)
    }
    console.log(map)
    
    console.log(map)
    let newArr = [...map]
    console.log(newArr)

    // way 2 :
    let map2 = new Map()
    for(let ele of arr){
        if(map2.has(ele)){
            map2.set(ele, map2.get(ele) + 1)
        }else{
            map2.set(ele, 1)
        }
    }
    console.log(map2)
    
    // way 3 :
    let obj = {}
    for(let ele of arr){
        obj[ele] = (obj[ele] || 0 ) +1
    }
    console.log(obj)
    
    // way 4 :
    let obj2 = {}
    for(let ele of arr){
        if(obj2[ele]){
            obj2[ele] += 1
        }else{
            obj2[ele] = 1
        }
    }
    console.log(obj2)
    
    let Set_variable = new Set(arr)
    console.log(Set_variable)
}

count_freq2([1, 2, 3, 3, 4, 4, 7, 7, 8, 1, 3])

/*

Map(6) { 1 => 2, 2 => 1, 3 => 3, 4 => 2, 7 => 2, 8 => 1 }
Map(6) { 1 => 2, 2 => 1, 3 => 3, 4 => 2, 7 => 2, 8 => 1 }
[ [ 1, 2 ], [ 2, 1 ], [ 3, 3 ], [ 4, 2 ], [ 7, 2 ], [ 8, 1 ] ]
Map(6) { 1 => 2, 2 => 1, 3 => 3, 4 => 2, 7 => 2, 8 => 1 }
{ '1': 2, '2': 1, '3': 3, '4': 2, '7': 2, '8': 1 }
{ '1': 2, '2': 1, '3': 3, '4': 2, '7': 2, '8': 1 }
Set(6) { 1, 2, 3, 4, 7, 8 }

*/