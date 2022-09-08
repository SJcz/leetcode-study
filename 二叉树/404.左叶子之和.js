/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
  let sum = 0
  function findLeft(node, pNode) {
    if (!node) return
    if (!node.left && !node.right && pNode.left == node) {
      sum += node.val
    }
    if (node.left) {
      findLeft(node.left, node)
    }
    if (node.right) {
      findLeft(node.right, node)
    }
  }
  findLeft(root.left, root)
  findLeft(root.right, root)
  return sum
};
// @lc code=end

