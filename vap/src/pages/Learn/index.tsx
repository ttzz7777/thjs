import React from 'react'
import { COUNT } from '../../store'
import { useRecoilValue } from 'recoil'

const Learn: React.FC<any> = () => {
  const count = useRecoilValue(COUNT)

  return <div>{count}</div>
}

export default Learn
