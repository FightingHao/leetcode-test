/*
 * 使用 ES5 function 模拟队列
 */
function Queue() {
  // 初始化队列
  var items = []

  // 入队列
  this.enqueue = function (elements) {
    items.push(elements)
  }

  // 出队列
  this.dequeue = function () {
    return items.shift()
  }

  // 返回队列第一个元素
  this.front = function () {
    return items[0]
  }

  // 队列是否为空
  this.isEmpty = function () {
    return items.length === 0
  }

  // 清空队列
  this.clear = function () {
    items = []
  }

  // 返回队列长度
  this.size = function () {
    return items.length
  }

  // 打印队列
  this.print = function () {
    console.log(items.toString())
  }
}

module.exports = Queue