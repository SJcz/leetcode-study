/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map = {}
  for (let i = 0; i < s.length; i++) {
    map[s.charAt(i)] = map[s.charAt(i)] || 0
    map[s.charAt(i)]++
  }
  for (let i = 0; i < t.length; i++) {
    map[t.charAt(i)] = map[t.charAt(i)] || 0
    map[t.charAt(i)]--
  }
  for (let key in map) {
    if (map[key] !== 0) return false
  }
  return true
};
// @lc code=end

console.log(isAnagram('anagram', 'nagaram'))

