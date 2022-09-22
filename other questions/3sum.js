function ThreeSum2(arr, X) {
    arr.sort((a, b) => a - b)
    let result = []
    for (let i = 0; i < arr.length - 3; i++) {
        let j = i + 1
        let k = arr.length - 1
        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k]
            if (sum == X) {
                result.push([arr[i], arr[j], arr[k]])
                while (arr[j] === arr[j + 1]) j++
                while (arr[k] === arr[k - 1]) k++
            }
            if (sum < X) j++
            else k--
        }
        while (arr[i] === arr[i + 1]) i++
    }
    return result
};

let result = ThreeSum2([-1, 0, 1, 2, -1, -4], 0)
console.log(result)