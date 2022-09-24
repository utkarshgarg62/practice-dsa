// n1 = 20
// n2 = 15
// output: 300

// using recursion
function product(n1,n2){
    if(n1<n2){
        return product(n2,n1)
    }
    else if(n2!=0){
        return (n1 + product(n1,n2-1))
    }
    else{
        return 0
    }
}


let res = product(20,15)
console.log(res)
