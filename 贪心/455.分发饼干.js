/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)

  let i = 0
  let j = 0
  let match = 0
  while (i < s.length) {
    if (s[i] >= g[j]) {
      match++
      j++
    }
    i++
  }
  return match
};
// @lc code=end

console.log(findContentChildren([1, 2, 3], [1, 1, 3]))

