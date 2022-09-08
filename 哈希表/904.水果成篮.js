/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  // let l = 0
  // let r = 0
  // let max = 0
  // const matchMap = {
  //   [fruits[r]]: 1
  // }
  // while (r <= fruits.length - 1) {
  //   matchMap[fruits[r]] = matchMap[fruits[r]] || 0
  //   if (match(matchMap)) {
  //     max = Math.max(max, r - l + 1)
  //     r++
  //     matchMap[fruits[r]] = matchMap[fruits[r]] || 0
  //     matchMap[fruits[r]]++
  //   } else {
  //     matchMap[fruits[l]]--
  //     if (matchMap[fruits[l]] == 0) delete matchMap[fruits[l]]
  //     l++
  //   }
  // }
  // return max
  let l = 0
  let max = 0
  const matchMap = {}
  for (let i = 0; i < fruits.length; i++) { // 扩
    matchMap[fruits[i]] = matchMap[fruits[i]] || 0
    matchMap[fruits[i]]++
    while (!match(matchMap)) { // 缩的条件
      matchMap[fruits[l]]--
      if (matchMap[fruits[l]] == 0) delete matchMap[fruits[l]]
      l++
    }
    max = Math.max(max, i - l + 1)
  }
  return max

  function match(matchMap) {
    return Object.values(matchMap).length <= 2
  }
};
// @lc code=end

console.log(totalFruit([11, 23, 2, 54, 23, 2, 2]))

