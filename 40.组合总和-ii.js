/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const returnArr = []
  candidates = candidates.sort((a, b) => a - b)
  function backtracking(arr, total, startIndex) {
    if (total > target) return
    if (total == target) {
      returnArr.push([...arr])
      return
    }
    for (let i = startIndex; i < candidates.length; i++) {
      if (i > startIndex && candidates[i] == candidates[i - 1]) continue
      arr.push(candidates[i])
      total += candidates[i]
      backtracking(arr, total, i + 1)
      arr.pop()
      total -= candidates[i]
    }
  }
  backtracking([], 0, 0)
  return returnArr
};
// @lc code=end

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))

