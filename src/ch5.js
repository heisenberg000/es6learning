// 字符串模板
let name = 'tom'
let blog = `非常高兴认识你${name}<br>希望你能过的比我好`
document.write(blog)

let a=1,b=2
let result=`${a+b}`
console.log(result)

// 字符串查找
let search = '很高兴认识你tom'
document.write('<br>')
document.write(search.includes(name))
document.write(search.startsWith(name))
document.write(search.endsWith(name))

// 字符串复制
document.write('<br>')
document.write(name.repeat(10))