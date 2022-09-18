/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    word1 = word1.split('')
    word2 = word2.split('')
    const dp = new Array(word1.length + 1)
    for(let i = 0; i <dp.length; i++) {
        dp[i] = new Array(word2.length + 1).fill(9999)
        dp[i][0] = i
    }
    for(let i = 0; i <dp[0].length; i++) {
        dp[0][i] = i
    }
    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1],dp[i - 1][j]) + 1
            }
        }
    }
    // console.log(dp)
    return dp[word1.length][word2.length]
};
// @lc code=end


console.log(minDistance('horse', 'ros'))
