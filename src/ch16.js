// promise
let state = 1
function step1(resolve,reject){
  if(state === 1){
    resolve({a:'123',b:'234'})
  }else{
    reject('第一步失败操作')
  }
}

function step2(resolve,reject){
  if(state === 0){
    resolve('第二步成功操作')
  }else{
    reject('第二步失败操作')
  }
}

function step3(resolve,reject){
  if(state === 0){
    resolve('第三步成功操作')
  }else{
    reject('第三步失败操作')
  }
}

// val 是resolve函数的返回值
new Promise(step1).then(function(val){
  console.log(val)
  return new Promise(step2)
}).then(function(val){
  console.log(val)
  return new Promise(step3)
}).then(function(val){
  console.log(val)
}).catch(function(error){
  console.log(error) // 在step2已经出现错误，不会执行step3的promise
})
