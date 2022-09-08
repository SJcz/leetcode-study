/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  function deleteN(node, val) {
    if (!node) return null
    if (node.val == val) {
      if (node.left && !node.right) return node.left
      if (!node.left && node.right) return node.right
      if (!node.left && !node.right) return null
      let right = node.right
      while (right.left) {
        right = right.left
      }
      right.left = node.left
      return node.right
    }
    if (node.val > val) {
      node.left = deleteN(node.left, val)
    } else {
      node.right = deleteN(node.right, val)
    }
    return node
  }
  return deleteN(root, key)
};

// @lc code=end
