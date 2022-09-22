/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals = intervals.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0]
    return a[1] - b[1]
  })
  // 贪心: 求最多的区域, 每个区域至少有一个区间
  let range = intervals[0]
  let region = 1
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][1] <= range[1]) {
      range[1] = intervals[i][1]
    }
    if (intervals[i][0] >= range[1]) {
      region++
      range = intervals[i]
    }
  }
  return intervals.length - region
};
// @lc code=end


console.log(eraseOverlapIntervals([[1, 2], [2, 3]]))
