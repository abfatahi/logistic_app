import React from 'react'
import { InputGroup, Button } from '../../../UI'
import ellipse from '../../../assets/Ellipse2.svg'
import Container from './styles'

const GetInTouch = () => {
  return (
    <Container>
      <div className="ellipse--container">
        <img src={ellipse} alt="Ellipse" />
        <h3>Get in touch with us .</h3>
      </div>
      <div className="row--container">
        <div className="col--1">
          <form>
            <InputGroup
              label="Full name"
              placeholder={'Enter your full name'}
            />
            <InputGroup
              type="email"
              label="Email address"
              placeholder={'Enter your email address'}
            />
            <InputGroup
              type="tel"
              label="Phone number"
              placeholder={'Enter your phone number'}
            />
            <InputGroup>
              <label>Request</label>
              <textarea placeholder={'State your issue, or enquiry'} />
            </InputGroup>
            <Button type="submit">Submit</Button>
          </form>
        </div>
        <div className="col--2">
          <div>
            <h3>Telephone</h3>
            <p>
              <a href="tel:+234 7014747655">+234 7014747655</a>
            </p>
            <p>
              <a href="tel:+234 7014747655">+234 7014747655</a>
            </p>
          </div>

          <div>
            <h3>Email address</h3>
            <p>
              <a href="mailto:hello@pickorder.com">hello@pickorder.com</a>
            </p>
          </div>

          <div>
            <h3>Address</h3>
            <p>
              (504) 271-0921
              <br />
              3712 Chalona Dr
              <br />
              Chalmette, Louisiana(LA), 70043
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default GetInTouch
