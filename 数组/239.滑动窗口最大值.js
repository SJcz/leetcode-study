/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    class Deque {
        constructor() {
            this.queue = []
        }

        push(value) {
            while(this.queue.length > 0 && this.queue[this.queue.length - 1] < value) {
                this.queue.pop()
            }
            this.queue.push(value)
        }

        pop(value) {
            if (this.queue.length > 0 && this.queue[0] == value) {
                this.queue.shift()
            }
        }

        front() {
            return this.queue[0]
        }
    } 
    const deque = new Deque()
    const arr = []
    for (let i = 0; i < k; i++) {
        deque.push(nums[i])
    }
    for (let i = 0; i < nums.length - k + 1; i++) {
        arr.push(deque.front())
        
        deque.pop(nums[i])
        deque.push(nums[i + k])
    }
    return arr

    function calMax(i, j) {
        let max = nums[i]
        for (let k = i; k <=j; k++) {
            max = max > nums[k] ? max : nums[k]
        }
        return max
    }

    
};
// @lc code=end

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))
