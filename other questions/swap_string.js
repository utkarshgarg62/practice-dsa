function abc(word) {
    let start = 0
    let end = word.length - 1

    while (start < end) {
        [word[start], word[end]] = [word[end], word[start]]
        start++;
        end--;
    }

    return word
}


let res = abc("abcdef")
console.log(res)