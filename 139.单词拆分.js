/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false)
    dp[0] = true
    for (let j = 1; j<= s.length;j++) {
        for (let i = 0; i < wordDict.length; i++) {
            if (wordDict[i].length <= j) {
                dp[j] = dp[j] || (dp[j - wordDict[i].length] && s.substring(j - wordDict[i].length, j) == wordDict[i])
            }
        }
    }
    return dp[s.length]
};
// @lc code=end

console.log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]))

