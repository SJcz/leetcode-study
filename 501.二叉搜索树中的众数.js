/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function (root) {
  let count = 0
  let maxCount = 0
  let arr = []
  let pre
  function dfs(node) {
    if (!node) return
    dfs(node.left)
    if (!pre) {
      count = 1
    } else if (pre.val == node.val) {
      count++
    } else {
      count = 1
    }
    if (count > maxCount) {
      maxCount = count
      arr = [node.val]
    } else if (count == maxCount) {
      arr.push(node.val)
    }
    pre = node
    dfs(node.right)
  }
  dfs(root)
  return arr
};
// @lc code=end

