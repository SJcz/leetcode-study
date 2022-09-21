/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const map = {} // 每个字符最后出现的位置
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    map[String.fromCharCode(i)] = s.lastIndexOf(String.fromCharCode(i))
  }
  let i = 0
  const returnList = []
  while (i < s.length) {
    const lastPos = map[s.charAt(i)]
    let end = lastPos
    for (let j = i + 1; j <= end; j++) {
      if (map[s.charAt(j)] > end) end = map[s.charAt(j)]
    }
    returnList.push(end - i + 1)
    i = end + 1
  }
  return returnList
};
// @lc code=end

console.log(partitionLabels("ababcbacadefegdehijhklij"))
