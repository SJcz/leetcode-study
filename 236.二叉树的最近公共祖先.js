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

  // 递归
  function dfs(node, targetNode, path) {
    if (!node) return false
    path.push(node)
    if (node === targetNode) return path
    if (node.left) {
      const result = dfs(node.left, targetNode, path)
      if (result) return result
      path.pop()
    }
    if (node.right) {
      const result = dfs(node.right, targetNode, path)
      if (result) return result
      path.pop()
    }
    return false
  }
  const pParents = dfs(root, p, [])
  const qParents = dfs(root, q, [])
  for (let i = pParents.length - 1; i >=0; i--) {
    if (qParents.includes(pParents[i])) return pParents[i]
  }
};
// @lc code=end



const node1 = {
  val: 5
}
const node2 = {
  val: 1
}
const root = {
  val: 3,
  left: node1,
  right: node2
}
lowestCommonAncestor(root, node1, node2)

