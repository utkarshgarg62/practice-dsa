// arr = ["abc", "pqr", "xyz", "ijk"]
// output : ["Abc", "Pqr", "Xyz", "Ijk"]

// using forloop
function capitalise(arr) {

    let result = []
    for (let i = 0; i < arr.length; i++) {
        s = arr[i][0].toUpperCase() + arr[i].slice(1)
        result.push(s)
    }
    return result

}

let res = capitalise(["abc", "pqr", "xyz", "ijk"])
console.log(res)



// using recursion
function capitalise2(arr) {

    let result = []
    if (arr.length == 0) return []
    let s = arr[0][0].toUpperCase() + arr[0].slice(1)
    result.push(s)
    return result.concat(capitalise2(arr.slice(1)))
}

let res2 = capitalise(["abc", "pqr", "xyz", "ijk"])
console.log(res2)