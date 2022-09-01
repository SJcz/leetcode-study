/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const dif = target - nums[i]
    if (map[dif] || map[dif] == 0) return [map[dif], i]
    map[dif] = nums[i]
  }
};
// @lc code=end

console.log(twoSum([2, 7, 11, 15], 9))

