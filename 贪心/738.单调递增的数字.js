/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  if (n <= 10) return Math.max(n - 1, 0)
  const nArr = String(n).split('').map(Number)

  for (let i = nArr.length - 1; i >= 1; i--) {
    if (nArr[i] < nArr[i - 1]) {
      nArr[i - 1] -= 1
      for (let j = i; j < nArr.length; j++) {
        nArr[j] = 9
      }
    }
  }
  // console.log(nArr)
  return Number(nArr.join(''))
};
// @lc code=end

console.log(monotoneIncreasingDigits(332))

