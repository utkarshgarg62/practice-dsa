function abc(nums) {
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
        sum = Math.max(sum, nums[i])
    }
    return sum;


}


let res = abc([-20, -12, 42, -10, 25])
console.log(res)






function countkDist(str, k) {
    // Initialize result
    var res = 0;

    var n = str.length;

    // To store count of characters from 'a' to 'z'
    var cnt = Array.from({ length: 26 }, (_, i) => 0);

    // Consider all substrings beginning with
    // str[i]
    for (i = 0; i < n; i++) {
        var dist_count = 0;

        // Consider all substrings between str[i..j]
        for (j = i; j < n; j++) {
            // If this is a new character for this
            // substring, increment dist_count.
            if (cnt[str.charAt(j).charCodeAt(0) - 'a'.charCodeAt(0)] == 0)
                dist_count++;

            // Increment count of current character
            cnt[str.charAt(j).charCodeAt(0) - 'a'.charCodeAt(0)]++;

            // If distinct character count becomes k,
            // then increment result.
            if (dist_count == k)
                res++;
        }
    }

    return res;
}


let res2 = countkDist("aaba", 5)
console.log(res2)