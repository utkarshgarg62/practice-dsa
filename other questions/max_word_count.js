// sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// output: 6

var mostWordsFound = function (sentences) {
    let max_count = -Infinity
    for (let words of sentences) {
        let word_count = words.split(" ").length
        // console.log(word_count)

        if (word_count > max_count) {
            max_count = word_count
        }
    }
    return max_count
};

let res = mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])
console.log(res)