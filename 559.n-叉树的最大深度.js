/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  return getDepth(root)
  function getDepth(node) {
    if (!node) return 0
    let max = 0
    for (let item of node.children || []) {
      max = Math.max(max, getDepth(item))
    }
    return 1 + max
  }
};
// @lc code=end

