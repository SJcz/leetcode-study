/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  // 01 背包
  const totalNum = nums.reduce((total, cur) => {
    total += cur
    return total
  }, 0)
  if (totalNum % 2 !== 0) return false;
  const dp = []
  for (let i = 0; i <= totalNum / 2; i++) {
    dp[i] = nums[0] > i ? 0 : nums[0]
  }
  // console.log(dp)
  for (let i = 1; i < nums.length; i++) {
    for (let j = totalNum / 2; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
    }
  }

  return dp[totalNum / 2] == totalNum / 2
};
// @lc code=end

console.log(canPartition([1, 2, 3, 5]))

