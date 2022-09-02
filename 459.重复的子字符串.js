/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length == 1) return false
  for (let i = 0; i < s.length / 2; i++) {
    let j = i + 1
    let tMatch = true
    for (; j < s.length;) {
      let start = 0
      let match = true
      while (start <= i) {
        if (s.charAt(start) == s.charAt(j)) {
          start++
          j++
        } else {
          match = false
          tMatch = false
          break
        }
      }
      if (!match) break
    }
    // console.log(i, j)
    if (tMatch) return true
  }
  return false
};
// @lc code=end

console.log(repeatedSubstringPattern('ababababa'))
