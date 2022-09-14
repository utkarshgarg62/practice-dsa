function abc(s) {
    let hash_map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (hash_map.has(s[i])) {
            hash_map.set(s[i], hash_map.get(s[i]) + 1)
        }
        else {
            hash_map.set(s[i], 1)
        }
    }

    for (var i = 0; i < s.length; i++) {
        if (hash_map.get(s[i]) == 1) {
            return i
        }
    }
}


let res = abc("loveleetcode")
console.log(res)