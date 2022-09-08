/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 1
  let right = x
  let returnValue = 0
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (mid * mid > x) {
      right = mid - 1
    } else if (mid * mid < x) {
      returnValue = mid
      left = mid + 1
    } else {
      return mid
    }
  }
  return returnValue
};
// @lc code=end

console.log(mySqrt(0))
console.log(mySqrt(8))
console.log(mySqrt(4))
console.log(mySqrt(16))
console.log(mySqrt(102))

