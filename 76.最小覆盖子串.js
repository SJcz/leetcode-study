/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let str = ''
  const tarMap = {}
  for (let i = 0; i < t.length; i++) {
    tarMap[t.charAt(i)] = tarMap[t.charAt(i)] || 0
    tarMap[t.charAt(i)]++
  }
  const srcMap = {}
  let j = 0
  for (let i = 0; i < s.length; i++) {
    srcMap[s.charAt(i)] = srcMap[s.charAt(i)] || 0
    srcMap[s.charAt(i)]++
    if (!tarMap[s.charAt(i)]) continue
    while (compareSrcAndTar(srcMap, tarMap)) {
      if (str) {
        str = str.length <= (i - j + 1) ? str : s.substring(j, i + 1)
      } else {
        str = s.substring(j, i + 1)
      }

      if (!tarMap[s.charAt(j)]) {
        while (!tarMap[s.charAt(j)]) {
          srcMap[s.charAt(j)]--
          j++
        }
      } else {
        srcMap[s.charAt(j)]--
        j++
      }
    }
  }

  function compareSrcAndTar(srcMap, tarMap) {
    for (let key in tarMap) {
      if (!srcMap[key] || srcMap[key] < tarMap[key]) return false
    }
    return true
  }
  return str
};
// @lc code=end


console.log(minWindow('ADOBECODEBANC', 'ABC'))
