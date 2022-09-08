/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
var constructMaximumBinaryTree = function (nums) {
  return buildTree(nums)

  function buildTree(nums) {
    if (!nums.length) return null
    const index = findIndex(nums)
    const node = { val: nums[index] }
    node.left = buildTree(nums.slice(0, index))
    node.right = buildTree(nums.slice(index + 1))
    return node
  }

  function findIndex(nums) {
    let max = 0
    for (let i = 0; i < nums.length; i++) {
      max = nums[max] > nums[i] ? max : i
    }
    return max
  }
};
// @lc code=end

