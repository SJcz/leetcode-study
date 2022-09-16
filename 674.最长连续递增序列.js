/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  const dp = new Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) dp[i] = dp[i - 1] + 1
  }
  return Math.max(...dp)
};
// @lc code=end

console.log(findLengthOfLCIS([2, 2, 2, 2, 2]))

