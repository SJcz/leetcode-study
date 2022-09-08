/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const sArr = s.trim().split(/\s+/)
    let str = ''
    for (let i = 0; i < sArr.length; i++) {
        str +=sArr[sArr.length - i - 1] + ' '
    } 
    return str.trim()
};
// @lc code=end

console.log(reverseWords('  hello world  '))

