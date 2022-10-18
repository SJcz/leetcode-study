/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const darrs = [
        [1]
    ]
    for (let i = 1; i < numRows; i++) {
        darrs[i] = []
        for (let j = 0; j <= darrs[i - 1].length; j++) {
            darrs[i][j] = (darrs[i - 1][j] || 0)+ (darrs[i - 1][j - 1] || 0)

        }
    }

    return darrs
};
// @lc code=end


console.log(generate(7))

