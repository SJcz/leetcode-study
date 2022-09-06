/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function (root) {
  // const arr = []
  // function dfs(node) {
  //   if (!node) return
  //   if (node.left) {
  //     dfs(node.left)
  //   }
  //   arr.push(node.val)
  //   if (node.right) {
  //     dfs(node.right)
  //   }
  // }
  // dfs(root)
  // let min = 999999
  // for (let i = 0; i < arr.length - 1; i++) {
  //   min = Math.min(Math.abs(arr[i] - arr[i + 1]), min)
  // }
  // return min
  let pre
  let min = 9999999
  function dfs(node) {
    if (!node) return
    dfs(node.left)
    if (pre) {
      min = Math.min(min, Math.abs(pre.val - node.val))
    }
    pre = node
    dfs(node.right)
  }
  dfs(root)
  return min
};
// @lc code=end

