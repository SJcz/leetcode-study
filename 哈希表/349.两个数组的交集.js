/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const map1 = {}
  for (let item of nums1) {
    map1[item] = 1
  }
  const set = new Set()
  for (let item of nums2) {
    if (map1[item]) set.add(item)
  }
  return Array.from(set)
};
// @lc code=end

