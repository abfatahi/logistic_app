import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import {
  DashboardBikes,
  DashboardFeed,
  DashboardLogo,
  DashboardLogout,
  DashboardOrder,
  DashboardSettings,
  DashboardZone,
} from '../../../../assets/icons'
import { Button } from '../../../../UI'
import { PickOrder } from '../../../../assets/icons'
import Container from './styles'

const SideNav = ({ showNav }) => {
  return (
    <Container onClick={showNav}>
      <div className="sideNav--content" onClick={(e) => e.stopPropagation()}>
        <header>
          <Button icon className="toggleMenu--btn" onClick={showNav}>
            <HiOutlineMenuAlt2 />
          </Button>
          <PickOrder width={'8rem'} />
        </header>
        <nav>
          <div>
            <NavLink to="/dashboard" exact={true}>
              <DashboardLogo />
              Dashboard
            </NavLink>
            <NavLink to="/dashboard/admins">
              <DashboardSettings />
              Admins
            </NavLink>
            <NavLink to="/dashboard/orders">
              <DashboardOrder />
              Orders
            </NavLink>
            <NavLink to="/dashboard/feeds">
              <DashboardFeed />
              Activities feeds
            </NavLink>
            <NavLink to="/dashboard/zone">
              <DashboardZone />
              Zone
            </NavLink>
            <NavLink to="/dashboard/bikes">
              <DashboardBikes />
              Bikes
            </NavLink>
          </div>
          <div className="nav--footer">
            <Button full>
              <DashboardLogout />
              Log out
            </Button>
          </div>
        </nav>
      </div>
    </Container>
  )
}

export default SideNav
