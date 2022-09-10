/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const returnArr = []
    function backtracing(n, startIndex, arr, total) {
        if (arr.length == k && total == n) {
            returnArr.push([...arr])
            return
        }
        if (total > n) return
        for (let i = startIndex; i <= 9; i++) {
            arr.push(i)
            total += i
            backtracing(n, i + 1, arr, total)
            arr.pop(i)
            total -= i
        }
    }
    backtracing(n, 1, [], 0)
    return returnArr
};
// @lc code=end

console.log(combinationSum3(2, 8))