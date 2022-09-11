function abc(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1
    }
    console.log(obj)
    let smlest_code = Infinity
    let smlest_ele = Infinity
    for (let ele in obj) {
        if (obj[ele] == 1) {
            if (ele.charCodeAt(ele) < smlest_code) {
                smlest_code = ele.charCodeAt(ele)
                smlest_ele = ele
            }
        }
    }
    return smlest_ele
}


let res = abc("hello")
console.log(res)