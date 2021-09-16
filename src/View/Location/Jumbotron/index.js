import React from 'react'
import { useHistory } from 'react-router-dom'
import box from '../../../assets/box.svg'
import send from '../../../assets/send.svg'
import cart from '../../../assets/cart.svg'
import location from '../../../assets/locationBlue.svg'
import dottedBox from '../../../assets/dottedBox.svg'
import { Button, InputGroup } from '../../../UI'
import map from '../../../assets/map.svg'
import LocationEllipse from '../../../assets/LocationEllipse.svg'
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
      <div className="ellipse--container">
        <img src={LocationEllipse} alt="Ellipse" />

        <h1>Locations we deliver to</h1>
        <h2>
          List of states and cities we currently pick up from and delivers too
        </h2>
      </div>
      <div className="img--container">
        <img src={map} alt="map" />
      </div>
      <InputGroup>
        <input placeholder={'Enter your tracking ID'} />
        <Button onClick={() => history.push('/delievery-request/step-1')}>
          Track
        </Button>
      </InputGroup>
      <img src={dottedBox} className="dottedBox--img" alt="scooter" />
    </Container>
  )
}

export default Jumbotron
