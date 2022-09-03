/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function() {
    this.queue1 = []
    this.fqueue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    while (this.queue1.length > 0) {
        this.fqueue.push(this.queue1.shift())
    }
    this.queue1.push(x)
    while (this.fqueue.length > 0) {
        this.queue1.push(this.fqueue.shift())
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue1[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue1.length == 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

