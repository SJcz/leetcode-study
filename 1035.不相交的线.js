/*
 * @lc app=leetcode.cn id=1035 lang=javascript
 *
 * [1035] 不相交的线
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
     const dp = new Array(nums1.length + 1) // A 0~i-1 和 B 0~j-1 的最大连线
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(nums2.length + 1).fill(0)
    }
    for (let i = 1; i <= nums1.length; i++) {
        for (let j = 1; j <= nums2.length; j++) {
            if (nums1[i - 1] == nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i -1][j], dp[i][j - 1])
            }
        }
    }
    return dp[nums1.length][nums2.length]
};
// @lc code=end

console.log(maxUncrossedLines([2,5,1,2,5], [10,5,2,1,5,2]))

