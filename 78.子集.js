/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const returnArr = []
    function backtracing(arr, startIndex) {
        // if (startIndex == nums.length) {
        //     returnArr.push([...arr])
        //     return
        // }
        // if (arr.length > 0) {
            
        // }
        returnArr.push([...arr])
        
        for (let i = startIndex; i < nums.length; i++) {
            arr.push(nums[i])
            backtracing(arr, i + 1)
            arr.pop()
        }
    }
    backtracing([], 0)
    returnArr.push([])
    return returnArr
};
// @lc code=end

console.log(subsets([1,2,3, 4]))
