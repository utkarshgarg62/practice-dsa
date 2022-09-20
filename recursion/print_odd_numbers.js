// Print all the odd numbers between n1 and n2
// n1 = 16 
// n2 = 25
// output : 17 19 21 23 25


function oddNum(n1,n2){
    if(n1>n2) return "";
    let res = ""
    if(n1%2 !=0) res = n1 + " "
    return res + oddNum(n1+1,n2)
}

let res = oddNum(16,25)
console.log(res)