export default {}

// 相同点
// 1.都可以描述属性或者方法
type womenStar = {
  name: string
  age: number
  perform(): any
}

interface IWStar {
  name: string
  age: number
  perform(): any
}

// 2.都允许扩展
type money = {
  y1: number
}

type money2 = money & {
  y2: number
}

let salary: money2 = {
  y1: 10,
  y2: 20,
}

interface Istar1 {
  name: string
}
interface Istar2 extends Istar1 {
  age: number
}
let starInfo: Istar2 = {
  name: 'th',
  age: 22,
}

// 不同点
// 1.type可以声明基本数据类型，联合类型，数组等等
//   interface只可以声明对象

// 2.type不会进行合并（不能重复）
//   interface会进行合并（两个同名接口自动进行属性的合并）
