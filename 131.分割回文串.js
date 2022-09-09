/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const returnArr = []
  function backtracking(charIndex, arr) {
    if (charIndex >= s.length) {
      returnArr.push([...arr])
      return
    }
    for (let i = 1; i < s.length - charIndex + 1; i++) {
      const str = s.substring(charIndex, charIndex + i)
      if (ishw(str)) {
        arr.push(str)
        backtracking(charIndex + i, arr)
        arr.pop()
      } else {
        continue
      }
    }
  }
  backtracking(0, [])
  return returnArr

  function ishw(str) {
    if (str.length <= 1) return true
    for (let i = 0; i < str.length / 2; i++) {
      if (str.charAt(i) !== str.charAt(str.length - i - 1)) return false
    }
    return true
  }
};
// @lc code=end

console.log(partition('aabvsadasdawweeasda'))

