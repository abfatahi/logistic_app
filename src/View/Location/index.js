import React from 'react'
import Jumbotron from './Jumbotron'
import PickUpLocation from './PickUpLocation'
import DropOffLocation from './DropOffLocation'
import Container from './styles'

const Location = () => {
  return (
    <Container>
      <Jumbotron />
      <PickUpLocation />
      <DropOffLocation />
    </Container>
  )
}

export default Location
