/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const dpOwn = new Array(prices.length).fill(0)
  const dpNotOwn = new Array(prices.length).fill(0)

  const buyTime = [1]

  dpOwn[0] = 0 - prices[0]
  dpNotOwn[0] = 0

  for (let i = 1; i < prices.length; i++) {
    dpOwn[i] = Math.max(dpOwn[i - 1], dpNotOwn[i - 1] - prices[i])
    dpNotOwn[i] = Math.max(dpNotOwn[i - 1], dpOwn[i - 1] + prices[i])
  }

  return Math.max(...dpOwn, ...dpNotOwn)
};
// @lc code=end

