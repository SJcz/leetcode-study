/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    const returnArr = []
   
    function backtracing(arr, startIndex) {
        if (arr.length >= 2) {
            returnArr.push([...arr])
        }
        const used = {}
        for (let i = startIndex; i < nums.length; i++) {
            // if (i > startIndex && nums[i - 1] == nums[i]) continue
            if (used[nums[i]]) continue
            if (arr.length == 0 || nums[i] >= arr[arr.length - 1]) {
                arr.push(nums[i])
                backtracing(arr, i + 1)
                arr.pop()
            }
            used[nums[i]] = true
        }
    }
    backtracing([], 0)
    return returnArr
};
// @lc code=end

console.log(findSubsequences([1,2,1, 1]))

