/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  // for (let i = 0; i < gas.length; i++) {
  //   let curVal = 0
  //   let curIndex = i
  //   while (1) {
  //     curVal += gas[curIndex] - cost[curIndex]
  //     if (curVal < 0) break
  //     if (curIndex == gas.length - 1) {
  //       curIndex = 0
  //     } else {
  //       curIndex += 1
  //     }
  //     if (curIndex == i) return i
  //   }
  // }
  // return -1

  // 贪心
  const leave = []
  for (let i = 0; i < gas.length; i++) {
    leave[i] = gas[i] - cost[i]
  }
  let curNum = 0
  let start = 0
  let totalNum = 0
  for (let i = 0; i < leave.length; i++) {
    curNum += leave[i]
    totalNum += leave[i]
    if (curNum < 0) {
      curNum = 0
      start = i + 1
    }
  }
  if (totalNum >= 0) return start
  return -1
};
// @lc code=end

console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]))
