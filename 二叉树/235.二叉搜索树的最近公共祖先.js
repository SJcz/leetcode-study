/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // function findPath(node, target, path) {
    //     if (!node) return null
    //     path.push(node)
    //     if (node === target) return path
    //     if (node.val > target.val) {
    //         node = node.left
    //         return findPath(node, target, path)
    //     } else {
    //         node = node.right
    //         return findPath(node, target, path)
    //     }
    // }

    // const pPath = findPath(root, p, [])
    // const qPath = findPath(root, q, [])
    // for (let i = pPath.length - 1; i >= 0; i--) {
    //     if (qPath.includes(pPath[i])) return pPath[i]
    // }
};
// @lc code=end

