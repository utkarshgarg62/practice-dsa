// Take a number and if number is multiple of 3 print "Foo"
// If number is multiple of 5 print "Bar"
// And if number is multiple of both 3 and 5 print "FooBar"
// If not a multiple of either , print nothing.

// Print of Number From 1 to n , and print Foo Bar & FooBar according to above question.
function abc(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FooBar");
        }
        else if (i % 3 === 0) {
            console.log("Foo");
        }
        else if (i % 5 === 0) {
            console.log("Bar");
        }
        else {
            console.log(i);
        }
    }
    return "";
}

let res = abc(50)
console.log(res)

// To check Single Number i
function abc2(i) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FooBar");
    }
    else if (i % 3 === 0) {
        console.log("Foo");
    }
    else if (i % 5 === 0) {
        console.log("Bar");
    }
    else {
        console.log("Sorry Not Multiple");
    }
    return "";
}


let res2 = abc2(50)
console.log(res2)