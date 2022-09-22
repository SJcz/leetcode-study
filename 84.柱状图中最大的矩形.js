/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let max = 0
  const maxList = []
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] == heights[i - 1]) continue
    let len = 1
    for (let j = i + 1; j < heights.length; j++) {
      if (heights[j] < heights[i]) {
        break
      }
      len++
    }
    for (let j = i - 1; j >= 0; j--) {
      if (heights[j] < heights[i]) {
        break
      }
      len++
    }
    max = Math.max(max, len * heights[i])
    maxList.push(max)
  }
  // console.log(maxList)
  return max
};
// @lc code=end

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
