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
  const newHead = { val: 'head', next: head }
  let preNode = newHead
  let nextNode = newHead.next
  while (nextNode && nextNode.next) {
    const tmp = nextNode.next.next
    preNode.next = nextNode.next
    nextNode.next.next = nextNode
    nextNode.next = tmp

    preNode = nextNode
    nextNode = tmp
  }
  return newHead.next
};
// @lc code=end

