// Find the maximum sum of any two elements in an array.
// Find the largest and second largest element in an array.
// arr = [12, 4, 76, 2, 63, 84, 2, 24, 5]

function abc(arr) {

    let firstLarge_ele = -Infinity
    let secondLarge_ele = -Infinity
    for (let ele of arr) {
        if (ele > firstLarge_ele) {
            secondLarge_ele = firstLarge_ele
            firstLarge_ele = ele
        }
    }
    let sum = firstLarge_ele + secondLarge_ele
    console.log("Max Sum is : " + sum);

    return "First Large Element is : " + firstLarge_ele +
        " , " + "First Large Element is : " + secondLarge_ele
}

let res = abc([12, 4, 76, 2, 63, 84, 2, 24, 5])
console.log(res)