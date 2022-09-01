/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = {}
  for (let i = 0; i < magazine.length; i++) {
    map[magazine.charAt(i)] = map[magazine.charAt(i)] || 0
    map[magazine.charAt(i)]++
  }
  for (let i = 0; i < ransomNote.length; i++) {
    map[ransomNote.charAt(i)] = map[ransomNote.charAt(i)] || 0
    map[ransomNote.charAt(i)]--
  }
  for (let key in map) {
    if (map[key] < 0) return false
  }
  return true
};
// @lc code=end

