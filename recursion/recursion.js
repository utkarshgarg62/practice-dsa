function abc(N) {
    N=N.toString()
    return N.length !== 1 ? abc(N.slice(1))+N[0] : N;

}


let res5 = abc(10348)
console.log(res5)