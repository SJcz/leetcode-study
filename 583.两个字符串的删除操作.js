/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
 const dp = new Array(word1.length + 1)
 for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(word2.length + 1).fill(9999)
    dp[i][0] = i
 }
for (let j = 0; j < dp[0].length; j++) {
    dp[0][j] = j
}
 for (let i = 1; i <= word1.length; i++ ) {
    for (let j = 1; j <= word2.length; j++) {
        if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
            dp[i][j] = dp[i - 1][j - 1]
        } else {
            dp[i][j] = Math.min(dp[i - 1][j - 1] + 2, dp[i-1][j] + 1, dp[i][j-1] + 1)
        }
    }
 }
//  console.log(dp)
 return dp[word1.length][word2.length]
};
// @lc code=end

console.log(minDistance('sea', 'eat'))

