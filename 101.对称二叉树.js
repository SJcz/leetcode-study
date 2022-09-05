/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const queue = []
    queue.push(root) 
    while(queue.length > 0) {
        const arr = []
        const size = queue.length
        for (let i = 0; i < size; i++) {
            const node = queue.shift()
            arr.push(node.val)
            if (node.left || node.right) {
                queue.push(node.left || { val: 'padding'})
                queue.push(node.right || { val: 'padding'})
            }
        }
        for (let i = 0; i < arr.length / 2; i++) {
            if (arr[i] !== arr[arr.length - 1 - i]) return false
        }
    }
    return true
};
// @lc code=end

