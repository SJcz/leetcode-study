/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const bigMap = {}
  for (let i = 0; i < strs.length; i++) {
    const newStr = strs[i].split('').sort()
    bigMap[newStr] = bigMap[newStr] || []
    bigMap[newStr].push(i)
  }

  const arr = []
  for (let key in bigMap) {
    arr.push(bigMap[key].map(item => strs[item]))
  }
  return arr


};
// @lc code=end

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

