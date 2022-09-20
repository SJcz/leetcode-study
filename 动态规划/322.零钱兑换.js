/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(-1) // 凑成面额的最少硬币个数
    for (let j = 0; j <= amount; j++) {
        dp[j] = j % coins[0] == 0 ? (j / coins[0]) : -1
    }
    // console.log(dp)
    for (let i = 1; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            if (dp[j - coins[i]] == -1) {
                dp[j] = dp[j]
            } else if (dp[j] == -1) {
                dp[j] = dp[j - coins[i]] + 1
            } else {
                dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j])
            }
        }
        // console.log(dp)
    }
    return dp[amount]
};
// @lc code=end


console.log(coinChange([2,5,10,1], 27))

