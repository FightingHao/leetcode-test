function LinkedList() {
  // 链表结构
  let node = function (element) {
    this.element = element
    this.next = null
  }
  // 长度
  let length = 0
  // 链表头
  let head = null

  // 向尾部添加新的一项
  this.append = function (element) { }
  // 向列表特定位置新增一项
  this.insert = function (position, element) { }
  // 移除特定位置的某一项
  this.removeAt = function (position) { }
  // 移除某一项
  this.remove = function (element) { }
  // 返回元素在列表中所在的索引，没有则返回-1
  this.indexOf = function (element) { }
  // 判断链表是否为空
  this.isEmpty = function () { }
  // 返回链表包含元素个数
  this.size = function () { }
  // 获取头结点
  this.getHead = function () { }
  // toString
  this.toString = function () { }
  // 打印
  this.print = function () { }
}