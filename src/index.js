// 解构
let[a,[b,c],d]=[0,[1,2],3]
console.log(a + "," + b + "," +c +"," +d)
// 解构默认值 undefined相当于空值 null值不会取默认值，仍然显示null
let[foo="bar",baz]=[undefined,"doo"];
console.log(foo + "," + baz)
// 对象解构
let {name,age} = {name:"张三",age:12}
console.log(name+age)
// 已经初始化的对象解构
let fee
({fee} = {fee : "hahaha"})
console.log(fee)
// 字符串解构
const [e,f,g]='JsMint'
console.log(e)
console.log(f)
console.log(g)