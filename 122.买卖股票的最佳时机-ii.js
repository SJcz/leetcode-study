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
  // 贪心
  // 根据数组画一条线, 每次低买高卖(正利润总和)
  let totalNum = 0
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] - prices[i] > 0) totalNum += prices[i + 1] - prices[i]
  }
  return totalNum
};
// @lc code=end

