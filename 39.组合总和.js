/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const returnArr = []
  function backtracking(arr, total, startIndex) {
    if (total > target) return
    if (total == target) {
      returnArr.push([...arr])
      return
    }
    for (let i = startIndex; i < candidates.length; i++) {
      arr.push(candidates[i])
      total += candidates[i]
      backtracking(arr, total, i)
      arr.pop()
      total -= candidates[i]
    }
  }
  backtracking([], 0, 0)
  return returnArr
};
// @lc code=end

