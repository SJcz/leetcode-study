/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1)
  for (let i = 1; i < nums.length; i++) {
    for (let x = i - 1; x >= 0; x--) {
      if (nums[x] >= nums[i]) continue
      dp[i] = Math.max(dp[x] + 1, dp[i])
    }
  }
  // console.log(dp)
  return Math.max(...dp)
};
// @lc code=end

console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]))

