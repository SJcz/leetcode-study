/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = new Array(n + 1).fill(0)
    for (let i = 0; i <= n; i++) {
        for (let j = 1; j <= 100; j++) {
            if (i >= j * j) {
                if (dp[i] == 0) {
                    dp[i] = dp[i - j * j] + 1
                } else{
                    dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
                }
            }
        }
    }
    return dp[n]
};
// @lc code=end


console.log(numSquares(13))

