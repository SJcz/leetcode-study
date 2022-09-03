/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []
    for (let i = 0; i <tokens.length; i++) {
        console.log(stack)
        if (isChar(tokens[i])) {
            const b = stack.pop()
            const a = stack.pop()
            stack.push(cal(a, b, tokens[i]))
        } else {
            stack.push(tokens[i])
        }
    }
    return stack.pop()

    function isChar(c) {
        return ['+', '-', '*', '/'].includes(c)
    }

    function cal(a, b, char) {
        if (char == '-') return Number(a) - Number(b)
        if (char == '+') return Number(a) + Number(b) 
        if (char == '*') return Number(a) * Number(b)
        if (char == '/') return parseInt(Number(a) / Number(b))
    }
};
// @lc code=end

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))

