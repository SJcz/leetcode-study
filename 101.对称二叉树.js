/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  // return dc(root.left, root.right)
  // function dc(left, right) {
  //   if (!left && !right) return true
  //   if (!left && right) return false
  //   if (left && !right) return false
  //   return left.val == right.val && dc(left.left, right.right) && dc(left.right, right.left)
  // }
  const queue = []
  queue.push(root.left, root.right)
  while (queue.length > 0) {
    const node1 = queue.shift()
    const node2 = queue.shift()
    if (!node1 && node2) return false
    if (!node2 && node1) return false
    if (!node1 && !node2) {
      continue
    }
    if (node1.val !== node2.val) return false
    queue.push(node1.left)
    queue.push(node2.right)
    queue.push(node2.left)
    queue.push(node1.right)
  }
  return true
};
// @lc code=end

