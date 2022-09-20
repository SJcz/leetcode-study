/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 动态规划
  // const dp = new Array(nums.length)
  // dp[0] = nums[0]
  // for (let i = 1; i < nums.length; i++) {
  //   dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
  // }
  // return Math.max(...dp)

  // 贪心
  // 连续和为负数直接舍弃
  let count = 0
  let result = -99999
  for (let i = 0; i < nums.length; i++) {
    count += nums[i]
    if (count > result) {
      result = count
    }
    if (count <= 0) count = 0
  }
  return result
};
// @lc code=end

