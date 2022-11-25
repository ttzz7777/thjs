import React from 'react'
import Login from './pages/Login'
// import Learn from './pages/Learn/Learn'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <Login />
      {/* <Learn /> */}
    </RecoilRoot>
  )
}
export default App
