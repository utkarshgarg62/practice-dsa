// Reverse each word of string in given manner
// str = "concept of the day"
// output : "tpecnoc fo eht yad"

// using recursion
function rev_sent_words(str) {

    function reverse(str) {
        if (str.length == 0) return ""
        return reverse(str.slice(1)) + str[0]
    }

    let words = str.split(" ")
    for (let i = 0; i < words.length; i++) {
        words[i] = reverse(words[i])
    }
    return words.join(" ")

}

let res = rev_sent_words("concept of the day")
console.log(res)