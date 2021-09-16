import React from 'react'
import Jumbotron from './Jumbotron'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import Container from './styles'

const Auth = () => {
  return (
    <Container>
      <Jumbotron />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </Container>
  )
}

export default Auth
