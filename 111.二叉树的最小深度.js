/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
  return getDepth(root)
  function getDepth(node) {
    if (!node) return 0
    let min = 0
    if (node.left) min = getDepth(node.left)
    if (node.right) min = min == 0 ? getDepth(node.right) : Math.min(min, getDepth(node.right))
    return 1 + min
  }
};
// @lc code=end

