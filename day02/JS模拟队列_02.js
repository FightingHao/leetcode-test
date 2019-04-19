/*
 * 使用 ES6 WeakMap 模拟队列
 */
const Queue = (function () {
  const items = new WeakMap()
  class Queue {
    // 初始化队列
    constructor() {
      items.set(this, [])
    }

    // 入队列
    enqueue(elements) {
      items.get(this).push(elements)
    }

    // 出队列
    dequeue() {
      return items.get(this).shift()
    }

    // 返回队列第一个元素
    front() {
      return items.get(this)[0]
    }

    // 判断队列是否为空
    isEmpty() {
      return items.get(this).length === 0
    }

    // 清空队列
    clear() {
      items.set(this, [])
    }

    // 返回队列长度
    size() {
      return items.get(this).length
    }

    // 打印队列元素
    print() {
      console.log(items.get(this).toString())
    }
  }

  return Queue
})()

module.exports = Queue