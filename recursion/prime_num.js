// check number is prime number or not, if not print 0.
// num = 40

function isPrime(num){
    if(num === 2) return 1;
    if(num < 2 || num % 2 === 0) return 0;
    for(let i = 3; i * i <= num; i += 2)
        if(num % i === 0) return 0;
    return 1;
}

let res = isPrime(50)
console.log(res)