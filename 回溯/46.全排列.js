/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const returnArr = []
    function backtracing(arr, map) {
        if (arr.length == nums.length) {
            returnArr.push([...arr])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (map[nums[i]]) continue
            arr.push(nums[i])
            map[nums[i]] = 1
            backtracing(arr, map)
            arr.pop()
            map[nums[i]] = 0
        }
    }
    backtracing([], {})
    return returnArr
};
// @lc code=end

console.log(permute([1,2,3]))

