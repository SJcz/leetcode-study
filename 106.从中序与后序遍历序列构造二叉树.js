/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    function makeTree(inorder, postorder) {
       if (!inorder.length) return null
       const node = { val: postorder[postorder.length - 1]}
       const iIndex = inorder.indexOf(node.val)
       
       node.left = makeTree(inorder.slice(0, iIndex), postorder.slice(0, iIndex))
       node.right = makeTree(inorder.slice(iIndex + 1), postorder.slice(iIndex, postorder.length - 1))
       return node
    }
    return makeTree(inorder, postorder)
};
// @lc code=end

console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]))

