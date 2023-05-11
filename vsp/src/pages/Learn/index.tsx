import React, { useState, useEffect, useRef } from 'react'
import { COUNT } from '../../store'
import { useRecoilValue } from 'recoil'
import { Button } from 'antd'
import axios from 'axios'

const Learn: React.FC<any> = () => {
  const count = useRecoilValue(COUNT)

  const [counts, setCounts] = useState(0)
  const [data, setData] = useState('')

  const addCounts = () => {
    setCounts(counts + 1)
  }
  // 缓存值 useMemo
  // 缓存方法 useCallback
  for (var i in Object) {
    console.log(i)
  }

  const getHttp = () => {
    // axios
    //   .post('http://localhost:3001/user/add', { name: 'th', age: 18 })
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((err) => {
    //     console.log('发生了错误：' + err)
    //   })

    axios({
      method: 'post',
      url: 'http://localhost:3001/regist',
      data: {
        username: 'th',
        password: 654987139,
        password2: 17793807818,
      },
    })
      .then((res) => {
        // @ts-ignore
        if (typeof res.data === 'object') {
          setData(JSON.stringify(res.data))
        } else {
          setData(res.data)
        }
      })
      .catch((err) => {
        console.log('发生了错误：' + err)
      })
  }

  return (
    <>
      <div>{count}</div>
      <div onClick={addCounts}>You clicked {counts} times</div>
      <Button onClick={getHttp}>点击我</Button>
      <div>请求响应:{data}</div>
    </>
  )
}

export default Learn
