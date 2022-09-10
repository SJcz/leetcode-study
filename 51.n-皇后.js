/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const returnArr = []
    function backtracing(attackArr, row, arr) {
        if (arr.length == n) {
            returnArr.push([...arr])
            return 
        }
        for (let col = 0 ; col < n; col++) {
            if (attackArr[row][col]) continue
            changeAttackArr(attackArr, row, col, '+')
            let str = ''
            for (let i = 0; i < n; i++) {
                if (i == col) {
                    str += 'Q'
                } else {
                    str += '.'
                }
            }
            arr.push(str)
            backtracing(attackArr, row + 1, arr)
            changeAttackArr(attackArr, row, col, '-')
            arr.pop()
        }
    } 
    function changeAttackArr(attackArr, row, col, flag) {
        for (let [i, j] of [[1,1], [-1, -1], [1, -1], [-1, 1], [0, 1], [0, -1], [1, 0],[-1, 0]]) {
            let rowC = i
            let columnC = j
            while (row + rowC < n && row + rowC >= 0 && col + columnC < n && col + columnC >= 0) {
                attackArr[row + rowC ][ col + columnC] = attackArr[row + rowC ][ col + columnC] || 0
                if (flag == '+') {
                    attackArr[row + rowC ][ col + columnC]++
                } else {
                    attackArr[row + rowC ][ col + columnC]--
                }
                if (rowC > 0) rowC++
                if (rowC < 0) rowC--
                if (columnC > 0) columnC++
                if (columnC < 0) columnC--
            }
        }
        attackArr[row][col] = attackArr[row][col] || 0
        if (flag == '+') {
            attackArr[row][col]++
        } else {
            attackArr[row][col]--
        }
        
    }
    const attackArr = []
    for (let i = 0; i <n ;i++) {
        attackArr.push([])
    }
    backtracing(attackArr, 0, [])
    return returnArr
};
// @lc code=end



console.log(solveNQueens(4))