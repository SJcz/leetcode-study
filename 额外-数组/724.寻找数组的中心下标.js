/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let total = 0
  for (let i = 0; i < nums.length; i++) {
    total += nums[i]
  }
  let cutTotal = 0
  for (let i = 0; i < nums.length; i++) {
    if (cutTotal == ((total - nums[i]) / 2)) return i
    cutTotal += nums[i]
  }
  return -1
};
// @lc code=end

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))

