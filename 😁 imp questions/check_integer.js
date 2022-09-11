// Take an input and check wheather the input is an integer or not.

// using regex
function checkInteger(input) {
    let pattern = /^-?[0-9]+$/g
    let result = pattern.test(input)
    return result
}

let res = checkInteger("779.2")
console.log(res)


// using for loop
function abc(inp) {
    let isNumber = true
    for (let i = 0; i < inp.length; i++) {
        if (inp[i] >= '0' && inp[i] <= '9') {
            continue
        }
        else {
            isNumber = false
            break;
        }
    }
    return isNumber
}


let res2 = abc("2323")
console.log(res2)