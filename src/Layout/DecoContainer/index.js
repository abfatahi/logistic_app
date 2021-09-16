import React from 'react'
import { Link } from 'react-router-dom'
import pickLogo from '../../assets/pickOrder.svg'
import box from '../../assets/box.svg'
import cart from '../../assets/cart.svg'
import gift from '../../assets/gift.svg'
import send2 from '../../assets/send2.svg'
import bycle2 from '../../assets/bycle2.svg'
import location3 from '../../assets/location3.svg'
import Container from './styles'

const DecoContainer = ({ header, content }) => {
  return (
    <Container>
      <img src={gift} className="floating--img img--left__top" alt="scooter" />
      <img
        src={send2}
        className="floating--img img--left__middle"
        alt="scooter"
      />
      <img
        src={cart}
        className="floating--img img--left__bottom"
        alt="scooter"
      />
      <div className="img--container">
        <Link to="/home">
          <img src={pickLogo} alt="Pick Order" />
        </Link>
      </div>
      <div className="content--container">
        {header}
        <div>{content}</div>
      </div>
      <img
        src={bycle2}
        className="floating--img img--right__top"
        alt="scooter"
      />
      <img
        src={box}
        className="floating--img img--right__middle"
        alt="scooter"
      />
      <img
        src={location3}
        className="floating--img img--right__bottom"
        alt="scooter"
      />
    </Container>
  )
}

export default DecoContainer
