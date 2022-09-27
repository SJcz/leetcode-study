/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  const newHead = { next: head }
  let preNode = newHead
  let node1 = preNode.next
  let node2 = node1 && node1.next
  while (node1 && node2) {
    let tmp = node2.next
    preNode.next = node2
    node2.next = node1
    node1.next = tmp

    preNode = node1
    node1 = tmp
    node2 = node1 && node1.next
  }
  return newHead.next
};
// @lc code=end

