/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const sArr = Array.from(s)
    const queue = []
    for (let i = 0; i <sArr.length;i++) {
        queue.push(sArr[i])
        if (isMatch(queue[queue.length - 2], queue[queue.length - 1])) {
            queue.pop()
            queue.pop()
        }
    }
    function isMatch(c1, c2) {
        if (c1 == '(' && c2 == ')') return true
        if (c1 == '[' && c2 == ']') return true
        if (c1 == '{' && c2 == '}') return true
    }
    // console.log(queue)
    return queue.length == 0
};
// @lc code=end

console.log(isValid('()[]{}'))

