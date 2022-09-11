function abc(s) {
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let res = 0
    for (i = 0; i < s.length; i++) {
        res += roman[s[i]]
    }
    return res


}


let res = abc("III")
console.log(res)