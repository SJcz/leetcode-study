/*
 * @lc app=leetcode.cn id=332 lang=javascript
 *
 * [332] 重新安排行程
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let returnArr = []
    const fromTime = {} // 每个城市出发的次数
    for (let t of tickets) {
        fromTime[t[0]] = fromTime[t[0]] || 0
        fromTime[t[0]]++
    }
    function backtracing(arr, ticketNum, hasUsedTickey) {
        if (ticketNum == tickets.length) {
            if (!returnArr.length) {
                returnArr.push([...arr])
            } else {
                returnArr[0] = compareStrArr(returnArr[0], arr)
            }
            return true
        }
        let matchIndexs= []
        for (let i = 0; i < tickets.length; i++) {
            if (hasUsedTickey[i]) continue
            if ((arr.length == 0 && tickets[i][0] == 'JFK') || (arr.length > 0 && arr[arr.length -1][1] == tickets[i][0])) {
                matchIndexs.push(i)
            } 
        }
        if (matchIndexs.length > 1) matchIndexs.sort((a, b) => tickets[a][1] > tickets[b][1] ? 1 : -1) 
       
        for (let index of matchIndexs) {
            arr.push(tickets[index])
            hasUsedTickey[index] = 1
            if (backtracing(arr, ticketNum + 1, hasUsedTickey)) return true
            hasUsedTickey[index] = 0
            arr.pop()
        }
    }

    function compareStrArr(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            if (!arr2[i]) return [...arr2]
            if (arr1[i][1] < arr2[i][1]) return arr1
            if (arr1[i][1] > arr2[i][1]) return [...arr2]
        }
        return arr1
    }
    backtracing([], 0, {})
    let strArr = []
    for (let i = 0; i < returnArr[0].length; i++) {
        if (i == 0) {
            strArr.push(returnArr[0][i][0])
            strArr.push(returnArr[0][i][1])
        } else {
            strArr.push(returnArr[0][i][1])
        }
    }
    return strArr
    // let result = ['JFK']
    // let map = {}

    // for (const tickt of tickets) {
    //     const [from, to] = tickt
    //     if (!map[from]) {
    //         map[from] = []
    //     }
    //     map[from].push(to)
    // }

    // for (const city in map) {
    //     // 对到达城市列表排序
    //     map[city].sort()
    // }
    // function backtracing() {
    //     if (result.length === tickets.length + 1) {
    //         return true
    //     }
    //     if (!map[result[result.length - 1]] || !map[result[result.length - 1]].length) {
    //         return false
    //     }
    //     for(let i = 0 ; i <  map[result[result.length - 1]].length; i++) {
    //         let city = map[result[result.length - 1]][i]
    //         // 删除已走过航线，防止死循环
    //         map[result[result.length - 1]].splice(i, 1)
    //         result.push(city)
    //         if (backtracing()) {
    //             return true
    //         }
    //         backtracing()
    //         result.pop()
    //         map[result[result.length - 1]].splice(i, 0, city)
    //     }
    // }
    // backtracing()
    // console.log(result.length)
    // return result
};
// @lc code=end

const arrr = [["AXA","EZE"],["EZE","AUA"],["ADL","JFK"],["ADL","TIA"],["AUA","AXA"],["EZE","TIA"],["EZE","TIA"],["AXA","EZE"],["EZE","ADL"],["ANU","EZE"],["TIA","EZE"],["JFK","ADL"],["AUA","JFK"],["JFK","EZE"],["EZE","ANU"],["ADL","AUA"],["ANU","AXA"],["AXA","ADL"],["AUA","JFK"],["EZE","ADL"],["ANU","TIA"],["AUA","JFK"],["TIA","JFK"],["EZE","AUA"],["AXA","EZE"],["AUA","ANU"],["ADL","AXA"],["EZE","ADL"],["AUA","ANU"],["AXA","EZE"],["TIA","AUA"],["AXA","EZE"],["AUA","SYD"],["ADL","JFK"],["EZE","AUA"],["ADL","ANU"],["AUA","TIA"],["ADL","EZE"],["TIA","JFK"],["AXA","ANU"],["JFK","AXA"],["JFK","ADL"],["ADL","EZE"],["AXA","TIA"],["JFK","AUA"],["ADL","EZE"],["JFK","ADL"],["ADL","AXA"],["TIA","AUA"],["AXA","JFK"],["ADL","AUA"],["TIA","JFK"],["JFK","ADL"],["JFK","ADL"],["ANU","AXA"],["TIA","AXA"],["EZE","JFK"],["EZE","AXA"],["ADL","TIA"],["JFK","AUA"],["TIA","EZE"],["EZE","ADL"],["JFK","ANU"],["TIA","AUA"],["EZE","ADL"],["ADL","JFK"],["ANU","AXA"],["AUA","AXA"],["ANU","EZE"],["ADL","AXA"],["ANU","AXA"],["TIA","ADL"],["JFK","ADL"],["JFK","TIA"],["AUA","ADL"],["AUA","TIA"],["TIA","JFK"],["EZE","JFK"],["AUA","ADL"],["ADL","AUA"],["EZE","ANU"],["ADL","ANU"],["AUA","AXA"],["AXA","TIA"],["AXA","TIA"],["ADL","AXA"],["EZE","AXA"],["AXA","JFK"],["JFK","AUA"],["ANU","ADL"],["AXA","TIA"],["ANU","AUA"],["JFK","EZE"],["AXA","ADL"],["TIA","EZE"],["JFK","AXA"],["AXA","ADL"],["EZE","AUA"],["AXA","ANU"],["ADL","EZE"],["AUA","EZE"]]

console.log(32, arrr[32])
console.log(91, arrr[91])
console.log(97, arrr[97])
console.log(findItinerary(arrr))

console.log()