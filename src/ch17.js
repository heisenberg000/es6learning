// class 的使用
class Coder{
  constructor(a,b){
    this.a = a
    this.b = b
  }
  add(){
    return this.a + this.b
  }
  name(val){
    console.log(val)
    return val
  }
  age(age){
    console.log(this.name('张三') + "今年" + age)
  }
}
// 实例化类
let zs = new Coder(80,90)
zs.name('zhangsan')
zs.age(292)
console.log(zs.add())

// 类的继承
class Htmler extends Coder{
  constructor(a,b,c){
    super(a,b)
    this.c = c;
  }
  add(){
    return this.a + this.b + this.c
  }
}
let p = new Htmler(90,32,12)
p.name('banana')
console.log(p.add())
