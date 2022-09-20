/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people = people.sort((a, b) => {
        if (a[0] !== b[0]) return b[0] - a[0]
        return a[1] - b[1]
    })
    let returnArr = []
    for (let i = 0; i < people.length; i++) {
        returnArr = returnArr.slice(0, people[i][1]).concat([people[i]], returnArr.slice(people[i][1]))
    }
    return returnArr
};
// @lc code=end

console.log(reconstructQueue([[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]))

