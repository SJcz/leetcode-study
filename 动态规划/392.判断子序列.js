/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // 双指针
    let matchNum = 0
    let s_i = 0
    let t_j = 0
    while(t_j < t.length) {
        if (s.charAt(s_i) == t.charAt(t_j)) {
            matchNum++
            s_i++
        }
        t_j++
    }
    return matchNum == s.length
};
// @lc code=end

console.log(isSubsequence('axc', 'ahbgdc'))

