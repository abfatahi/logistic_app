import React from 'react'
import ellipse from '../../../assets/Ellipse2.svg'
import check from '../../../assets/check.svg'
import book from '../../../assets/book.svg'
import location from '../../../assets/location.svg'
import bick from '../../../assets/bick.svg'
import EllipsePattern from '../../../assets/EllipsePattern.svg'
import rightString from '../../../assets/rightString.svg'
import leftString from '../../../assets/leftString.svg'
import Container from './styles'

const SectionTwo = () => {
  return (
    <Container>
      <div className="row--one">
        <div className="reasons">
          <div className="ellipse--container">
            <img src={ellipse} alt="Ellipse" />
            <h3>How Pickorders works</h3>
          </div>
          <p>A step-to-step guide to get started </p>
        </div>
        <div className="pattern--container">
          {/* <img src={pattern} alt="pattern" /> */}
        </div>
      </div>

      <section>
        <div className="pallet--container">
          <div className="pallet--row">
            <div className="img--container">
              <img src={check} alt="check" />
              <h3>
                Registration
                <br />
                Successful
              </h3>
              <p className="action--point">Register</p>
            </div>
            <div className="content--container">
              <h2>Join the community</h2>
              <p>
                This is the most reliable and verified community of
                logisticsservices. Create an account and provide the necessary
                information to enjoy our fast,secured and reliable services.
              </p>
            </div>
            <img
              src={rightString}
              className="string--right"
              alt="right string"
            />
          </div>
        </div>
        <div className="pallet--container section--right">
          <div className="pallet--row">
            <div className="img--container">
              <img src={book} alt="book" />
              <p className="action--point">Request</p>
            </div>
            <div className="content--container">
              <h2>Create a delivery request</h2>
              <p>
                This is the most reliable and verified community of
                logisticsservices. Create an account and provide the necessary
                information to enjoy our fast,secured and reliable services.
              </p>
            </div>
            <img src={leftString} className="string--left" alt="right string" />
          </div>
        </div>

        <div className="pallet--container">
          <div className="pallet--row">
            <div className="img--container">
              <img src={location} alt="location" />
              <p className="action--point" style={{ padding: '0.5em 1.5em' }}>
                Track
              </p>
            </div>
            <div className="content--container">
              <h2>Track your shipment</h2>
              <p>
                This is the most reliable and verified community of
                logisticsservices. Create an account and provide the necessary
                information to enjoy our fast,secured and reliable services.
              </p>
            </div>
            <img
              src={rightString}
              className="string--right"
              alt="right string"
            />
          </div>
        </div>

        <div className="pallet--container section--right">
          <div className="pallet--row">
            <div className="img--container">
              <img src={bick} alt="bicycle" />
              <p className="action--point">Delivered</p>
            </div>
            <div className="content--container">
              <h2>Delivered to your location</h2>
              <p>
                This is the most reliable and verified community of
                logisticsservices. Create an account and provide the necessary
                information to enjoy our fast,secured and reliable services.
              </p>
            </div>
          </div>
        </div>
      </section>
      <img
        src={EllipsePattern}
        alt="EllipsePattern"
        className="ellipsePattern--img"
      />
    </Container>
  )
}

export default SectionTwo
