import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalStyles } from 'twin.macro'
import './assets/styles.css'

const Page1 = lazy(() => import('./pages/Page1/Page1'))
const Page2 = lazy(() => import('./pages/Page2/Page2'))

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Page1} />
            <Route path="/page2" component={Page2} />
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default App
