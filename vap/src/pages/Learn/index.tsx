import React from 'react'
import { COUNT } from '../../store'
import { useRecoilValue } from 'recoil'
import { mainModule } from 'process'

const Learn: React.FC<any> = () => {
  const count = useRecoilValue(COUNT)
  // let arr1 = [3, 1, 2, 5, 21]
  // let arr2 = [7, 8, 9]
  // let arr3 = ['a', 'b', 'c']
  // let str = 'absdbasd'
  // let obj1 = { a: 'html', b: 'css', c: 'javascript' }
  // let obj2 = [
  //   { a: 'a', b: 'b' },
  //   { c: 'c', d: 'd' },
  //   { e: 'e', f: 'f' },
  // ]

  // console.log(str.replace('a', 'b'))

  // let newArr = arr1.reduce((a, b) => a + b)  reduce累加器 32
  // console.log(arr1.includes(3)) true
  // console.log(Object.entries(obj))
  // for (let i in obj2) {
  //   console.log(obj2[i])
  // }
  // for (let i in obj1) {
  //   console.log(i)
  // }
  // for (let i of arr3) {
  //   console.log(i)
  // } for of 不能遍历普通对象
  // let newarr = obj2.map((item, index, arr) => {
  //   item.b = 'abc'
  //   return item
  // })
  // console.log(newarr)      map有返回值
  // obj2.forEach((item, index, arr) => {
  //   item.a = 'abc'
  // })
  // console.log(obj2)        forEach没有返回值

  return <div>{count}</div>
}

export default Learn
