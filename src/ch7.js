// json数组格式
let json = {
  '0' : 'foo',
  '1' : 'bar',
  '2' : '测试数据',
  length : 3
}
let arr = Array.from(json)
console.log(arr)

// 转换text为数组
let arr1 = Array.of(1,2,3,4)
console.log(arr1)

// find方法
let arr2 = [1,2,3,4,5,6,7,8,9]
console.log(arr2.find(function(value,index,arr){
  return value > 5
}))

// fill方法
arr2.fill('jslearn',2,5)
console.log(arr2)

// for方法
for(let index of arr2.keys()){
  document.write(index + '<br>')
}
for(let val of arr2){
  document.write(val + '<br>')
}
for(let [index,val] of arr2.entries()){
  document.write(index + ',' + val + '<br>')
}

let list = arr2.entries()
console.log(list.next().value) // 输出[0,1] 数组
console.log(list.next().value)
console.log(list.next().value)
