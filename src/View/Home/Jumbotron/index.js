import React from 'react'
import { useHistory } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import ellipse from '../../../assets/Ellipse.svg'
import box from '../../../assets/box.svg'
import send from '../../../assets/send.svg'
import cart from '../../../assets/cart.svg'
import location from '../../../assets/locationBlue.svg'
import dottedBox from '../../../assets/dottedBox.svg'
import { Button } from '../../../UI'
import scooter from '../../../assets/scotter.svg'
import Container from './styles'

const Jumbotron = () => {
  const history = useHistory()
  return (
    <Container>
      <img src={box} className="floating--img img--left__top" alt="scooter" />
      <img
        src={cart}
        className="floating--img img--left__bottom"
        alt="scooter"
      />
      <img src={send} className="floating--img img--right__top" alt="scooter" />
      <img
        src={location}
        className="floating--img img--right__bottom"
        alt="scooter"
      />
      <h1>We Make Shipping Big Stuff Easy</h1>
      <div className="ellipse--container">
        <img src={ellipse} alt="Ellipse" />
        <h2>
          Meet the expert shippers to transport goods Anytime! Anywhere!. Doing
          it
          <br /> right cost less in the end
        </h2>
      </div>
      <div className="img--container">
        <img src={scooter} alt="scooter" />
      </div>
      <Button onClick={() => history.push('/delievery-request/step-1')}>
        Create delivery request
        <BsArrowRight />
      </Button>
      <img src={dottedBox} className="dottedBox--img" alt="dotted" />
    </Container>
  )
}

export default Jumbotron
