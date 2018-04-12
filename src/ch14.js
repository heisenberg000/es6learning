// map 与 json对比 map更加高效
let json = {
  name : 'jslearn',
  skill : 'web'
}
console.log(json.name)

let map = new Map()
map.set(json,'iam')
console.log(map)

map.set('jslearn',json)
console.log(map);

// map增删查
console.log(map.get('jslearn'));
console.log(map.delete(json))
console.log(map.size);
console.log(map.has('jslearn'))
