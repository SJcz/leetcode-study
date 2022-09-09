/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const returnArr = []
  function backtracking(charIndex, pointNum, path) {
    if (pointNum == 4) {
      returnArr.push(path)
      return
    }
    if (pointNum == 3) {
      const numStr = s.substring(charIndex)
      if (isValidNum(numStr)) {
        path += '.' + numStr
        backtracking(s.length, pointNum + 1, path)
        path = path.substring(0, path.length - numStr.length - 1)
      }
    } else {
      for (let i = 1; i < s.length - charIndex + 1; i++) {
        const numStr = s.substring(charIndex, charIndex + i)
        if (isValidNum(numStr)) {
          path += '.' + numStr
          backtracking(charIndex + i, pointNum + 1, path)
          path = path.substring(0, path.length - numStr.length - 1)
        } else {
          break
        }
      }
    }

  }
  backtracking(0, 0, '')
  return returnArr.map(item => item.substring(1))

  function isValidNum(str) {
    if (str === '0') return true
    return str.length >= 1 && str.length <= 3 && Number(str) <= 255 && Number(str) >= 0 && str.charAt(0) !== '0'
  }
};
// @lc code=end

console.log(restoreIpAddresses('101023'))

