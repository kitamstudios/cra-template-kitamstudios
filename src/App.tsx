import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import tw, { GlobalStyles } from 'twin.macro'
import './assets/styles.css'

const Page1 = lazy(() => import('./pages/Page1/Page1'))
const Page2 = lazy(() => import('./pages/Page2/Page2'))

const Footer = tw.div`mx-auto mt-auto text-xs`

const MainContainer = tw.div`flex flex-col h-screen`

const { REACT_APP_VERSION } = process.env

const App = () => {
  return (
    <MainContainer>
      <GlobalStyles />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Page1} />
            <Route path="/page2" component={Page2} />
          </Switch>
        </Suspense>
      </Router>
      <Footer>{REACT_APP_VERSION}</Footer>
    </MainContainer>
  )
}

export default App
