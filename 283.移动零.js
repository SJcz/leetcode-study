/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // let left = 0
    // let right = 1
    // while (left < right && right < nums.length) {
    //     while (left < nums.length && nums[left] !== 0) {
    //         left++
    //     }
    //     right = left + 1
    //     while (right < nums.length && nums[right] === 0) {
    //         right++
    //     }
    //     if (left < right && right < nums.length) {
    //         nums[left] = nums[right]
    //         nums[right] = 0
    //     }
    // }
    // return nums

    let bottom = 0
    let top = 0
    for (; top < nums.length; top++) {
        if (nums[top] !== 0) {
            nums[bottom] = nums[top]
            bottom++
        }
    }
    for (; bottom < nums.length; bottom++) {
        nums[bottom] = 0
    }
    return nums
};
// @lc code=end

console.log(moveZeroes([0,1,0,3,12]))

