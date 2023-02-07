export default {}

// interface IPerson {
//   name: string
//   age: number
// }

// let p: IPerson = {
//   name: '于文文',
//   age: 18,
// }

//interface IPerson<T1=String, T2=number> 泛型也可以使用默认值
interface IPerson<T1, T2> {
  name: T1
  age: T2
}

let p: IPerson<string, number> = {
  name: '于文文',
  age: 18,
}
console.log(p)
