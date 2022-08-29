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
  let lIndex = -1
  let rIndex = -1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] > target) {
      while (mid - 1 >= 0 && nums[mid - 1] == nums[mid]) {
        mid-- // 元素相等时的优化处理, 可以减少外层循环次数
      }
      right = mid - 1
    } else if (nums[mid] < target) {
      while (mid + 1 < nums.length && nums[mid + 1] == nums[mid]) {
        mid++ // 元素相等时的优化处理, 可以减少外层循环次数
      }
      left = mid + 1
    } else {
      lIndex = rIndex = mid
      // 找到目标元素后向两边延伸
      while (lIndex - 1 >= 0 && nums[lIndex - 1] == nums[lIndex]) {
        lIndex--
      }
      while (rIndex + 1 < nums.length && nums[rIndex + 1] == nums[rIndex]) {
        rIndex++
      }
      return [lIndex, rIndex]
    }
  }
  return [-1, -1]
};
// @lc code=end

