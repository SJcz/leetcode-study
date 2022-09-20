/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] = 0 - nums[i]
      k--
    }
  }
  if (k == 0) return nums.reduce((total, cur) => {
    total += cur
    return total
  }, 0)
  nums = nums.sort((a, b) => a - b)

  while (k > 0) {
    nums[0] = 0 - nums[0]
    k--
  }
  return nums.reduce((total, cur) => {
    total += cur
    return total
  }, 0)
};
// @lc code=end

console.log(largestSumAfterKNegations([-2, 9, 9, 8, 4], 5))