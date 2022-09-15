/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp = new Array(nums.length).fill(0)
    dp[0] = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (i == 1) {
            dp[i] = Math.max(dp[i - 1], nums[i])
        }
        if (i >= 2) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
        }
        
    }
    return dp[nums.length - 1]
};
// @lc code=end

console.log(rob([1,2]))

