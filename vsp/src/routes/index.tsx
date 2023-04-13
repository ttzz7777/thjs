 import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

const VspLogin = lazy(() => import('../pages/Login'))
const Learn = lazy(() => import('../pages/Learn'))

const RouteContent: React.FC<any> = () => {
  return (
    <>
      <Suspense fallback={<div>loading....</div>}>
        <Switch>
          <Route path="/login" exact render={() => <VspLogin />} />
          <Route path="/learn" exact render={() => <Learn />} />
          <Redirect from="/*" to="/" />
          {/* Redirect 必须放在Switch 最后一行。 */}
          {/* 含义：如果上边的路由都匹配不到，既是跳转到"/"页面 */}
          {/* 既是渲染Home组件 */}
        </Switch>
      </Suspense>
    </>
  )
}

export default withRouter(RouteContent)
