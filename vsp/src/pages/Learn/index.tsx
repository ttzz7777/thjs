import React, { useState } from 'react'
import { COUNT } from '../../store'
import { useRecoilValue } from 'recoil'
import { clearTimeout } from 'timers'

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
  // 深克隆 或者 Json.parse(Json.Stringfy(obj))
  // const deepClone = (data:any)=>{
  //   const newData = Array.isArray(data)?[]:{}
  //   for(let key in data){
  //     if(data[key]&&typeof data[key]==='object'){
  //       newData[key]=deepClone(data[key])
  //     }else{
  //       newData[key] = data[key]
  //     }
  //   }
  //   return newData
  // }
  const deepClone = (data: any) => {
    const newData = Array.isArray(data) ? [] : {}
    for (let key in data) {
      if (data[key] && typeof data[key] === 'object') {
        // @ts-ignore
        newData[key] = deepClone(data[key])
      } else {
        // @ts-ignore
        newData[key] = data[key]
      }
    }
    return newData
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
  // bar1()

  // @ts-ignore
  console.log([] + 1 + '2')

  return (
    <>
      <div>{count}</div>
      <div onClick={addCounts}>You clicked {counts} times</div>
    </>
  )
}

export default Learn
