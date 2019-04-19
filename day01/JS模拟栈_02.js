/*
 * 使用 ES6 class 模拟栈
 */
const Stack = (function () {
  const _items = Symbol('items')
  class Stack {
    // 初始化栈
    constructor() {
      this[_items] = []
    }

    // 入栈
    push(elements) {
      this[_items].push(elements)
    }

    // 出栈
    pop() {
      return this[_items].pop()
    }

    // 返回栈顶元素
    peek() {
      return this[_items][this[_items].length - 1]
    }

    // 判断栈是否为空
    isEmpty() {
      return this[_items].length === 0
    }

    // 清空栈
    clear() {
      this[_items] = []
    }

    // 返回栈元素个数
    size() {
      return this[_items].length
    }

    // 打印栈元素
    print() {
      console.log(this[_items].toString())
    }
  }

  return Stack
})()

module.exports = Stack