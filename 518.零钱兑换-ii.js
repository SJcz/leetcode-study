/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    if (amount <= 0 ) return 1
    const dp = new Array(amount)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = []
    }
    for (let j = 0; j <= amount; j++) { 
        if (j == 0) {
            dp[0][0] = 1
        } else {
            dp[0][j] = j % coins[0] == 0 ? 1 : 0
        }
    }
    
    for (let i = 1; i < coins.length; i++) {
        for (let j = 0; j <= amount; j++) {
            if (j < coins[i]) {
                dp[i][j] = dp[i - 1][j]
                continue
            }
            dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i]]
        }
    }
    // console.log(dp)
    return dp[coins.length - 1][amount] || 0
};
// @lc code=end

console.log(change(5, [1,2,5]))

