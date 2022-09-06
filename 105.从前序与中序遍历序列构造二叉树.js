/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length) return null
  const rootVal = preorder[0]
  const index = inorder.indexOf(rootVal)
  const root = { val: rootVal }

  // 左子树前序数组 左子树中序数组
  root.left = buildTree(preorder.slice(1, 1 + index), inorder.slice(0, index))

  // 右子树前序数组 右子树中序数组
  root.right = buildTree(preorder.slice(1 + index), inorder.slice(index + 1))
  return root
};
// @lc code=end

