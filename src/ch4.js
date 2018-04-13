// 扩展运算符 对象扩展运算符
function funA(...arg){
    for(let i=0;i<arg.length;i++){
        console.log(arg[i])
    }
}

funA(1,2,3)

let arr1=['www',123,'com']
let arr2=[...arr1]
console.log(arr2)
arr2.push('hahaha')
console.log(arr2)
console.log(arr1)

// rest运算符
function funB(first,...arg){
    console.log(arg.length)
    for(let i of arg){
        console.log(i)
    }
}
funB(0,1,2,3,4,5,6,7)