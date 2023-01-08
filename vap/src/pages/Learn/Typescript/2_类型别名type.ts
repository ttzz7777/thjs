export default {}

// 第一种
// type language = 'JavaScript' | 'Java' | 'GoLang'

// let one: language

// // one = 'th'
// one = 'JavaScript'

// 第二种 函数的类型别名
// type myfun = (a: string, b: number) => number

// let func: myfun = (a: string, b: number) => b

// 第三种 最常用
type my = {
  name: string
  age: number
  sex: string
}

let th: my = {
  name: 'th',
  age: 22,
  sex: '男',
}
