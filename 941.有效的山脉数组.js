/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) return false

    let i = 1
    for (; i < arr.length - 1; i++) {
       if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) break
    }
    if (i == arr.length - 1) return false
    for (let j = 1; j <= i; j++) {
        if (arr[j] <= arr[j - 1]) return false
    }
    for (let j = i; j < arr.length -1; j++) {
        if (arr[j] <= arr[j + 1]) return false
    }
    return true
};
// @lc code=end

console.log(validMountainArray([0,3,2,1]))

