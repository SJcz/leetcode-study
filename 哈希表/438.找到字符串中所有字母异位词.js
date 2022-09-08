/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  // if (s.length < p.length) return []
  // const arrindex = []
  // const pl = p.length
  // const pStr = p.split('').sort().toString()
  // let preMatch = false
  // for (let i = 0; i <= s.length - pl; i++) {
  //   if (preMatch) {
  //     if (s.charAt(i - 1) == s.charAt(i + pl - 1)) {
  //       arrindex.push(i)
  //     } else {
  //       preMatch = false
  //     }
  //     continue
  //   }
  //   const strArr = s.substring(i, i + pl).split('')
  //   if (strArr.sort().toString() == pStr) {
  //     arrindex.push(i)
  //     preMatch = true
  //   } else {
  //     preMatch = false
  //   }
  // }
  // return arrindex
  if (s.length < p.length) return []
  const arrP = new Array(26).fill(0)
  const arrS = new Array(26).fill(0)
  const arrIndex = []
  for (let i = 0; i < p.length; i++) {
    arrP[p.charCodeAt(i) - 'a'.charCodeAt()]++
    arrS[s.charCodeAt(i) - 'a'.charCodeAt()]++
  }
  if (arrP.toString() == arrS.toString()) {
    arrIndex.push(0)
  }
  for (let i = 1; i <= s.length - p.length; i++) {
    arrS[s.charCodeAt(i + p.length - 1) - 'a'.charCodeAt()]++
    arrS[s.charCodeAt(i - 1) - 'a'.charCodeAt()]--
    if (arrP.toString() == arrS.toString()) {
      arrIndex.push(i)
    }
  }
  return arrIndex
};
// @lc code=end

console.log(findAnagrams('abab', 'ab'))
