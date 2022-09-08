/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // let min = 0
  // for (let i = 0; i < nums.length; i++) {
  //   let count = nums[i]
  //   let j = i
  //   while (count < target && j < nums.length - 1) {
  //     j++
  //     count += nums[j]
  //   }
  //   if (count >= target) {
  //     min = min == 0 ? (j - i + 1) : Math.min(j - i + 1, min)
  //   }
  // }
  // return min
  let min = 0
  let count = 0
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    count += nums[i]
    if (count >= target) {
      min = min == 0 ? (i - j + 1) : Math.min(min, i - j + 1)
      if (min == 1) return 1
      count -= nums[j]
      count -= nums[i]
      j++
      i--
    }
  }
  return min
};
// @lc code=end

