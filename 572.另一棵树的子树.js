/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const queue = []
  queue.push(root)
  while (queue.length > 0) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      if (isSame(node, subRoot)) return true
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return false
  function isSame(p, q) {
    if (!p && !q) return true
    if (!p && q) return false
    if (p && !q) return false
    return p.val == q.val && isSame(p.left, q.left) && isSame(p.right, q.right)
  }
};
// @lc code=end

