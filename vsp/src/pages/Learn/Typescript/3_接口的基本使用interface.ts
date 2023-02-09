export default {}

interface IFullName {
  //interface接口的首字母大写
  firstName: string
  lastName: string
}

let goddessName: IFullName = {
  firstName: 't',
  lastName: 'h',
}

console.log(goddessName.firstName)
console.log(goddessName.lastName)

const say = ({ firstName, lastName }: IFullName): void => {
  console.log(`我的名字是：${firstName}_${lastName}`)
}

say(goddessName)

// 总结
// 如果我们要作为变量使用就用const
// 如果我们要作为属性使用就用readonly
