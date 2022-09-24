var fourSum = function (arr, target) {
    arr.sort((a,b)=>a-b)
    let result = []
    for (let i = 0; i < arr.length - 3; i++) {
        for (let j = i + 1; i < arr.length - 2; i++) {
            let k = j + 1
            let l = arr.length - 1
            while (k < l) {
                let sum = arr[i] + arr[j] + arr[k] + arr[l]
                if (sum == target) {
                    result.push([arr[i], arr[j], arr[k], arr[l]])
                    while (arr[k] === arr[k + 1]) k++
                    while (arr[l] === arr[l - 1]) l--
                }
                if (sum < target) k++
                else l--
            }
            while (arr[j] === arr[j + 1]) j++
        }
        while (arr[i] === arr[i + 1]) i++
    }
    return result
};

let result2 = fourSum([1, 0, -1, 0, -2, 2], 0)
console.log(result2)