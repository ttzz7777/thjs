import React from 'react'
import { Input } from 'antd'
import styles from './index.module.less'
import { useRecoilState, useRecoilValue } from 'recoil'
import { COUNT, COUNT_GET } from '../../store'

const Login: React.FC<any> = () => {
  // useRecoilState(读，写)
  // useRecoilValue(读)
  const [count, setCount] = useRecoilState(COUNT)

  const onChange = (e: any) => {
    setCount(e.target.value)
  }

  const CountGet = () => {
    const count = useRecoilValue(COUNT_GET)

    return <>CountGet:{count}</>
  }

  return (
    <div>
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
    </div>
  )
}

export default Login
