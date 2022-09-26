function fib(n){
    let result =[]
    let n1 = 0 
    let n2 = 1 
    let nextTerm

    for (let i = 1; i <= n; i++) {
        result.push(n1)
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
return result
}

let res = fib(10)
console.log(res)


var fibonacciSeries = (n) => {

    var fib = (n) => {
        if (n < 2) return n
        return (fib(n - 1) + fib(n - 2))
    }
    let ans = []
    for (let num = 0; num < n; num++) {
        ans.push(fib(num))
    }

    return ans
}
let res2 = fibonacciSeries(10)
console.log(res2)