/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let top = 0
  let bottom = 0
  while (top <= nums.length - 1) {
    while (bottom <= nums.length - 1 && nums[bottom] !== val) {
      bottom++
    }
    if (top < bottom) top = bottom
    while (top <= nums.length - 1 && nums[top] == val) {
      top++
    }
    if (top <= nums.length - 1) {
      const tmp = nums[bottom]
      nums[bottom] = nums[top]
      nums[top] = tmp
    }
  }

  return Math.min(nums.length, bottom)
};
// @lc code=end

console.log(removeElement([2, 3, 5, 6, 7, 8, 2], 2))

