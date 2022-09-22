/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points = points.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0]
        return a[1] - b[1]
    })

    let shotRange
    let jianNum = 0 // 贪心: 一只箭可以射最多的气球
    for (let i = 0; i < points.length; i++) {
        // console.log(shotRange, points[i])
        if (!shotRange) {
            shotRange = points[i]
            jianNum++
        }
        shotRange = shot(shotRange, points[i])
        if (!shotRange) {
            shotRange = points[i]
            jianNum++
        }
    }
    return jianNum

    function shot(p1, p2) {
        const range = [Math.max(p1[0], p2[0]), Math.min(p1[1], p2[1])]
        if (range[1] < range[0]) return false
        return range
    }
};
// @lc code=end

console.log(findMinArrowShots([[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]))

