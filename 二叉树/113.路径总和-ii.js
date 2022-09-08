/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const returnArr = []
    function dfs(node, path, total) {
        if (!node) return
        path.push(node.val)
        total += node.val
        if (!node.left && !node.right ) {
            if (total == targetSum) {
                returnArr.push([...path])
                return
            }
        }
        if (node.left) {
            dfs(node.left, path, total)
            const val = path.pop()
        }
        if (node.right) {
            dfs(node.right, path, total)
            const val = path.pop()
        }
    }
    dfs(root, [], 0)
    return returnArr
};
// @lc code=end

