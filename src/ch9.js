// 函数默认值
function add(a,b=1){
  if(a===0){
    throw new Error('A is a number')
  }
  return a+b
}

console.log(add(1));
// 只有一个必须传递的参数
console.log(add.length) // 1

// {}表示代码块 如果要表示对象使用({})
let add1 = (a,b=1) => a+b
console.log(add1(1))
