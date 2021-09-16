import React from 'react'
import box from '../../../assets/box.svg'
import send from '../../../assets/send.svg'
import cart from '../../../assets/cart.svg'
import location from '../../../assets/locationBlue.svg'
import dottedBox from '../../../assets/dottedBox.svg'
import support from '../../../assets/support.svg'
import LocationEllipse from '../../../assets/LocationEllipse.svg'
import Container from './styles'

const Support = () => {
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
      <div className="ellipse--container">
        <img src={LocationEllipse} alt="Ellipse" />

        <h1>Contact Us</h1>
        <h2>
          The support team at pickorders is always ready to listen to your
          issues or enquiries.{' '}
        </h2>
      </div>
      <div className="img--container">
        <img src={support} alt="support" />
      </div>
      <img src={dottedBox} className="dottedBox--img" alt="scooter" />
    </Container>
  )
}

export default Support
