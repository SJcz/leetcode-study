/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    function dfs(node, curNum) {
        if (!node) return false
        curNum += node.val
        if (!node.left && !node.right) {
            if (curNum == targetSum) return true
        }
        if (node.left) {
            if (dfs(node.left, curNum)) return true
        }
        if (node.right) {
            if (dfs(node.right, curNum)) return true
        }
    }
    return !!dfs(root, 0)
};
// @lc code=end

