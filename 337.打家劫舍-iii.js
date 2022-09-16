/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function (root) {
  function backtracing(node) {
    if (!node) return [0, 0]

    const leftDp = backtracing(node.left)
    const rightDp = backtracing(node.right)

    const val1 = node.val + leftDp[1] + rightDp[1]
    const val2 = Math.max(leftDp[0], leftDp[1]) + Math.max(rightDp[0], rightDp[1])

    return [val1, val2]
  }
  const finalDp = backtracing(root)
  return Math.max(finalDp[0], finalDp[1])
};
// @lc code=end

