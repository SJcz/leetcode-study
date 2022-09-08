/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    
    const arr2 = []
    for (let i = 1; i <= n; i++) {
        arr2.push([])
    }
    let left = 0
    let right = n - 1
    let top = 0
    let bottom = n - 1
    let cur = 1
    const count = n * n
    let flag = 'top'
    while (cur <= count) {
        if (flag == 'top') {
            for (let i = left; i <= right; i++) {
                arr2[top][i] = cur++
            }
            flag = 'right'
            top++
        }
        if (flag == 'right') {
            for (let i = top; i <= bottom; i++) {
                arr2[i][right] = cur++
            }
            flag = 'bottom'
            right--
        }
        if (flag == 'bottom') {
            for (let i = right; i >= left; i--) {
                arr2[bottom][i] = cur++
            }
            flag = 'left'
            bottom--
        }
        if (flag == 'left') {
            for (let i = bottom; i >= top; i--) {
                arr2[i][left] = cur++
            }
            flag = 'top'
            left++
        }
    }
    return arr2
};
// @lc code=end

console.log(generateMatrix(4))

