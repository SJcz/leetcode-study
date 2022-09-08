/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (let i = 0; i < s.length / 2; i++) {
        const tmp = s[s.length - i - 1]
        s[s.length - i - 1] = s[i]
        s[i] = tmp
    }
    return s
};
// @lc code=end

