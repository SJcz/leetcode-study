/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] || 0
        map[nums[i]]++
    }
    const vMap = {}
    for (let k in map) {
        vMap[map[k]] = vMap[map[k]] || []
        vMap[map[k]].push(Number(k))
    }
    let keyArr = Object.keys(vMap)
    keyArr = keyArr.sort((a, b) => Number(b) - Number(a))

    const returnArr = []
    for (let i = 0; i < k; i++) {
        // console.log(i, keyArr[i])
        returnArr.push(...vMap[keyArr[i]])
        if (returnArr.length >= k) {
            return returnArr.slice(0, k)
        }
    }
};
// @lc code=end

console.log(topKFrequent([1,1,1,2,2,3,3,3,3,3], 2))

