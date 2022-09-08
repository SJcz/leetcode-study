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
  // let right = nums.length - 1
  // let left = 0
  // while(left < right) {
  //   while(nums[right] == 0 && left < right) {
  //     right--
  //   }
  //   while(nums[left] !== 0 && left < right) {
  //     left++
  //   }
  //   if (left < right) {
  //     nums[left] = nums[right]
  //     nums[right] = 0
  //   }
  // }
  // return nums
};
// @lc code=end

