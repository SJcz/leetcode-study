/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length == 0 || nums.length == 1) return nums.length
  let top = 1
  let bottom = 1
  while (top <= nums.length - 1) {
    if (nums[top] !== nums[top - 1]) {
      nums[bottom] = nums[top]
      bottom++
    }
    top++
  }
  return bottom
};
// @lc code=end

