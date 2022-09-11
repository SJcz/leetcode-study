/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const dp = []
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    for (let i = 0; i < m ; i++) {
        dp[i] = []
    }
    let edgeExist = false
    for (let i = 0; i < m ; i++) {
        if (edgeExist || obstacleGrid[i][0] == 1) {
            dp[i][0] = 0
            edgeExist = true
        } else {
            dp[i][0] = 1
        }
    }
    edgeExist = false
    for (let i = 0; i < n ; i++) {
        if (edgeExist || obstacleGrid[0][i] == 1) {
            dp[0][i] = 0
            edgeExist = true
        } else {
            dp[0][i] = 1
        }
    }
    // console.log(dp)
    for (let i = 1; i < m; i++) {
        for(let j = 1; j < n ;j++) {
            dp[i][j] = obstacleGrid[i][j] == 1 ? 0 : (dp[i][j - 1] + dp[i - 1][j] )
        }
    }
    return dp[m - 1][n - 1]
};
// @lc code=end

console.log(uniquePathsWithObstacles([[0,1],[0,0]]))

