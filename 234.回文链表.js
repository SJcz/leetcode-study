/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let node = head
  const arr = []
  while (node) {
    arr.push(node.val)
    node = node.next
  }
  for (let i = 0; i < (arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - i - 1]) return false
  }
  return true
};
// @lc code=end

