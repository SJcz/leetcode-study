/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const sArr = Array.from(s)
    const stack = []
    for (let i = 0; i <sArr.length; i++) {
        if (stack.length > 0 && stack[stack.length - 1] == sArr[i]) {
            stack.pop()
        } else {
            stack.push(sArr[i])
        }
    }
    return stack.join('')
};
// @lc code=end

console.log(removeDuplicates('abbaca'))

