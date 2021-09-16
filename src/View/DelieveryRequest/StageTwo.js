import React from 'react'
import { useHistory } from 'react-router-dom'
import { InputGroup, Button } from '../../UI'

const SignInForm = ({ handleInput, formData }) => {
  const history = useHistory()
  return (
    <>
      <InputGroup>
        <label>Weight</label>
        <select value={formData.email} onChange={handleInput}>
          <option value="">Please select weight</option>
        </select>
      </InputGroup>
      <InputGroup>
        <label>Delivery Priority</label>
        <select value={formData.email} onChange={handleInput}>
          <option value="">Select delivery priority</option>
        </select>
      </InputGroup>
      <h3 className="primary--text">#0.00</h3>
      <InputGroup
        label="Pick a date"
        type="date"
        required={true}
        placeholder={'Select delivery priority'}
        value={formData.email}
        onChange={handleInput}
      />
      <div className="detail--container">
        <p>16 November 2020</p>
        <p>Slot is available for pick up</p>
      </div>
      <InputGroup>
        <label>Description</label>
        <textarea placeholder={'Give a description on your order'} />
      </InputGroup>

      <InputGroup>
        <label>Orders details</label>
        <div className="orderDetail__container">
          <p>
            <span>Pick address:</span>No 2,adeyinka shomolu ikeja lagos
          </p>
          <p>
            <span>Drop off address:</span>No 2,adeyinka shomolu ikeja ibadan
          </p>
          <p>
            <span>Weight:</span>20kg
          </p>
          <p>
            <span>Total Amount:</span> #100,000.00
          </p>
          <p>
            <span>Date:</span> 16 November 2020
          </p>
          <p>
            <span>Description:</span> Lorem ipsum dolor sit amet, consect
            adipiscing elit, sed do eiusmod temp incididunt ut labore et doe
            magnaiq enim ad minim veniamenim ad inim veniam.
          </p>
        </div>
      </InputGroup>
      <Button
        full
        className="auth--btn"
        onClick={() => history.push('/delievery-request/step-2')}
      >
        Proceed to make payment
      </Button>
    </>
  )
}

export default SignInForm
