/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const viHead = { val: 'viHead', next: head }
  let preNode = viHead
  let nextNode = head
  while (nextNode) {
    if (nextNode.val == val) {
      preNode.next = nextNode.next
    } else {
      preNode = nextNode
    }
    nextNode = nextNode.next
  }
  return viHead.next
};
// @lc code=end

