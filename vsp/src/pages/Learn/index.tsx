import React, { useState, useEffect, useRef } from 'react'
import { COUNT } from '../../store'
import { useRecoilValue } from 'recoil'
import { setTimeout } from 'timers/promises'

const Learn: React.FC<any> = () => {
  const count = useRecoilValue(COUNT)

  const [counts, setCounts] = useState(0)

  const addCounts = () => {
    setCounts(counts + 1)
  }
  // 缓存值 useMemo
  // 缓存方法 useCallback
  for (var i in Object) {
    console.log(i)
  }

  // var a = 2
  // const foo = {
  //   bar: function () {
  //     console.log(this.a)
  //   },
  //   bar1: function () {
  //     return function () {
  //       // @ts-ignore
  //       console.log(this.a)
  //     }
  //   },
  //   a: 1,
  // }
  // foo.bar()
  // var bar1 = foo.bar1()
  // bar1()`

  // 手写instanceof
  // 原理：验证当前类的原型prototype是否会出现在实例的原型链proto上，只要在它的原型链上，则结果返回true
  // const myInstanceof = (obj: any, class_name: any) => {
  //   let proto = Object.getPrototypeOf(obj)
  //   let prototype = class_name.prototype
  //   while (true) {
  //     if (proto == null) return false
  //     if (proto == prototype) return true
  //     proto = Object.getPrototypeOf(proto)
  //   }
  // }

  // 实现new方法
  // const myNew = (fn: any, ...args: any) => {
  //   // 基于原型链 创建一个新对象
  //   let newObj = Object.create(fn.prototype)
  //   // 添加属性到新对象上 并获取obj函数的结果
  //   let res = fn.apply(newObj, args)
  //   // 如果执行结构有返回值并是一个对象，返回执行结果，否则，返回新创建的对象
  //   return typeof res === 'object' ? res : newObj
  // }

  //手写深拷贝
  // const deepClone = (data: any) => {
  //   let newData = Array.isArray(data) ? [] : {}
  //   for (let key in data) {
  //     if (data[key] && typeof data[key] === 'object') {
  //       // @ts-ignore
  //       newData[key] = deepClone(data[key])
  //     } else {
  //       // @ts-ignore
  //       newData[key] = data[key]
  //     }
  //   }
  //   return newData
  // }

  // 手写防抖函数
  // const debounce = (func: any, delay: number) => {
  //   let timer: any = null
  //   return function (...args: any[]) {
  //     if (timer) {
  //       clearTimeout(timer)
  //     }
  //     timer = setTimeout(() => {
  //       func.apply(this, ...args)
  //     })
  //   }
  // }

  // 手写节流函数
  // const throttle = (func: any, delay: number) => {
  //   let timer: any = null
  //   return function (...args: any[]) {
  //     if(!timer){
  //       timer = setTimeout(()=>{
  //         func.apply(this,...args)
  //         timer = null
  //       })
  //     }
  //   }
  // }

  // 数组中有一个整数出现的次数超过数组长度的一半，请找出
  // let arr = [1, 1, 1, 1, 1, 5, 7, 5]
  // function MoreThanHalfNum_Solution(numbers: any[]) {
  //   let out = 0
  //   let obj = {}
  //   let len = Math.ceil(numbers.length / 2)
  //   if (numbers.length <= 0) return
  //   numbers.forEach((item: any) => {
  //     //@ts-ignore
  //     !obj[item] ? (obj[item] = 1) : obj[item]++
  //   })
  //   for (let key in obj) {
  //     // @ts-ignore
  //     if (obj[key] >= len) {
  //       // @ts-ignore
  //       out = key
  //     }
  //   }
  //   return out
  // }
  // console.log(MoreThanHalfNum_Solution(arr))

  // 用reduce统计字符串中字母出现的次数
  // (pre:初始值 item:当前的项 index:当前索引 arr:原数组)(初始值)
  // 若没有第二个参数(初始值)则刚开始从index:1开始处理，忽略了index=0
  // 函数执行里要切记要return
  // const str = 'jshdjsihh'
  // const tongJi = (str: String) => {
  //   const b = str.split('').reduce((pre: any, item: any) => {
  //     pre[item] ? pre[item]++ : (pre[item] = 1)
  //     return pre
  //   }, {})
  //   return b
  // }
  // console.log(tongJi(str))

  // 用javascript实现斐波那契数列函数。f(1)=1,f(2)=2 应用：跳台阶
  // function Fibonacci(n: any) {
  //   let memo = []
  //   memo[1] = 1
  //   memo[2] = 2
  //   for (let i = 3; i <= n; i++) {
  //     memo[i] = memo[i - 1] + memo[i - 2]
  //   }
  //   return memo[n]
  // }
  // console.log(Fibonacci(4))

  //解析URL
  // let url =
  //   'https://zhidao.baidu.com/question/1768422895052400180.html?fr=iks&word=slice&ie=gbk'
  // function getUrl(url: any) {
  //   let obj = {}
  //   let a = url.split('?')[1]
  //   let b = a.split('&')
  //   for (let i = 0; i < b.length; i++) {
  //     let key = b[i].split('=')[0]
  //     let value = b[i].split('=')[1]
  //     // @ts-ignore
  //     obj[key] = value
  //   }
  //   return obj
  // }
  // console.log(getUrl(url))

  // 函数柯里化 一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
  // function sum(...arg1: any[]) {
  //   let x = arg1.reduce((now, next) => {
  //     return now + next
  //   })
  //   return function (...arg2: any[]) {
  //     if (arg2.length == 0) {
  //       return x
  //     }
  //     let y = arg2.reduce((now, next) => {
  //       return now + next
  //     })
  //     return sum(x, y)
  //   }
  // }
  // console.log(sum(1)(2)(3, 4)())

  // setTimeout实现setInterval
  // function mySetInterval(fn:any,delay:any){
  //   setTimeout(()=>{
  //     fn.apply(this)
  //     mySetInterval(fn,delay)
  //   },delay)
  // }

  // 清除字符串前后空格
  // let str = '   str   '
  // function clear(str: string) {
  //   return str.replace(/(^\s*)|(\s*$)/g, '')
  // }
  // console.log(clear(str))

  // 驼峰命名
  // 大小写 转 _
  // let a = 'tianJinLiGongDaXue'
  // function change(str: string) {
  //   let tuo = ''
  //   let arr = str.split('')
  //   let newArr = arr.map((item: any) => {
  //     return item.toUpperCase() === item ? '_' + item.toLowerCase() : item
  //   })
  //   tuo = newArr.join('')
  //   return tuo
  // }
  // console.log(change(a))

  // _ 转 大小写
  // let a = 'tian_jin_li_gong_da_xue'
  // const change = (str: string) => {
  //   let feng = ''
  //   let arr = str.split('_')
  //   let newArr = arr.map((item, index) => {
  //     return index === 0 ? item : item[0].toUpperCase() + item.slice(1)
  //   })
  //   feng = newArr.join('')
  //   return feng
  // }
  // console.log(change(a))

  //数组拍平
  // 1
  // split 会将string中按照括号里的内容进行分割并存入一个新数组，返回数组
  // map 会对数组中的所有数据按照函数进行处理后返回一个处理后的数组
  // let res = [1, 2, 3, [4, 5, [6]]]
  // function fllent(res: any[]) {
  //   return res
  //     .toString()
  //     .split(',')
  //     .map((item) => {
  //       return Number(item)
  //     })
  // }
  // console.log(fllent(res))

  // 2
  // join 把数组中的所有元素转换为一个字符串
  // split 会将string中按照括号里的内容分割并存入一个新数组，返回数组
  // map 会对数组中的所有数据按照函数进行处理后返回一个处理后的数组
  // let res = [1, 2, 3, [4, 5, [6]]]
  // function fllent(res: any[]) {
  //   return res
  //     .join(',')
  //     .split(',')
  //     .map((item) => {
  //       return parseInt(item)
  //     })
  // }
  // console.log(fllent(res))

  // 3 递归
  // let res = [1, 2, 3, [4, 5, [6]]]
  // // @ts-ignore
  // function fllent(res: any) {
  //   // @ts-ignore
  //   let arr = []
  //   let len = res.length
  //   for (let i = 0; i < len; i++) {
  //     if (Array.isArray(res[i])) {
  //       // @ts-ignore
  //       arr = arr.concat(fllent(res[i]))
  //     } else {
  //       arr.push(res[i])
  //     }
  //   }
  //   return arr
  // }
  // console.log(fllent(res))

  // 数组去重
  // 1. new Set()
  // let arr = [1, 2, 3, 3, 4, 4, 5, 6, 6]
  // function noRepeat(arr: number[]) {
  //   // @ts-ignore
  //   let newArr = [...new Set(arr)]
  //   return newArr
  // }
  // console.log(noRepeat(arr))

  // 2. indexOf
  // let arr = [1, 9, 8, 8, 7, 2, 5, 3, 3, 3, 2, 3, 1, 4, 5, 444, 55, 22]
  // function noRepeat(arr: any) {
  //   // @ts-ignore
  //   // 定义一个新的临时数组
  //   let newArr = []
  //   // 遍历当前数组
  //   for (let i = 0; i < arr.length; i++) {
  //     // @ts-ignore
  //     // 如果当前数组的第i已经保存进了临时数组，那么跳过
  //     // 否则把当前项push到临时数组里面
  //     if (newArr.indexOf(arr[i]) === -1) {
  //       // indexOf()判断数组中有没有字符串值，如果没有则返回-1
  //       newArr.push(arr[i])
  //     }
  //   }
  //   return newArr
  // }
  // console.log(noRepeat(arr))

  //对象数组去重

  // Promise
  // const arr = [1]
  // let [a, b] = arr
  // console.log(a)
  // console.log(b)

  // Effect拿到state的最新
  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   document.body.addEventListener('xxxx', () => {
  //     console.log('count', count)
  //   })
  // }, [count])
  // return (
  //   <>
  //     {count}
  //     <button
  //       onClick={() => {
  //         setCount((v) => {
  //           return v + 1
  //         })
  //       }}
  //     >
  //       增加 count
  //     </button>
  //     <button
  //       onClick={() => {
  //         document.body.dispatchEvent(new Event('xxxx'))
  //       }}
  //       // @ts-ignore
  //     >
  //       触发 xxx 事件
  //     </button>
  //   </>
  // )

  return (
    <>
      <div>{count}</div>
      <div onClick={addCounts}>You clicked {counts} times</div>
    </>
  )
}

export default Learn
