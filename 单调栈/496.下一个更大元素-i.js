/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const map = {} // 记录每个元素右边第一个比自己大的元素

  const stack = []
  for (let i = 0; i < nums2.length; i++) {
    if (!stack.length || stack[stack.length - 1] >= nums2[i]) {
      stack.push(nums2[i])
      continue
    }
    while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
      const val = stack.pop()
      map[val] = nums2[i]
    }
    stack.push(nums2[i])
  }

  const returnArr = []
  for (let i = 0; i < nums1.length; i++) {
    returnArr.push(map[nums1[i]] || -1)
  }
  return returnArr
};
// @lc code=end

