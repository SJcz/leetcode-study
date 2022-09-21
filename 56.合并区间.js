/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals = intervals.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0]
    return a[1] - b[1]
  })

  const returnRange = []
  let range = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= range[1]) {
      range = [Math.min(intervals[i][0], range[0]), Math.max(intervals[i][1], range[1])]
    } else {
      returnRange.push(range)
      range = intervals[i]
    }
  }
  returnRange.push(range)
  return returnRange
};
// @lc code=end

console.log(merge([[1, 4], [4, 5]]))