// sum from 1 to n
// n=10

function sum(n){
    if(n==1) return 1 //base-case
    return (n + sum(n-1))
}


let res2 = sum(5)
console.log(res2)


/* 
Working in this question 
sum(5) = 5 + sum(4)
    sum(4) = 4 + sum(3)
        sum(3) = 3 + sum(2)
            sum(2) = 2 + sum(1)
                sum(1) = 1 
                */