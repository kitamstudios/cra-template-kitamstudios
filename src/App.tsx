import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './GlobalStyles'

const Page1 = lazy(() => import('./pages/Page1/Page1'))
const Page2 = lazy(() => import('./pages/Page2/Page2'))

function App() {
  return (
    <>
      <GlobalStyle />
      <Router basename="/craks">
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
