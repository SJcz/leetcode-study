/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let top = 0
  let bottom = 0
  while (top < nums.length) {
    if (nums[top] !== 0) {
      const originB = nums[bottom]
      nums[bottom] = nums[top]
      if (originB == 0) nums[top] = 0
      bottom++
    }
    top++
  }
};
// @lc code=end

