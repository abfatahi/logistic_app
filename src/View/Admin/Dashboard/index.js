import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Route, useLocation } from 'react-router-dom'
import { capitalize } from '../../../helpers'
import TopNav from './TopNav'
import SideNav from './SideNav'
import DashContent from './DashContent'
import { Orders, Admins, Bikes } from '../'
import Container from './styles'

const AdminDashboard = () => {
  const [showNav, setDisplay] = useState(false)
  const { pathname } = useLocation()
  const titleTxt = `Dashboard
    ${
      pathname.split('/') && pathname.split('/')[2]
        ? `| ${capitalize(pathname.split('/')[2])}`
        : ''
    }`

  useEffect(() => {
    setDisplay(false)
  }, [pathname])

  return (
    <>
      <Helmet>
        <title>{titleTxt}</title>
      </Helmet>
      <Container>
        <aside
          className={`sideNav--container ${showNav ? 'show--nav__mobile' : ''}`}
        >
          <SideNav {...{ showNav: () => setDisplay(!showNav) }} />
        </aside>
        <div className="dashboard--content">
          <TopNav {...{ showNav: () => setDisplay(!showNav) }} />
          <div className="dashboard--content__container">
            <Route path="/dashboard" exact={true} component={DashContent} />
            <Route path="/dashboard/admins" component={Admins} />
            <Route path="/dashboard/orders" component={Orders} />
            <Route path="/dashboard/feeds" component={Orders} />
            <Route path="/dashboard/zones" component={Orders} />
            <Route path="/dashboard/bikes" component={Bikes} />
          </div>
        </div>
      </Container>
    </>
  )
}

export default AdminDashboard
