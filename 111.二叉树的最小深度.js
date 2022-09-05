/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
    // if (!root) return 0
    // const queue = []
    // queue.push(root)
    // let min = 0
    // while(queue.length > 0) {
    //     min++
    //     const size = queue.length
    //     for (let i =0; i < size; i++) {
    //         const node = queue.shift()
    //         if (node.left) queue.push(node.left)
    //         if (node.right) queue.push(node.right)
    //         if (!node.left && !node.right) return min
    //     }
    // }
    if (!root) return 0
    return getMin(root, 0)
    function getMin(node, cur) {
        if (!node.left && !node.right) return cur + 1
        let min = 100000
        if (node.left) {
            min = getMin(node.left, cur + 1)
        }
        if (node.right) {
            min = Math.min(min, getMin(node.right, cur + 1))
        }
        return min
    }
};
// @lc code=end

