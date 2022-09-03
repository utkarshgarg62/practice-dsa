// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.

function abc(words,k){
    // console.log(words)
    let obj ={}
    for(let i=0;i<words.length;i++){
        if(obj[words[i]]){
            obj[words[i]]+=1
        }
        else{
            obj[words[i]]=1
        }
    }
    console.log(obj)
    const sortable = Object.entries(obj)
    .sort(([,a],[,b]) => b-a)

    console.log(sortable);
    let arr=[]
    for(let i=0;i<k;i++){
        arr.push(sortable[i][0])
    }
    return arr

}


let res = abc(["i","love","leetcode","i","love","coding"], 3)
console.log(res)


