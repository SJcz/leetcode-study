/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const strmns = strs.map(str => {
    const m = str.split('').filter(c => c == '0').length
    return [m, str.length - m]
  })
  const dp = new Array(strmns.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = {}
  }
  for (let j = m; j >= 0; j--) {
    for (let k = n; k >= 0; k--) {
      dp[0][`${j}_${k}`] = (strmns[0][0] <= j && strmns[0][1] <= k) ? 1 : 0
    }
  }
  // console.log(dp)

  for (let i = 1; i < strmns.length; i++) {
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        if (strmns[i][0] <= j && strmns[i][1] <= k) {
          dp[i][`${j}_${k}`] = Math.max(dp[i - 1][`${j}_${k}`], 1 + dp[i - 1][`${j - strmns[i][0]}_${k - strmns[i][1]}`])
        } else {
          dp[i][`${j}_${k}`] = dp[i - 1][`${j}_${k}`]
        }
        // if (isNaN(dp[i][`${j}_${k}`])) console.log(i, j, k)
      }
    }
  }
  // console.log(dp)
  return dp[strs.length - 1][`${m}_${n}`] || 0
};
// @lc code=end


console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 3, 4))
