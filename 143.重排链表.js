/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let node = head
  while (node.next) {
    node.next.pre = node
    node = node.next
  }
  head.pre = node

  let insertNode = head.pre
  let opeNode = head
  while (insertNode !== opeNode && opeNode.next !== insertNode) {
    const tmp = opeNode.next
    opeNode.next = insertNode
    insertNode.next = tmp

    insertNode = insertNode.pre
    opeNode = tmp
  }
  insertNode.next = null

  node = head
  while (node) {
    delete node.pre
    node = node.next
  }
  return head
};
// @lc code=end

console.log(reorderList(
  {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4
        }
      }
    }
  }
))

