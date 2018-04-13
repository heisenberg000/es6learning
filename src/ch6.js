// 数字操作
// 二进制
let binary = 0B010101
console.log(binary)

// 八进制
let octal=0o666
console.log(octal)

//判断数字 整数和浮点数
console.log(Number.isFinite(11/4))

//是否为整数
console.log(Number.isInteger(123.1))
console.log(Number.isNaN('hahaha'))

let a='9.18'
// 整数和浮点数转换
console.log(Number.parseInt(a))
console.log(Number.parseFloat(a))