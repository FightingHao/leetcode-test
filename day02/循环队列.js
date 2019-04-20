/*
 * 优先队列
 */
function PriorityQueue() {
  // 初始化队列
  var items = []

  // 创建优先队列元素类
  function QueueElements(elements, priority) {
    this.elements = elements
    this.priority = priority
  }

  // 根据优先级入队列 最小优先队列
  this.enqueue = function (elements, priority) {
    var queueElements = new QueueElements(elements, priority)
    var added = false
    for (var i = 0; i < items.length; i++) {
      if (queueElements.priority < items[i].priority) {
        items.splice(i, 0, queueElements)
        added = true
        break
      }
    }
    if (!added) {
      items.push(queueElements)
    }
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
    console.log('[')
    for (var i = 0; i < items.length; i++) {
      console.log(`{item: ${items[i].elements}, priority: ${items[i].priority}},`)
    }
    console.log(']')
  }
}

var que = new PriorityQueue()
que.enqueue(2, 2)
que.enqueue(3, 1)
que.print()

module.exports = PriorityQueue
