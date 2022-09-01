/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // const map = new Map()
  // while (head) {
  //   if (map.has(head)) return head
  //   map.set(head, 1)
  //   head = head.next
  // }
  // return null
  let fast = head
  let slow = head
  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      let start = head
      let y = fast
      while (start !== y) {
        start = start.next
        y = y.next
      }
      return start
    }
  }
  return null
};
// @lc code=end

