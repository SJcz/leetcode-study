/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const tg = new Array(ratings.length).fill(1)
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) tg[i] = tg[i - 1] + 1
  }
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) tg[i] = Math.max(tg[i], tg[i + 1] + 1)
  }
  return tg.reduce((total, cur) => {
    total += cur
    return total
  })
};
// @lc code=end

console.log(candy([1, 2, 2]))

