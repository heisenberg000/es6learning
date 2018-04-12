// 对象的函数解构
let json = {
  a:'first',
  //b:'second'
}
function fun1({a,b='hahaha'}){
  console.log(a,b)
}
fun1(json)
// 数组的函数解构
let arr = ['666','777','888']
function fun(a,b,c){
  console.log(a,b,c)
}
fun(...arr)
// in
let obj = {
  a: '123',
  b: '234'
}
console.log('a' in obj)

let arr2 = ['a',,,,]
console.log(0 in arr2)
// foreach
let arr3 = [1,3,3,4,5,6,7,8,8]
arr3.forEach((val,index)=>console.log(index,val))
// filter遍历
arr3.filter(x=>console.log(x))
// some
arr3.some(x=>console.log(x))
// map 替换
console.log(arr3.map(x=>'web'))
// join 数组转换成字符串
console.log(arr.join('|'))
console.log(arr.toString())
