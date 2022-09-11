function myPow(x, pow) {
    if (pow == 0) return 1
    return x * myPow(x, pow - 1)
}


let res = myPow(2.00000, 2)
console.log(res)