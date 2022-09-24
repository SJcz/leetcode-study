/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 单调栈
  //   const deQueue = [0]
  //   let water = 0
  //   for (let i = 1; i < height.length; i++) {
  //     if (height[deQueue[deQueue.length - 1]] >= height[i]) {
  //       deQueue.push(i)
  //       continue
  //     }
  //     if (deQueue.length > 0 && height[deQueue[deQueue.length - 1]] < height[i]) {
  //       const min = Math.min(height[deQueue[0]], height[i])
  //       for (let k = deQueue[0] + 1; k < i; k++) {
  //         if (height[k] >= min) continue
  //         water += min - height[k]
  //         height[k] = min
  //       }
  //       if (height[i] >= height[deQueue[0]]) deQueue[0] = i
  //     }
  //   }
  //   return water
  // };

  // 每一列求雨水高度（左右两边最高的格子取较小值, 减去本格的高度）
  let water = 0
  for (let i = 1; i < height.length - 1; i++) {
    const leftMin = Math.max(...height.slice(0, i))
    const rightMin = Math.max(...height.slice(i + 1))
    // console.log(i, leftMin, rightMin)
    const min = Math.min(leftMin, rightMin)
    if (min > height[i]) water += min - height[i]
  }
  return water
}
// @lc code=end

console.log(trap([4, 2, 0, 3, 2, 5]))

