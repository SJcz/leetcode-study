/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let preNode
  function r_m_l(node) {
    if (!node) return
    if (node.right) r_m_l(node.right)
    if (preNode) node.val += preNode.val
    preNode = node
    if (node.left) r_m_l(node.left)
  }
  r_m_l(root)
  return root
};
// @lc code=end

