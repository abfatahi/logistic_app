import React from 'react'

import Container from './styles'

const PalletItem = ({ title, detail, value, icon }) => {
  return (
    <Container>
      <div>
        <h4>{title}</h4>
        {icon}
      </div>
      <h3>{value}</h3>
      <p>detail</p>
    </Container>
  )
}

export default PalletItem
