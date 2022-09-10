/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const returnArr = []
    nums = nums.sort((a, b) => a - b)
    function backtracing(startIndex, arr) {
        returnArr.push([...arr])
        for(let i = startIndex; i < nums.length; i++) {
            arr.push(nums[i])
            backtracing(i + 1, arr)
            arr.pop()
            while( (i + 1 < nums.length) && nums[i] == nums[i + 1]) {
                i = i + 1
            }
        }
    }
    backtracing(0, [])
    return returnArr
};
// @lc code=end

console.log(subsetsWithDup([1,1,2,2]))

