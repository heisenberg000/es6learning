// symbol 全局标记
let a = new String
let b = new Number
let c = new Boolean
let d = new Array
let e = new Object
let f = Symbol()
console.log(typeof(f))

let g = Symbol('jslearn')
console.log(g)
console.log(g.toString())

let jslearn = Symbol();
let obj = {
  [jslearn] : 'jslearn'
}
// 不能使用obj.jslearn
console.log(obj[jslearn])
obj[jslearn] = 'web'
console.log(obj[jslearn])
// Symbol保护
let o = {
  name : 'tom',
  skill : 'web',
}
let age = Symbol()
o[age] = 18
console.log(o)
for(let item in o){
  console.log(o[item])
}
