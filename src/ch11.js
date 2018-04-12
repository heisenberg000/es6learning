// 声明的变量赋值给对象
let name='tom'
let skill='web'
var obj = {name,skill}
console.log(obj)
// key值构建
let key = 'skill'
var obj1 = {
  [key] : 'web'
}
console.log(obj1.skill)

// Object.is对象进行比较
// ===同值相等 is严格相等
let o1 = {name : 'hhh'}
let o2 = {name : 'hhh'}
console.log(Object.is(o1.name,o2.name));

// assign 合并对象
let a = {a:'123'}
let b = {b:'234'}
let c = {c:'456'}
console.log(Object.assign(a,b,c))
