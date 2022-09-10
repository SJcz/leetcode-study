/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  // if (k > n) return []
  // if (k == 0) return []

  // const returnArr = []
  // function backtracking(num, arr) {
  //   if (num > n) return
  //   arr.push(num)
  //   if (arr.length == k) {
  //     returnArr.push([...arr])
  //     return
  //   }
  //   for (let i = num + 1; i <= n; i++) {
  //     backtracking(i, arr)
  //     arr.pop(i)
  //   }
  // }
  // for (let i = 1; i <= n - k + 1; i++) {
  //   backtracking(i, [])
  // }

  // return returnArr

  const returnArr = []
  function backtracking(arr, startIndex) {
    if (arr.length == k) {
      returnArr.push([...arr])
      return
    }
    for (let i = startIndex; i <= n; i++) {
      arr.push(i)
      backtracking(arr, i + 1)
      arr.pop()
    }
  }
  backtracking([], 1)
  return returnArr
};
// @lc code=end


console.log(combine(2, 1))
