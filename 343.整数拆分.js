/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const dp = [null, null, 1] // 下标表示目标数, 值为乘积最大值
    for (let i = 3; i <=n; i++) {
        let max = dp[i - 1]
        for (let j = 2; j <= i - 1; j++) {
            // i 拆分为两个数, 第二个数可以拆分(dp[j]), 也可以不拆分 j
            max = max < Math.max(dp[j] * (i - j), j * (i - j)) ? Math.max(dp[j] * (i - j), j * (i - j)) : max
        }
        dp[i] = max
    }
    // console.log(dp)
    return dp[n]
};
// @lc code=end

console.log(integerBreak(10))

