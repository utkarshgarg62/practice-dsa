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