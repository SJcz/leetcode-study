/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const dpOwn = new Array(prices.length).fill(0)
  const dpNotOwn = new Array(prices.length).fill(0)

  dpOwn[0] = 0 - prices[0]
  dpNotOwn[0] = 0

  for (let i = 1; i < prices.length; i++) {
    dpOwn[i] = Math.max(dpOwn[i - 1], dpNotOwn[i - 1] - prices[i])
    dpNotOwn[i] = Math.max(dpNotOwn[i - 1], dpOwn[i - 1] + prices[i])
  }

  return Math.max(...dpOwn, ...dpNotOwn)
};
// @lc code=end

console.log(maxProfit([7, 1, 5, 3, 6, 4]))

