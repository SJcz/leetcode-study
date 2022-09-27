/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] == target) {
      let from = mid
      let to = mid
      while (from > 0 && nums[from - 1] == nums[from]) from--
      while (to < nums.length - 1 && nums[to + 1] == nums[to]) to++
      return [from, to]
    }
    if (nums[mid] > target) {
      right = mid - 1
    }
    if (nums[mid] < target) {
      left = mid + 1
    }
  }
  return [-1, -1]
};
// @lc code=end

