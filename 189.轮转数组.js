/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 空间 O(N) 时间 O(N)
  // const newNums = []
  // for (let i = 0; i < nums.length; i++) {
  //   newNums[(i + k) % nums.length] = nums[i]
  // }
  // for (let i = 0; i < newNums.length; i++) {
  //   nums[i] = newNums[i]
  // }
  // return nums

  // 时间 O(N * (K % N)) 空间 O(1)
  for (let t = 1; t <= (k % nums.length); t++) {
    const tmp = nums[nums.length - 1]
    for (let i = nums.length - 1; i >= 0; i--) {
      if (i == 0) {
        nums[i] = tmp
      } else {
        nums[i] = nums[i - 1]
      }
    }
  }
  return nums
};
// @lc code=end

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))

