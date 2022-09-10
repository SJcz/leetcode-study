/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return []
    const map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }
    const returnArr = []
    function backtracing(originStr, charSort, path) {
        if (charSort > originStr.length) {
            returnArr.push(path)
            return
        }
        for (let char of map[originStr.charAt(charSort - 1)]) {
            path += char
            // console.log(charSort, path, originStr)
            backtracing(originStr, charSort + 1, path)
            path = path.substring(0, path.length - 1)
        }
    }
    backtracing(digits, 1, '')
    return returnArr
};
// @lc code=end

console.log(letterCombinations('23'))
