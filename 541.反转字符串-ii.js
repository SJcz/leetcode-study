/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if (k == 1) return s
    let left = 0
    let right = k - 1
    const sArr = s.split('')
    while(left < sArr.length) {
        let orgLeft = left
        while(right >= sArr.length) right--
        while (left < right) {
            const tmp = sArr[left]
            sArr[left] = sArr[right]
            sArr[right] = tmp
            left++
            right--
        }
        left = orgLeft + 2 * k
        right = left + k - 1 
    }
    return sArr.join('')
};
// @lc code=end

console.log(reverseStr('abcdefg', 1))

