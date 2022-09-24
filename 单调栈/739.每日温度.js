/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // class DecreaseQueue {
  //   constructor() {
  //     this.queue = []
  //   }

  //   push(val, index) {
  //     if (this.queue.length == 0 || temperatures[this.queue[this.queue.length - 1]] > val) {
  //       this.queue.push(index)
  //       return
  //     }
  //     while (this.queue.length > 0 && temperatures[this.queue[this.queue.length - 1]] < val) {
  //       const idx = this.queue.pop()
  //       waitIndexs[idx] = index - idx
  //     }
  //     this.queue.push(index)
  //   }
  // }
  // const waitIndexs = new Array(temperatures.length).fill(0)

  // const decreaseQueue = new DecreaseQueue()
  // for (let i = 0; i < temperatures.length; i++) {
  //   decreaseQueue.push(temperatures[i], i)
  // }
  // return waitIndexs

  // 单调栈
  const waitIndexs = new Array(temperatures.length).fill(0)

  const stack = []

  for (let i = 0; i < temperatures.length; i++) {
    if (!stack.length || temperatures[stack[stack.length - 1]] >= temperatures[i]) {
      stack.push(i)
      continue
    }
    while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      const idx = stack.pop()
      waitIndexs[idx] = i - idx
    }
    stack.push(i)
  }
  return waitIndexs
};
// @lc code=end

console.log(dailyTemperatures([30, 40, 50, 60]))

