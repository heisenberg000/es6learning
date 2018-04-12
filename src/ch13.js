// set声明 不允许重复值
let setArr = new Set(['foo','bar','baz'])
console.log(setArr);
// set追加数据
setArr.add('web')
// 查找
console.log(setArr.has('web'))
// 删除单个
setArr.delete('web')
// 删除全部
//setArr.clear()
// 输出
for(let item of setArr){
  console.log(item)
}
setArr.forEach((value)=>console.log(value))
// size属性
console.log(setArr.size)

// weakset 放对象
let weakObj = new WeakSet()
let o1 = {a:'jslearn',b:'js学习'}
weakObj.add(o1)
console.log(weakObj);
