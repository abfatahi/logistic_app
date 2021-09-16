import React, { useState, useEffect } from 'react'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { Button } from '../../UI'
import { doesRouteMatch } from '../../helpers'
import pickOrder from '../../assets/pickOrder.svg'
import Container from './styles'

const Navigation = () => {
  const history = useHistory()
  const { pathname } = useLocation()
  const [showNav, setDisplay] = useState(false)

  useEffect(() => {
    const body = document.getElementsByTagName('html')[0]
    if (showNav) {
      body.style.overflowY = 'hidden'
    } else {
      body.style.overflowY = 'auto'
    }
  }, [showNav])

  return !doesRouteMatch(
    ['delievery-request', 'auth', 'dashboard'],
    pathname,
  ) ? (
    <Container>
      <div className="navigation--container">
        <div
          className="brandLogo--container"
          onClick={() => {
            history.push('/home')
            window.scroll({
              top: 0,
              behavior: 'smooth',
            })
          }}
        >
          <img src={pickOrder} alt="Pick Order" />
        </div>
        <nav className={showNav ? 'nav--mobile' : 'nav--mobile__close'}>
          <div>
            <NavLink to="/home" onClick={() => setDisplay(false)}>
              Home
            </NavLink>
          </div>
          <div>
            <NavLink to="/orders" onClick={() => setDisplay(false)}>
              Orders
            </NavLink>
          </div>
          <div>
            <NavLink to="/locations" onClick={() => setDisplay(false)}>
              Our Locations
            </NavLink>
          </div>
          <div>
            <NavLink to="/support" onClick={() => setDisplay(false)}>
              Support
            </NavLink>
          </div>
          <div>
            <NavLink to="/auth/sign-in" onClick={() => setDisplay(false)}>
              Get Started
            </NavLink>
          </div>
        </nav>
        <Button
          className={`nav--btn 
            ${showNav ? 'open' : 'close'}`}
          onClick={() => setDisplay(!showNav)}
        >
          <span className="dash" />
        </Button>
      </div>
    </Container>
  ) : null
}

export default Navigation
