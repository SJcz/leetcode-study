/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // if (needle == '') return 0
  // if (needle.length > haystack.length) return -1
  // let top = 0
  // let topStart = 0
  // let bottom = 0
  // while (top <= haystack.length - 1 && bottom <= needle.length - 1) {
  //   if (haystack.charAt(top) == needle.charAt(bottom)) {
  //     top++
  //     bottom++
  //   } else {
  //     topStart++
  //     bottom = 0
  //     top = topStart
  //   }
  // }
  // if (bottom == needle.length) return top - needle.length
  // return -1

  // KMP

  function strMap(str) {

  }
};
// @lc code=end

console.log(strStr('hello', 'll'))

function getNext(str) {
  let i = 1
  let j = 0
  const next = [0, 0]
  while (i < str.length) {
    if (j == -1 || str.charAt(i) == str.charAt(j)) {
      i++
      j++
      next[i] = j
    } else {
      if (j == 0) {
        j = -1
      } else {
        j = next[j]
      }
    }
  }
  return next
}

console.log(getNext('aaaaaaaab'))

