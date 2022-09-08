/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  // const returnArr = []
  // dfs(root, [])
  // function dfs(node, arr) {
  //   if (!node.left && !node.right) {
  //     arr.push(node.val)
  //     returnArr.push(arr)
  //     return
  //   }
  //   if (node.left) {
  //     const leftArr = [...arr, node.val]
  //     dfs(node.left, leftArr)
  //   }
  //   if (node.right) {
  //     const rightArr = [...arr, node.val]
  //     dfs(node.right, rightArr)
  //   }
  // }
  // return returnArr.map(item => item.join('->'))
  const returnArr = []
  dfs(root, '')
  function dfs(node, path) {
    path += `->${node.val}`
    if (!node.left && !node.right) {
      returnArr.push(path.substring(2))
      return
    }
    if (node.left) dfs(node.left, path)
    if (node.right) dfs(node.right, path)
  }
  return returnArr
};
// @lc code=end

