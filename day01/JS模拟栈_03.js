/*
 * 使用 ES6 WeakMap 模拟栈
 */
const items = new WeakMap()
class Stack {
  // 初始化栈
  constructor() {
    items.set(this, [])
  }

  // 入栈
  push(elements) {
    items.get(this).push(elements)
  }

  // 出栈
  pop() {
    return items.get(this).pop()
  }

  // 返回栈顶元素
  peek() {
    return items.get(this)[items.get(this).length - 1]
  }

  // 判断栈是否为空
  isEmpty() {
    return items.get(this).length === 0
  }

  // 清空栈
  clear() {
    items.get(this) = []
  }

  // 返回栈元素个数
  size() {
    return items.get(this).length
  }

  // 打印栈元素
  print() {
    console.log(items.get(this).toString())
  }
}

module.exports = Stack