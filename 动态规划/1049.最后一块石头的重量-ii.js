/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  const totalNum = stones.reduce((total, cur) => {
    total += cur
    return total
  }, 0)
  const midTotalNum = Math.floor(totalNum / 2)
  const dp = new Array(midTotalNum + 1).fill(0)
  for (let i = 0; i < stones.length; i++) {
    for (let j = midTotalNum; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
    }
  }
  return Math.abs(totalNum - dp[midTotalNum] - dp[midTotalNum])
};
// @lc code=end

console.log(lastStoneWeightII([2, 7, 4, 1, 8, 1]))

