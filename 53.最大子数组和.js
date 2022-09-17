/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const dp = []
    dp[0] = nums[0]
    let max = dp[0]
    for (let i = 1; i < nums.length; i++) {
        if (dp[i - 1] <= 0) {
            dp[i] = nums[i]
        } else {
            dp[i] = dp[i - 1] + nums[i]
        }
        max = Math.max(max, dp[i])
    }
    return max
};
// @lc code=end

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

