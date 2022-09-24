/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const originLen = nums.length
  nums = [...nums, ...nums]
  const returnArr = new Array(nums.length).fill(-1)
  const stack = [0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[stack[stack.length - 1]]) {
      stack.push(i)
      continue
    }

    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      const idx = stack.pop()
      returnArr[idx] = nums[i]
    }
    stack.push(i)
  }
  return returnArr.slice(0, originLen)

  // 循环两次数组即可, 确实很赞
};
// @lc code=end

console.log(nextGreaterElements([1, 2, 1]))

