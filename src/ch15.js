// proxy 增强函数和对象 预处理 Proxy第一个参数为对象或者方法
let obj = {
  add: function(val){
    return val+100
  },
  name: 'jslearn'
}
console.log(obj.add(100))

let pro = new Proxy({
  add: function(val){
    return val+100
  },
  name: 'jslearn'
},{
  // property可以省略 get set
  get: function(target,key,property){
    console.log(target);
    return target[key]
  },
  // value 要改变的值 receiver 原始值
  set: function(target,key,value,receiver){
    console.log(` setting ${key} = ${value} `)
    // 必须要返回结果
    return target[key] = value
  }
})
console.log(pro.name)
pro.name='js学习'
console.log(pro.name)

// 对于方法的增强，使用apply
let target = function(){
  return 'learn js es6'
}
let handler = {
  apply(target,ctx,args){
    console.log('do apply' + args)
    return Reflect.apply(...arguments)
  }
}
let proxy = new Proxy(target,handler)
console.log(proxy('abc',123));
