/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
    const arr = []
    bl(root, arr)
    return arr
    function bl(node, arr) {
        if (!node) return 
        
        bl(node.left, arr)
        bl(node.right, arr)
        arr.push(node.val)
    }
};
// @lc code=end

