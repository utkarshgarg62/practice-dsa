// Swap 2 numbers (a and b) without a 3rd temp variable.
// a = 5
// b = 10


// with 3rd varible
function swap1(a, b) {
    let temp = a
    a = b
    b = temp
    return (a + " " + b)
}

let res1 = swap1(5, 10)
console.log(res1)


// without 3rd varible
function swap2(a, b) {
    a = a + b
    b = a - b
    a = a - b
    return (a + " " + b)
}

let res2 = swap2(5, 10)
console.log(res2)

// using es6
function swap0(a, b) {
    [a, b] = [b, a]
    return (a + " " + b)
}

let res0 = swap0(5, 10)
console.log(res0)

//************************************************************************ */

// Swap 2 Strings without using a third variable
// x = "hello"
// y = "world"


// with 3rd varible
function swap3(x, y) {
    let temp = x
    x = y
    y = temp
    return (x + " " + y)
}

let res3 = swap3("hello", "world")
console.log(res3)


// without 3rd varible
function swap4(x, y) {
    x = x.concat(y)
    y = x.slice(0, y.length)
    x = x.slice(y.length, x.length)
    return (x + " " + y)
}

let res4 = swap4("hello", "world")
console.log(res4)


// using es6
function swap0(x, y) {
    [x, y] = [y, x]
    return (x + " " + y)
}

let res00 = swap0("hello", "world")
console.log(res00)
