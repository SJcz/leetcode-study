/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
    // const arr = []
    // bl(root, arr)
    // return arr
    // function bl(node, arr) {
    //     if (!node) return 
    //     bl(node.left, arr)
    //     arr.push(node.val)
    //     bl(node.right, arr)
    // }
    const stack = []
    const arr = []
    let cur = root
    while(cur || stack.length > 0) {
        if (cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            const node = stack.pop()
            arr.push(node.val)
            cur = node.right
        }
    }
    return arr
};
// @lc code=end

