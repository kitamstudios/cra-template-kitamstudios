import { AppInsightsErrorBoundary } from '@microsoft/applicationinsights-react-js'
import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import tw, { GlobalStyles } from 'twin.macro'
import './assets/styles.css'
import TelemetryProvider from './services/Telemetry/TelemetryProvider'
import { ai } from './services/Telemetry/TelemetryService'

const Page1 = lazy(() => import('./pages/Page1/Page1'))
const Page2 = lazy(() => import('./pages/Page2/Page2'))

const Footer = tw.div`mx-auto mt-auto text-xs`

const MainContainer = tw.div`flex flex-col h-screen`

const { REACT_APP_VERSION, REACT_APP_AI_INSTRUMENTATION_KEY } = process.env

const App = () => (
  <AppInsightsErrorBoundary onError={() => <h1>Application crashed</h1>} appInsights={ai.reactPlugin}>
    <MainContainer>
      <GlobalStyles />
      <Router>
        <TelemetryProvider
          instrumentationKey={REACT_APP_AI_INSTRUMENTATION_KEY || 'Not set - check REACT_APP_AI_INSTRUMENTATION_KEY'}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Page1} />
              <Route path="/page2" component={Page2} />
            </Switch>
          </Suspense>
        </TelemetryProvider>
      </Router>
      <Footer>{REACT_APP_VERSION}</Footer>
    </MainContainer>
  </AppInsightsErrorBoundary>
)

export default App
