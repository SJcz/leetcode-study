/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // let max = 0
  // for (let i = 0; i < prices.length - 1; i++) {
  //   if (i > 0 && prices[i] >= prices[i - 1]) continue
  //   for (let j = i + 1; j < prices.length; j++) {
  //     if (prices[j] > prices[i]) max = Math.max(max, prices[j] - prices[i])
  //   }
  // }
  // return max

  // const min = new Array(prices.length).fill(prices[0])
  // for (let i = 1; i < prices.length; i++) {
  //   min[i] = Math.min(min[i - 1], prices[i])
  // }
  // // console.log(min)
  // let max = 0
  // for (let i = 0; i < min.length - 1; i++) {
  //   max = Math.max(prices[i + 1] - min[i], max)
  // }
  // return max

  const dpOwn = new Array(prices.length).fill(0)
  const dpNotOwn = new Array(prices.length).fill(0)

  dpOwn[0] = 0 - prices[0]
  dpNotOwn[0] = 0

  for (let i = 1; i < prices.length; i++) {
    dpOwn[i] = Math.max(dpOwn[i - 1], 0 - prices[i])
    dpNotOwn[i] = Math.max(dpNotOwn[i - 1], dpOwn[i - 1] + prices[i])
  }
  // console.log(dpOwn)
  // console.log(dpNotOwn)
  return dpNotOwn[prices.length - 1]
};
// @lc code=end

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
