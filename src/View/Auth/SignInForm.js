import React from 'react'
import { Link } from 'react-router-dom'
import { InputGroup, Button } from '../../UI'

const SignInForm = ({ handleInput, formData, loading }) => {
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
      <InputGroup
        componentType="password"
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        required={true}
        placeholder="*******"
        onChange={handleInput}
      />
      <div className="forgotPassword--container">
        <Button tertiary>Forgot Password?</Button>
      </div>
      <Button
        full
        type="submit"
        className="auth--btn"
        loading={loading}
        spinnerWithTxt={true}
      >
        Log In
      </Button>
      <footer>
        <p>
          Don’t have an account? <Link to="/auth/sign-up">Sign up</Link>
        </p>
      </footer>
    </>
  )
}

export default SignInForm
