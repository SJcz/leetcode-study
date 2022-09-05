/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function(root) {
    const queue = []
    const returnArr = []
    queue.push(root)
    while(queue.length > 0) {
        const size = queue.length
        const arr = []
        for (let i = 0; i < size; i++) {
            const node = queue.shift()
            arr.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        returnArr.push(arr.reduce((total, cur) => {
            total += cur
            return total
        }, 0) / arr.length)
    }
    return returnArr
};
// @lc code=end

