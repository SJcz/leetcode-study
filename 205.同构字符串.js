/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map1 = {}
    const map2 = {}
    for (let i = 0; i < s.length; i++) {
        const src = s.charAt(i)
        const tar = t.charAt(i)
        if (map1[src] && map1[src] !== tar) return false
        if (map2[tar] && map2[tar] !== src) return false
        map1[src] = tar
        map2[tar] = src
    }
    return true
};
// @lc code=end

