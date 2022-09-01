/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map1 = {}
  for (let item of nums1) {
    map1[item] = map1[item] || 0
    map1[item]++
  }
  const arr = []
  for (let item of nums2) {
    if (map1[item]) {
      arr.push(item)
      map1[item]--
    }
  }
  return arr
};
// @lc code=end

