/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function (root) {
  // if (!root) return 0
  // const queue = []
  // queue.push(root)
  // let count = 0
  // while (queue.length > 0) {
  //   const size = queue.length
  //   count += size
  //   for (let i = 0; i < size; i++) {
  //     const node = queue.shift()
  //     if (node.left) queue.push(node.left)
  //     if (node.right) queue.push(node.right)
  //   }
  // }
  // return count
  return getNum(root)
  function getNum(node) {
    if (!node) return 0
    const left = getNum(node.left)
    const right = getNum(node.right)
    return left + right + 1
  }
};
// @lc code=end

