/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function(root) {
    if (!root) return []
    const queue = []
    const returnArr = []
    queue.push(root)
    while(queue.length > 0) {
        const size = queue.length
        let max
        for (let i = 0; i < size; i++) {
            const node = queue.shift()
            max = max == undefined ? node.val : Math.max(node.val, max)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        returnArr.push(max)
    }
    return returnArr
};
// @lc code=end

