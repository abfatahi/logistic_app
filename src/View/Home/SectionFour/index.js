import React from 'react'
import customer1 from '../../../assets/customer1.svg'
import customer2 from '../../../assets/customer2.svg'
import customer3 from '../../../assets/customer3.svg'
import ellipse3 from '../../../assets/Ellipse3.svg'
import EllipsePattern from '../../../assets/EllipsePattern.svg'
import Ellipse22 from '../../../assets/Ellipse22.svg'
import Container from './styles'

const customers = [
  { name: 'Jane Mhiday', img: customer1 },
  { name: 'Jane Mhiday', img: customer2 },
  { name: 'Jane Mhiday', img: customer3 },
  { name: 'Jane Mhiday', img: customer1 },
  { name: 'Jane Mhiday', img: customer2 },
  { name: 'Jane Mhiday', img: customer3 },
]
const SectionFour = () => {
  return (
    <Container>
      <img
        src={EllipsePattern}
        alt="EllipsePattern"
        className="ellipsePattern--img"
      />
      <div className="ellipse--container">
        <img src={ellipse3} alt="Ellipse" />
        <h3>See what our customers are saying</h3>
      </div>
      <div className="grid--container">
        {customers.map((item, i) => (
          <div className="customer--container" key={i}>
            <div className="row">
              <img src={item.img} alt="customer" />
              <h3>{item.name}</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consect adipisci elit, sed
              doincididunt ut labore et doe magn enim ad minim veniamenim ad
              inim.
            </p>
          </div>
        ))}
      </div>
      <img
        src={Ellipse22}
        alt="EllipsePattern"
        className="ellipsePattern--img__2"
      />
    </Container>
  )
}

export default SectionFour
