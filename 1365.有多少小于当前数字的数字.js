/*
 * @lc app=leetcode.cn id=1365 lang=javascript
 *
 * [1365] 有多少小于当前数字的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    // const returnArr = []
    // for (let i = 0; i < nums.length; i++) {
    //     let num = 0
    //     for (let j = 0; j < nums.length; j++) {
    //         if (i !== j && nums[i] > nums[j]) num++
    //     }
    //     returnArr.push(num)
    // }
    // return returnArr
    const newNums = [...nums].sort((a, b) => a - b)
    const map ={}
    for (let i = 0; i < newNums.length; i++) {
        if (newNums[i] === newNums[i - 1]) {
            continue
        }
        map[newNums[i]] = i
    }
    const returnArr = []
    for (let i = 0; i < nums.length; i++) {
        returnArr.push(map[nums[i]])
    }
    return returnArr
};
// @lc code=end

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))

