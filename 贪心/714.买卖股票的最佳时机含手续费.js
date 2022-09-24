/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    const dp = new Array(prices.length)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = [0, 0]
    }
    dp[0] = [0, -prices[0]]
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
    }
    return Math.max(dp[prices.length - 1][0], dp[prices.length - 1][1])
};
// @lc code=end

console.log(maxProfit([1,3,7,5,10,3], 3))
