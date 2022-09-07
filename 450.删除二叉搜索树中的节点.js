/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    let parentNode
    function findNode(node, target) {
        if (!node) return null
        if (node.val == target) return node
        parentNode = node
        if (node.val > target) {
            return findNode(node.left, target)
        } else {
            return findNode(node.right, target)
        }
    }
    const node = findNode(root, key)
    if (!node) return root
    

    let blNode
    if (parentNode) {
        if (node.val > parentNode.val) {
            parentNode.right = node.right
            blNode = node.left
        } else {
            parentNode.left = node.left
            blNode = node.right
        }
        
    } else {
        if (node.left) {
            root = node.left
            blNode = node.right
        } else {
            root = node.right
            blNode = node.left
        }
         
    }

    const waitVals = []
    paddingArr(blNode, waitVals)

    function paddingArr(node, arr) {
        if (!node) return
        arr.push(node.val)
        if (node.left) {
            paddingArr(node.left, arr)
        }
        if (node.right) {
            paddingArr(node.right, arr)
        }
    }

    for (let item of waitVals) {
        insert(root, item)
    }

    return root


    function insert(node, val) {
        if (!node) return { val, left: null, right: null }
        if (node.val > val) { // 左子树
            node.left = insert(node.left, val)
        }
        if (node.val < val) { // 左子树
            node.right = insert(node.right, val)
        }
        return node
    }
};
// @lc code=end

const node = {
    val: 5, 
    left: {
        val: 3,
        left: {
            val: 2
        },
        right: {
            val: 4
        }
    }
}
deleteNode(node, 3)
