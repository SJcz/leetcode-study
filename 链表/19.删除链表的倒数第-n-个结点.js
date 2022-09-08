/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const newHead = { val: 'head', next: head }
  let fast = newHead
  let slow = newHead
  while (n--) {
    fast = fast.next
  }
  let preNode
  while (fast) {
    fast = fast.next
    preNode = slow
    slow = slow.next
  }
  preNode.next = slow.next
  return newHead.next
};
// @lc code=end

