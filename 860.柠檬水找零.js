/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    // 暴力
    const ownMoney = {
        5: 0,
        10: 0,
        20: 0
    }
    for (let i = 0; i < bills.length; i++) {
        const needReturn = bills[i] - 5
        if (needReturn == 0) {
            ownMoney['5']++
        }
        if (needReturn == 5) {
            if (ownMoney['5'] <= 0) return false
            ownMoney['5']--
            ownMoney['10']++
        }
        if (needReturn == 15) {
            if (ownMoney['10'] > 0) {
                ownMoney['10']--
                if (ownMoney['5'] <= 0) return false
                ownMoney['5']--
            } else {
                if (ownMoney['5'] < 3) return false
                ownMoney['5'] -= 3
            }
            ownMoney['20']++
        }
    }
    return true
};
// @lc code=end



console.log(lemonadeChange([5,5,10,10,20]))