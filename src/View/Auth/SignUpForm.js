import React from 'react'
import { Link } from 'react-router-dom'
import { InputGroup, Button } from '../../UI'

const SignInForm = ({
  handleInput,
  formData: { first_name, last_name, email, password, phone_number },
  loading,
}) => {
  return (
    <>
      <InputGroup
        label="First name"
        name="first_name"
        required={true}
        placeholder={'Enter your first name'}
        value={first_name ? first_name : ''}
        onChange={handleInput}
      />
      <InputGroup
        label="Last name"
        name="last_name"
        required={true}
        placeholder={'Enter your last name'}
        value={last_name ? last_name : ''}
        onChange={handleInput}
      />
      <InputGroup
        label="Email address"
        name="email"
        type="email"
        required={true}
        placeholder={'Enter your email name'}
        value={email ? email : ''}
        onChange={handleInput}
      />
      <InputGroup
        label="Phone number"
        name="phone_number"
        type="tel"
        required={true}
        placeholder={'Enter your phone number'}
        value={phone_number ? phone_number : ''}
        onChange={handleInput}
      />
      <InputGroup
        componentType="password"
        label="Password"
        name="password"
        autoComplete="current-password"
        type="password"
        value={password ? password : ''}
        required={true}
        placeholder="*******"
        onChange={handleInput}
      />
      <Button
        full
        type="submit"
        className="auth--btn"
        loading={loading}
        spinnerWithTxt={true}
      >
        Sign up
      </Button>
      <footer>
        <p>
          Already have an account? <Link to="/auth/sign-in">Log In</Link>
        </p>
      </footer>
    </>
  )
}

export default SignInForm
