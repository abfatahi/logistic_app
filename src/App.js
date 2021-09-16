import React, { useEffect } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { IconContext } from 'react-icons'
import 'animate.css/animate.min.css'
import { ThemeProvider } from 'styled-components'
import { Toaster } from 'react-hot-toast'
import { doesRouteMatch } from './helpers'
import { Home, Auth, Order, DelieveryRequest, Support, Location } from './View'
import { AdminDashboard } from './View/Admin'
import { TopNav, Footer } from './Layout'
import theme from './base/theme'
import GlobalStyle from './base/globalStyles'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

const App = () => {
  const { pathname } = useLocation()
  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyle />
      <Toaster />
      <IconContext.Provider value={{ className: 'icon' }}>
        <TopNav />
        <div
          className="app--container"
          style={{
            paddingTop: !doesRouteMatch(
              ['auth', 'delievery-request', 'dashboard'],
              pathname,
            )
              ? theme().navHeight
              : 0,
          }}
        >
          <Switch>
            <Route path="/" exact={true}>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/auth/:authMethod" component={Auth} />
            <Route path="/orders" component={Order} />
            <Route path="/locations" component={Location} />
            <Route path="/support" component={Support} />
            <Route
              path="/delievery-request/:stage"
              component={DelieveryRequest}
            />
            <Route path="/dashboard" component={AdminDashboard} />
          </Switch>
          <ScrollToTop />
          <Footer />
        </div>
      </IconContext.Provider>
    </ThemeProvider>
  )
}

export default App
