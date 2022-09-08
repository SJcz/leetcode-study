/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // let top = bottom = -1
  // for (let i = 0; i < nums.length; i++) {
  //   nums[i] = nums[i] * nums[i]
  //   if (i >= 1 && nums[i] < nums[i - 1]) {
  //     top = bottom = i
  //   }
  // }
  // if (top == -1) return nums
  // const newArr = [nums[top]]
  // top++
  // bottom--
  // while (top <= nums.length - 1 && bottom >= 0) {
  //   if (nums[bottom] <= nums[top]) {
  //     newArr.push(nums[bottom])
  //     bottom--
  //   } else {
  //     newArr.push(nums[top])
  //     top++
  //   }
  // }
  // while (bottom >= 0) {
  //   newArr.push(nums[bottom])
  //   bottom--
  // }
  // while (top <= nums.length - 1) {
  //   newArr.push(nums[top])
  //   top++
  // }
  // return newArr
  let bottom = 0
  let top = nums.length - 1
  const newArr = []
  let k = nums.length - 1
  while (bottom <= top) {
    if (nums[bottom] * nums[bottom] <= nums[top] * nums[top]) {
      newArr[k--] = nums[top] * nums[top]
      top--
    } else {
      newArr[k--] = nums[bottom] * nums[bottom]
      bottom++
    }
  }
  return newArr
};
// @lc code=end







