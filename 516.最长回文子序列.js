/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const dp = new Array(s.length)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(s.length).fill(0)
    }
    let max = 0
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            if (s.charAt(i) == s.charAt(j)) {
                if (j == i) {
                    dp[i][j] = 1
                } else {
                    dp[i][j] = dp[i + 1][j - 1] + 2
                }
            } else {
                dp[i][j] = Math.max(dp[i + 1][j - 1], dp[i][j - 1], dp[i + 1][j])
            }
            max = Math.max(max, dp[i][j])
        }
    }
    return max
};
// @lc code=end

console.log(longestPalindromeSubseq('bbbab'))

