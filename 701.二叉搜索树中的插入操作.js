/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (!root) return { val, left: null, right: null }
    function insert(node, val) {
        if (!node) return 
        if (node.val > val) { // 左子树
            if (node.left) {
                insert(node.left, val)
            } else {
                node.left = { val, left: null, right: null }
            }
        }
        if (node.val < val) { // 右子树
            if (node.right) {
                insert(node.right, val)
            } else {
                node.right = { val, left: null, right: null }
            }
        }
    }
    insert(root, val)
    return root
};
// @lc code=end

