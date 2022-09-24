/*
 * @lc app=leetcode.cn id=968 lang=javascript
 *
 * [968] 监控二叉树
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
var minCameraCover = function(root) {
    // 0 该节点无覆盖   1: 该节点有摄像头  2：该节点有覆盖
    let result = 0
    function traversal(node) {
        if (!node) return 2
        const left = traversal(node.left)
        const right = traversal(node.right)

        if (left == 0 || right == 0) {
            result++
            return 1
        }

        if (left == 1 || right == 1) {
            return 2
        }

        if (left == 2 && right == 2) {
            return 0
        }
    }
    const status = traversal(root)
    if (status == 0) result++
    return result
};
// @lc code=end

