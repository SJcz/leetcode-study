/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true

  return getHight(root) == -1 ? false : true
  function getHight(node) {
    if (!node) return 0
    const left = getHight(node.left)
    const right = getHight(node.right)
    if (left == -1 || right == -1) return -1
    if (Math.abs(left - right) > 1) return -1
    return 1 + Math.max(left, right)
  }
};
// @lc code=end

