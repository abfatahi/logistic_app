import React from 'react'
import { Button } from '../../../../UI'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import Container from './styles'

const TopNav = ({ showNav }) => {
  return (
    <Container>
      <div className="welcome--detail">
        <Button icon className="toggleMenu--btn" onClick={showNav}>
          <HiOutlineMenuAlt2 />
        </Button>
        <h3>
          Welcome back,{' '}
          <span className="u--color__primary">Ayomide Shittu</span>
        </h3>
      </div>
      <div className="profile--btn" role="button">
        <div className="img--container"></div>
        <div className="content--container">
          <p>Ayomide Shittu</p>
          <p>User</p>
        </div>
      </div>
    </Container>
  )
}

export default TopNav
