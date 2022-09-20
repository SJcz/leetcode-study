/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  // 动规1
  // const dp = new Array(s.length).fill(0) // 0 -i 范围内回文串的数量
  // dp[0] = 1
  // for (let i = 1; i < s.length; i++) {
  //   dp[i] += dp[i - 1]
  //   for (let k = 0; k <= i; k++) {
  //     if (match(k, i)) dp[i]++
  //   }
  // }
  // return dp[s.length - 1]

  // function match(start, end) {
  //   const mid = Math.floor((start + end) / 2)
  //   for (let i = start; i <= mid; i++) {
  //     if (s.charAt(i) !== s.charAt(start + end - i)) return false
  //   }
  //   return true
  // }

  // 动态规划2
  const dp = new Array(s.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(s.length).fill(false)
    dp[i][i] = true
  }
  let result = 0
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = s.length - 1; j >= i; j--) {
      if (j == i) {
        dp[i][j] = true
      } else if (j - i == 1) {
        dp[i][j] = s.charAt(i) == s.charAt(j)
      } else {
        dp[i][j] = dp[i + 1][j - 1] && (s.charAt(i) == s.charAt(j))
      }
      if (dp[i][j]) result++
    }
  }
  // console.log(dp)
  return result
};
// @lc code=end

console.log(countSubstrings('aaaaa'))

