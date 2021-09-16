import React from 'react'
import { useHistory } from 'react-router-dom'
import box from '../../../assets/box.svg'
import send from '../../../assets/send.svg'
import cart from '../../../assets/cart.svg'
import location from '../../../assets/locationBlue.svg'
import dottedBox from '../../../assets/dottedBox.svg'
import { Button, InputGroup,SearchBar} from '../../../UI'
import order from '../../../assets/order.svg'
import orderEllipse from '../../../assets/orderEllipse.svg'
import Container from './styles'
// import Search from '../../../UI'

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
        <img src={orderEllipse} alt="Ellipse" />

        <h1>Track your orders</h1>
        <h2>Follow up with your orders to know the state of your orders</h2>
      </div>
      <div className="img--container">
        <img src={order} alt="order" />
      </div>
      <SearchBar/>
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
