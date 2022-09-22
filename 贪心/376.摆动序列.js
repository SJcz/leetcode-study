/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {

  let maxLen = 1
  let findTop = false
  let findBottom = false
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[0]) {
      findBottom = true
      break
    }
    if (nums[i] < nums[0]) {
      findTop = true
      break
    }
  }
  if (!findBottom && !findTop) return maxLen

  let preNum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (findTop) {
      if (nums[i] < preNum) {
        maxLen++
        findTop = false
        findBottom = true
      }
      preNum = nums[i]
    } else if (findBottom) {
      if (nums[i] > preNum) {
        maxLen++
        findTop = true
        findBottom = false
      }
      preNum = nums[i]
    }
  }
  return maxLen
};
// @lc code=end

console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]))

