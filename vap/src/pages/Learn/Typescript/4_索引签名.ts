export default {}

interface Ibeauty {
  [props: string]: string
  // props 可变
}
// 注意点：对象中的键最终都会被转换为字符串
let name: Ibeauty = {
  name1: 'JavaScript',
  name2: 'Java',
  name3: 'GoLang',
}
