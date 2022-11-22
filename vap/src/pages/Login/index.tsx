import React from 'react'
import styles from './index.module.less'

const Login: React.FC<any> = () => {
  console.log(Function instanceof Object)
  console.log(Array instanceof Object)
  console.log(Object instanceof Object)
  console.log(Number instanceof Object)
  console.log(String instanceof Object)
  // @ts-ignore
  console.log(true instanceof Object)
  // @ts-ignore
  console.log(undefined instanceof Object)
  // @ts-ignore
  console.log(null instanceof Object)

  return <div>123</div>
}

export default Login
