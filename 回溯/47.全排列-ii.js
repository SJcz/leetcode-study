/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const returnArr = []
    function backtracing(arr, map) {
        if (arr.length == nums.length) {
            returnArr.push([...arr])
            return
        }
        const levelUsed = {} 
        for (let i = 0; i < nums.length; i++) {
            if (map[i]) continue
            if (levelUsed[nums[i]]) continue
            arr.push(nums[i])
            map[i] = 1
            backtracing(arr, map)
            arr.pop()
            map[i] = 0
            levelUsed[nums[i]] = true
        }
    }
    backtracing([], {})
    return returnArr
};
// @lc code=end

console.log(permuteUnique([1,1,2]))

