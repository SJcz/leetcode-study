/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  // 回溯
  // const returnArr = []
  // function backtracing(arr, curIndex, total) {
  //   if (curIndex == nums.length) {
  //     if (total == target) {
  //       returnArr.push(arr)
  //     }
  //     return
  //   }


  //   total += nums[curIndex]
  //   arr.push('+')
  //   backtracing(arr, curIndex + 1, total)

  //   arr.pop()
  //   total -= nums[curIndex]

  //   total -= nums[curIndex]
  //   arr.push('-')
  //   backtracing(arr, curIndex + 1, total)

  //   arr.pop()
  //   total += nums[curIndex]
  // }
  // backtracing([], 0, 0)
  // return returnArr.length

  // 动态规划
  const dp = new Array(nums.length)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = {}
  }
  const maxNum = nums.reduce((total, cur) => {
    total += cur
    return total
  })
  const minNum = nums.reduce((total, cur) => {
    total -= cur
    return total
  }, 0)
  for (let i = minNum; i <= maxNum; i++) {
    dp[0][i] = 0
    if (0 + nums[0] == i) dp[0][i]++
    if (0 - nums[0] == i) dp[0][i]++
  }
  console.log(dp)
  for (let i = 1; i < nums.length; i++) {
    for (let j = minNum; j <= maxNum; j++) {
      dp[i][j] = (dp[i - 1][j + nums[i]] || 0) + (dp[i - 1][j - nums[i]] || 0)
    }
  }
  // console.log(dp)
  return dp[nums.length - 1][target] || 0
};
// @lc code=end

console.log(findTargetSumWays([1], 2))