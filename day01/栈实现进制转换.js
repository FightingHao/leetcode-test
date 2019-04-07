const Stack = require('./JS模拟栈_01')

function scale(number) {
  let stack = new Stack(),
    rem,
    binaryStr = ''

  while (number) {
    rem = Math.floor(number % 2)
    stack.push(rem)
    number = Math.floor(number / 2)
  }

  while (!stack.isEmpty()) {
    binaryStr += stack.pop().toString()
  }

  return binaryStr
}

const result = scale(10)
console.log(result)