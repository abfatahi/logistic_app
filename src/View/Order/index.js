import React from 'react'
import Jumbotron from './Jumbotron'
import OrderStatus from './OrderStatus'
import Container from './styles'

const Order = () => {
  return (
    <Container>
      <Jumbotron />
      <OrderStatus />
    </Container>
  )
}

export default Order
