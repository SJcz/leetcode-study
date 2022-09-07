/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null
  const index = Math.floor(nums.length / 2)
  const node = { val: nums[index], left: null, right: null }
  // console.log(index)
  node.left = sortedArrayToBST(nums.slice(0, index))
  node.right = sortedArrayToBST(nums.slice(index + 1))
  return node
};
// @lc code=end

sortedArrayToBST([-10, -3, 0, 5, 9])

