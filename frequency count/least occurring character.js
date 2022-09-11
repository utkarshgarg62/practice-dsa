// Find least occurring character.
// Given a string S, find the least occurring character in the input string S.
// e.g., if the input string is “tests” then the output should be ‘e’.

// Note: If there are more than 1 characters with least count than display the smallest character.
// Input:  hello
// where:  First line represents the input string S.
// Output: e
// Explanation:    Characters 'h','e' and 'o' occurs only once and 'e' has the smallest ASCII value among them.


function leastOccuringCharacter(st) {
    let obj = {}
    for (let i = 0; i < st.length; i++) {
        obj[st[i]] = (obj[st[i]] || 0) + 1
    }
    // console.log(obj)
    let smlst_code = Infinity
    let smlst_ele = 0
    for (let ele in obj) {

        if (obj[ele] == 1) {
            if (ele.charCodeAt(ele) < smlst_code) {
                smlst_code = ele.charCodeAt(ele)
                smlst_ele = ele
            }
            // console.log(ele + " " + obj[ele] + " " + ele.charCodeAt(ele))
        }
    }
    return smlst_ele
}

let res = leastOccuringCharacter("hello")
console.log(res)


