import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { doesRouteMatch } from '../../helpers'
import Container from './styles'

const Footer = () => {
  const { pathname } = useLocation()
  return !doesRouteMatch(
    ['delievery-request', 'auth', 'dashboard'],
    pathname,
  ) ? (
    <Container>
      <div className="grid--container">
        <div className="grid--item">
          <h3>LOGO</h3>
          <p>
            Project X is an online job board for underrepresented people, i.e.
            people of non-white racial descent, women, LGBTQ+ people
          </p>
        </div>
        <div className="grid--item">
          <h3>Contact us</h3>
          <p>
            <a href="tel:+2348043255678">+2348043255678</a>
          </p>
          <p>
            <a href="mailto:support@projectx.com">support@projectx.com</a>
          </p>
          <p>University Rd Centerville, South Dakota.</p>
        </div>
        <div className="grid--item">
          <h3>Other Links</h3>
          <p>
            <Link to="/">About Us</Link>
          </p>
          <p>
            <Link to="/">Orders</Link>
          </p>
          <p>
            <Link to="/">Our locations</Link>
          </p>
          <p>
            <Link to="/">Track your orders</Link>
          </p>
        </div>
      </div>
      <hr />
      <div className="grid--container grid--bottom">
        <div className="grid--item">
          <p>©2020 Project X, All rights Reserved</p>
        </div>
        <div className="grid--item">
          <p>
            {' '}
            <a href={'/'} target={'__blank'}>
              Terms & Conditions
            </a>{' '}
            ·{' '}
            <a href={'/'} target={'__blank'}>
              Privacy Policy ·{' '}
            </a>{' '}
            <a href={'/'} target={'__blank'}>
              Cookies
            </a>
          </p>
        </div>
        <div className="grid--item">
          <p>
            <a href={'/'} target={'__blank'}>
              Twitter
            </a>
            ·
            <a href={'/'} target={'__blank'}>
              Facebook
            </a>
            ·
            <a href={'/'} target={'__blank'}>
              Instagram
            </a>
          </p>
        </div>
      </div>
    </Container>
  ) : null
}

export default Footer
