/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length <= 1) return true
  // 贪心 最大的覆盖范围
  let max = nums[0]
  for (let i = 1; i <= max; i++) {
    max = Math.max(max, i + nums[i])
    if (max >= nums.length - 1) return true
  }
  return false
};
// @lc code=end

console.log(canJump([3, 2, 1, 0, 4]))

