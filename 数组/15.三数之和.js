/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const newArr = nums.sort((a, b) => a - b)
  const finalArr = []
  for (let i = 0; i < newArr.length; i++) {
    if (i > 0 && newArr[i] == newArr[i - 1]) continue
    let left = i + 1
    let right = newArr.length - 1
    while (left < right) {
      const sum = newArr[i] + newArr[left] + newArr[right]
      if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      } else {
        finalArr.push([newArr[i], newArr[left], newArr[right]])
        left++
        while (newArr[left] == newArr[left - 1]) {
          left++
        }
        right--
        while (newArr[right] == newArr[right + 1]) {
          right--
        }
      }
    }
  }
  return finalArr
};
// @lc code=end

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

