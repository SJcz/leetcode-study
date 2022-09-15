/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length == 1) return nums[0]
    if (nums.length == 2) return Math.max(nums[0], nums[1])
    const dp1 = new Array(nums.length).fill(0) // 偷第一家
    const dp2 = new Array(nums.length).fill(0)// 不偷第一家

    dp1[0] = nums[0]
    dp1[1] = Math.max(nums[0], nums[1])

    dp2[0] = nums[1]
    dp2[1] = Math.max(nums[1], nums[2])
    for (let i = 2; i < nums.length - 1; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i])
    }
    for (let i = 2; i < nums.length - 1; i++) {
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i + 1])
    }
    // console.log(dp1, dp2)
    return Math.max(dp1[nums.length - 2], dp2[nums.length - 2])
};
// @lc code=end

console.log(rob([1,2,3]))

