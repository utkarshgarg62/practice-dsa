// from n to 1
// n=10

// using iteration (for-loop)
function abc(n){
    for(let i=n;i>0;i--){
        console.log(i)
    }
return ""
}

let res = abc(10)
console.log(res)


// using iteration (while-loop)
function abc2(n){
    while(n>0){
        console.log(n)
        n--
    }
return ""
}

let res2 = abc2(10)
console.log(res2)



// using recurison
function abc3(n){
    if(n==0) return;
    else{
        console.log(n)
        n--
        abc3(n)
    }
return ""
}

let res3 = abc3(10)
console.log(res3)