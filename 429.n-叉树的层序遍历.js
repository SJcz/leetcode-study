/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    const queue = []
    const returnArr = []
    queue.push(root)
    while(queue.length > 0) {
        const size = queue.length
        const arr = []
        for (let i = 0; i < size; i++) {
            const node = queue.shift()
            arr.push(node.val)
            for (let item of node.children || []) {
                if (item) queue.push(item)
            }
        }
        returnArr.push(arr)
    }

    return returnArr
};
// @lc code=end

