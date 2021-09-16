import React from 'react'
import { InputGroup } from '../../UI'

const ForgotPassword = ({ handleInput, formData, showPassword, section }) => {
  return (
    <>
      {section === 'resetPassword' ? (
        <>
          <InputGroup
            label="Otp Code"
            type="number"
            value={formData.otp ? formData.otp : ''}
            required={true}
            name="otp"
            onChange={handleInput}
            placeholder="Enter the otp sent to your phone"
          />
          <InputGroup
            label="New Password"
            componentType="password"
            required={true}
            name="newPin"
            value={formData.pin ? formData.pin : ''}
            type={showPassword ? 'text' : 'password'}
            onChange={handleInput}
            placeholder="********"
          />
        </>
      ) : (
        <InputGroup
          label="Phone Number"
          name="username"
          value={formData.username}
          type="tel"
          onChange={handleInput}
        />
      )}
    </>
  )
}

export default ForgotPassword
