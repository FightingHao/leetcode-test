const Stack = require('./JS模拟栈_01')

/*
 * @param1: 待转换数
 * @param2: 进制
 */
function scale(number, base) {
  let stack = new Stack(),
    rem,
    binaryStr = '',
    digits = '0123456789ABCDEF'

  while (number) {
    rem = Math.floor(number % base)
    stack.push(rem)
    number = Math.floor(number / base)
  }

  while (!stack.isEmpty()) {
    binaryStr += digits[stack.pop()]
  }

  return binaryStr
}

const result = scale(10, 2)
console.log(result)