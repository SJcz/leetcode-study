/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const sortArr= nums.sort((a, b) => a - b)
    const finalArr = []
    for (let i = 0; i < sortArr.length; i++) {
        if (i > 0 && sortArr[i] == sortArr[i - 1]) continue
        const tar = target - nums[i]
        for (let j = i + 1; j < sortArr.length; j++) {
            if (j > i + 1 && sortArr[j] == sortArr[j - 1]) continue
            let left = j + 1
            let right = sortArr.length - 1
            while (left < right) {
                if (sortArr[j] + sortArr[left] + sortArr[right] > tar) {
                    right--
                } else if (sortArr[j] + sortArr[left] + sortArr[right] < tar) {
                    left++
                } else {
                    finalArr.push([sortArr[i], sortArr[j], sortArr[left], sortArr[right]]) 
                    right--
                    while (sortArr[right] == sortArr[right + 1]) {
                        right--
                      }
                    left++
                    while (sortArr[left] == sortArr[left - 1]) {
                        left++
                      }
                }
            }
        }
    } 
    return finalArr
};
// @lc code=end

console.log(fourSum([2,2,2,2], 8))

