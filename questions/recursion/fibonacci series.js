

var fibonacciSeries = (n) => {

    var fib = (n) => {
        if (n < 2) return n
        return (fib(n - 1) + fib(n - 2))
    }
    let ans = []
    for (let num = 1; num <= n; num++) {
        ans.push(fib(num))
    }

    return ans
}
let res = fibonacciSeries(10)
console.log(res)