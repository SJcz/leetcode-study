/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = {}
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) map[arr[i]] = 0
        map[arr[i]]++
    }

    const count = {}
    for (let key in map) {
        count[map[key]] = count[map[key]] || []
        count[map[key]].push(key)
    }

    for (let key in count) {
        if (count[key].length > 1) return false
    }
    return true
};
// @lc code=end


console.log(uniqueOccurrences([1,2,2,1,1,3]))
