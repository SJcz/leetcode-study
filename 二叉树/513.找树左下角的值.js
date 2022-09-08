/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function (root) {
  // const queue = []
  // queue.push(root)
  // let value = 'undefined'
  // while (queue.length > 0) {
  //   const size = queue.length
  //   value = queue[0].val
  //   for (let i = 0; i < size; i++) {
  //     const node = queue.shift()
  //     if (node.left) queue.push(node.left)
  //     if (node.right) queue.push(node.right)
  //   }
  // }
  // return value
  const levelArr = []
  function findLevel(node, level) {
    if (!node) return
    levelArr[level] = levelArr[level] || []
    levelArr[level].push(node.val)
    if (node.left) findLevel(node.left, level + 1)
    if (node.right) findLevel(node.right, level + 1)
  }
  findLevel(root, 0)
  return levelArr[levelArr.length - 1][0]
};
// @lc code=end

