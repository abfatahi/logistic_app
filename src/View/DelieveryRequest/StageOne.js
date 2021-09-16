import React from 'react'
import { useHistory } from 'react-router-dom'
import { InputGroup, Button } from '../../UI'

const SignInForm = ({ handleInput, formData }) => {
  const history = useHistory()
  return (
    <>
      <InputGroup
        label="Email address"
        name="email"
        type="email"
        required={true}
        placeholder={'Enter your email address'}
        value={formData.email}
        onChange={handleInput}
      />
      <h3 className="primary--text">PICK UP DETAILS</h3>
      <InputGroup
        label="Pick up address"
        name="email"
        required={true}
        placeholder={'Enter your address '}
        value={formData.email}
        onChange={handleInput}
      />
      <InputGroup
        label="Pick up full name"
        name="email"
        required={true}
        placeholder={'Enter your full name  '}
        value={formData.email}
        onChange={handleInput}
      />
      <InputGroup
        label="Pick up phone number"
        name="email"
        required={true}
        placeholder={'Enter your email address '}
        value={formData.email}
        onChange={handleInput}
      />
      <h3 className="primary--text">RECIPENT DETAILS</h3>
      <InputGroup
        label="Drop off address"
        name="email"
        required={true}
        placeholder={'Enter the drop off address '}
        value={formData.email}
        onChange={handleInput}
      />
      <InputGroup
        label="Recipent full name"
        name="email"
        required={true}
        placeholder={'Enter the recipent full name '}
        value={formData.email}
        onChange={handleInput}
      />
      <InputGroup
        label="Recipent Phone number"
        name="email"
        required={true}
        placeholder={'Enter the recipent phone number'}
        value={formData.email}
        onChange={handleInput}
      />
      <Button
        full
        className="auth--btn"
        onClick={() => history.push('/delievery-request/step-2')}
      >
        Next
      </Button>
    </>
  )
}

export default SignInForm
