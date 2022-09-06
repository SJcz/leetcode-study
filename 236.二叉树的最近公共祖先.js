/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
var lowestCommonAncestor = function (root, p, q) {
  // 层序遍历
  // addParent(root)
  // const pParents = []
  // while (p) {
  //   pParents.push(p)
  //   p = p.parent
  // }

  // const qParents = []
  // while (q) {
  //   qParents.push(q)
  //   q = q.parent
  // }
  // for (let i = 0; i < pParents.length; i++) {
  //   if (qParents.includes(pParents[i])) return pParents[i]
  // }
  // function addParent(node) {
  //   if (!node) return
  //   if (node.left) {
  //     node.left.parent = node
  //     addParent(node.left)
  //   }
  //   if (node.right) {
  //     node.right.parent = node
  //     addParent(node.right)
  //   }
  // }

  function dfs(node, targetNode, path) {
    if (!node) return false
    path.push(node)
    if (node == targetNode) return path
  }
};
// @lc code=end

