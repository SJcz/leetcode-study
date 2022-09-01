/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  // let nextNode = head
  // let newLinkHead = null
  // while (nextNode) {
  //   newLinkHead = { val: nextNode.val, next: newLinkHead }
  //   nextNode = nextNode.next
  // }
  // return newLinkHead
  let pre = null
  let cur = head
  while (cur) {
    const tmp = cur.next
    cur.next = pre

    pre = cur
    cur = tmp
  }
  return pre
};
// @lc code=end

