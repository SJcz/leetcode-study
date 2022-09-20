/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const dp = []
  for (let i = 0; i < nums1.length; i++) {
    dp[i] = new Array(nums2.length).fill(0)
  }
  let max = 0
  dp[0][0] = nums1[0] == nums2[0] ? 1 : 0
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) dp[i][j] = (i > 0 && j > 0) ? (dp[i - 1][j - 1] + 1) : 1
      max = Math.max(max, dp[i][j])
    }
  }
  // console.log(dp)
  return max
};
// @lc code=end

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]))

