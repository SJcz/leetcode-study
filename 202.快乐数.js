/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let target = n
  const map = {}
  while (target !== 1 && !map[target]) {
    map[target] = calSum(target)
    target = map[target]
  }
  return target == 1
  function calSum(num) {
    const arr = String(num).split('').map(Number)
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] * arr[i]
    }
    return sum
  }
};
// @lc code=end

