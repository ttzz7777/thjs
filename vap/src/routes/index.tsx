import React, { lazy } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

const VspLogin = lazy(() => import('../pages/Login'))
const Learn = lazy(() => import('../pages/Learn'))

const RouteContent: React.FC<any> = () => {
  return (
    <>
      <Switch>
        <Route path="/login" exact render={() => <VspLogin />} />
        <Route path="/learn" exact render={() => <Learn />} />
      </Switch>

      {/* <Redirect to="/login" /> */}
    </>
  )
}

export default withRouter(RouteContent)
