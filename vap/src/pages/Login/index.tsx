import React from 'react'
import axios from 'axios'
import { Input, Button } from 'antd'
import style from './index.module.less'
import { useRecoilState, useRecoilValue } from 'recoil'
import { COUNT, COUNT_GET } from '../../store'

const Login: React.FC<any> = () => {
  // useRecoilState(读，写)
  // useRecoilValue(读)
  const [count, setCount] = useRecoilState(COUNT)

  const controller = new AbortController()

  const click = () => {
    console.log('按钮被点击了')
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/xiaomi',
      signal: controller.signal,
    }).then((res) => {
      console.log(res.data)
    })
  }

  const abort = () => {
    controller.abort()
  }

  const onChange = (e: any) => {
    setCount(e.target.value)
  }

  const CountGet = () => {
    const count = useRecoilValue(COUNT_GET)

    return <>CountGet:{count}</>
  }

  return (
    <div>
      <h3 className={style.header}>登录页面</h3>
      <Input
        type="text"
        value={count}
        onChange={onChange}
        style={{ width: '100px' }}
      />
      <br />
      Echo:{count}
      <br />
      <CountGet />
      <br />
      <Button type="primary" onClick={click}>
        测试接口
      </Button>
      <Button type="primary" onClick={abort}>
        终止接口
      </Button>
    </div>
  )
}

export default Login
