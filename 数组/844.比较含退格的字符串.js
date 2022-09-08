/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  function dealStr(str) {
    const arr = str.split('')
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == '#') {
        newArr.pop()
      } else {
        newArr.push(arr[i])
      }
    }
    return newArr.join('')
  }
  return dealStr(s) == dealStr(t)
};
// @lc code=end

