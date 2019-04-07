/*
 * 使用 ES5 function 模拟栈
 */
function Stack() {
  // 初始化栈
  let items = []

  // 入栈
  this.push = function (elements) {
    items.push(elements)
  }

  // 出栈
  this.pop = function () {
    return items.pop()
  }

  // 返回栈顶元素
  this.peek = function () {
    return items[items.length - 1]
  }

  // 判断栈是否为空
  this.isEmpty = function () {
    return items.length === 0
  }

  // 清空栈
  this.clear = function () {
    items = []
  }

  // 返回栈元素个数
  this.size = function () {
    return items.length
  }

  // 打印栈元素
  this.print = function () {
    console.log(items.toString())
  }
}

module.exports = Stack