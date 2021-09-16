import React from 'react'
import locations from './locations'
import ellipse from '../../../assets/Ellipse2.svg'
import Container from './styles'

const PickUpLocation = () => {
  return (
    <Container>
      <div className="ellipse--container">
        <img src={ellipse} alt="Ellipse" />
        <h3>Pick up locations</h3>
      </div>
      <div className="grid--container">
        {locations.map(({ title, locations }) => (
          <div className="grid--item">
            <h3>{title}</h3>
            <div className="locations">
              {locations.map((item) => (
                <p>{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default PickUpLocation
