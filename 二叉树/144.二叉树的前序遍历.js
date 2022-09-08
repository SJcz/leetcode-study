/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
    // const arr = []
    // bl(root, arr)
    // return arr
    // function bl(node, arr) {
    //     if (!node) return 
    //     arr.push(node.val)
    //     bl(node.left, arr)
    //     bl(node.right, arr)
    // }
    const stack = []
    const arr = []
    stack.push(root)
    while(stack.length > 0) {
        const node = stack.pop()
        arr.push(node.val)
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }
    return arr
};
// @lc code=end

