/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

var MyLinkedList = function () {
  this.head = { val: 'head', next: null }
  this.length = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (this.length < index + 1) return -1
  let nextNode = this.head.next
  let cur = 0
  while (nextNode) {
    if (index == cur) return nextNode.val
    nextNode = nextNode.next
    cur++
  }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.head.next = { val, next: this.head.next }
  this.length++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let preNode = this.head
  while (preNode.next) {
    preNode = preNode.next
  }
  preNode.next = { val, next: null }
  this.length++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index == this.length) return this.addAtTail(val)
  if (index > this.length) return
  if (index < 0) return this.addAtHead(val)
  let preNode = this.head
  let nextNode = this.head.next
  let cur = 0
  while (nextNode) {
    if (index == cur) {
      preNode.next = { val, next: nextNode }
      this.length++
      return
    }
    preNode = nextNode
    nextNode = nextNode.next
    cur++
  }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (this.length < index + 1) return
  let preNode = this.head
  let nextNode = this.head.next
  let cur = 0
  while (nextNode) {
    if (index == cur) {
      preNode.next = nextNode.next
      this.length--
      return
    }
    preNode = nextNode
    nextNode = nextNode.next
    cur++
  }

};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

var obj = new MyLinkedList()
var param_1 = obj.get(0)
obj.addAtHead(1)
obj.addAtTail(3)
obj.addAtIndex(1, 2)
console.log(obj.length)
console.log(obj.get(1))
obj.deleteAtIndex(1)
console.log(obj.length)
console.log(obj.get(1))


