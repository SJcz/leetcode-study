/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function() {
    this.stack1 = []
    this.stack2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let el = this.stack1.pop()
    while(el || el == 0) {
        this.stack2.push(el)
        el = this.stack1.pop()
    }
    const returnVal = this.stack2.pop()
    el = this.stack2.pop()
    while(el || el == 0) {
        this.stack1.push(el)
        el = this.stack2.pop()
    }
    return returnVal
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    let el = this.stack1.pop()
    while(el || el == 0) {
        this.stack2.push(el)
        el = this.stack1.pop()
    }
    const returnVal = this.stack2.pop()
    this.stack1.push(returnVal)
    el = this.stack2.pop()
    while(el || el == 0) {
        this.stack1.push(el)
        el = this.stack2.pop()
    }
    return returnVal
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length == 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

