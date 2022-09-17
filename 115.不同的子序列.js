/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const dp = new Array(s.length + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(t.length + 1).fill(0)
        dp[i][0] = 1
    }
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            if (s.charAt(i - 1) == t.charAt(j - 1)) {
                dp[i][j] = dp[i -1][j - 1] + dp[i - 1][j]
            } else {
                dp[i][j] = dp[i -1][j]
            }
        }
    }
    return dp[s.length][t.length]
};
// @lc code=end

console.log(numDistinct('babgbag', 'bag'))

