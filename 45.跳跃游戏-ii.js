/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length <= 1) return 0
  let end = 0 // 范围结束位置
  let start = 0 // 范围起始位置
  let nextCover = 0 // 下一步可达到的最大范围
  let step = 0 // 跳跃的步数
  while (1) { // 每一步跳跃造成的可以到达的范围变化
    for (let i = start; i <= end; i++) {
      nextCover = Math.max(nextCover, i + nums[i])
    }
    step++
    if (nextCover >= nums.length - 1) return step
    start = end + 1
    end = nextCover
  }
};
// @lc code=end

