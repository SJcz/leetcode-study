/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const dp = [1] // 以 1-n 的二叉搜索树数量
    for (let i = 1; i <= n; i++) {
        dp[i] = 0
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j]
        }
    }
    return dp[n]
};
// @lc code=end

console.log(numTrees(3))

function quickSort(arr, start, end) {
    if (start >= end) return
    const compareVal = arr[start]
    let left = start
    let right = end
    while(left < right) {
        while(left < right && arr[right] >= compareVal) right--
        while(left < right && arr[left] < compareVal) left++
        const tmp = arr[left]
        arr[left] = arr[right]
        arr[right] = tmp
    }
    arr[left] = compareVal
    quickSort(arr, start, left - 1)
    quickSort(arr, left + 1, end)
    return arr
}

console.log(quickSort([3,2,4,1,213,13,54,5,2], 0, 8))