import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import ellipse from '../../../assets/Ellipse2.svg'
import safeDelivery from '../../../assets/safeDelivery.svg'
import bicycle from '../../../assets/bicycle.svg'
import locationInvert from '../../../assets/locationInvert.svg'
import reliable from '../../../assets/reliable.svg'
import Container from './styles'

const SectionOne = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <Container>
        <div className="reasons">
          <div className="ellipse--container">
            <img src={ellipse} alt="Ellipse" />
            <h3>Why You Should Use Pickorders </h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consect adipiscing eli temp incididunt
            ut labore et doe magnaiq enim a veniamenim ad inim veniam.
          </p>
        </div>
        <div className="points--container">
          <div className="points--col__1">
            <div className="keyPoints--container">
              <img src={safeDelivery} alt="safe delivery" />
              <h3>Safe delivery</h3>
              <p>
                Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
                eiusmod temp incididunt ut labore et doe magnaiq enim ad minim
                veniamenim ad inim veniam.
              </p>
            </div>
            <div className="keyPoints--container">
              <img src={reliable} alt="safe delivery" />
              <h3>Reliable services</h3>
              <p>
                Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
                eiusmod temp incididunt ut labore et doe magnaiq enim ad minim
                veniamenim ad inim veniam.
              </p>
            </div>
          </div>
          <div className="points--col__2">
            <div className="keyPoints--container">
              <img src={bicycle} alt="safe delivery" />
              <h3>Same day delivery</h3>
              <p>
                Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
                eiusmod temp incididunt ut labore et doe magnaiq enim ad minim
                veniamenim ad inim veniam.
              </p>
            </div>
            <div className="keyPoints--container">
              <img src={locationInvert} alt="safe delivery" />
              <h3>Realtime tracking</h3>
              <p>
                Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
                eiusmod temp incididunt ut labore et doe magnaiq enim ad minim
                veniamenim ad inim veniam.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </ScrollAnimation>
  )
}

export default SectionOne
