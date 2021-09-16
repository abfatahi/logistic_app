import React, { useState } from 'react'
import { useRouteMatch, Route } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import { formValidator } from '../../helpers'
// import { signUp, signIn } from '../../store/actions'
import Ellipse4 from '../../assets/Ellipse4.svg'
import DecoContainer from '../../Layout/DecoContainer'
import Container from './styles'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

const Auth = () => {
  const {
    params: { authMethod },
  } = useRouteMatch()
  // const dispatch = useDispatch()
  const storedState = sessionStorage.getItem('authState')
  const [loading, setLoading] = useState(false)
  const [formData, setFormState] = useState(() =>
    storedState ? JSON.parse(storedState) : {},
  )

  const handleInput = ({ target }) => {
    setFormState((s) => ({
      ...s,
      [target.name]: target.value,
    }))
  }

  const handleSubmit = async () => {
    if (
      formValidator(document.forms['auth--form'].getElementsByTagName('input'))
    ) {
      try {
        setLoading(true)
        // const { responseCode, responseMessage } =
        //   authMethod === 'sign-in'
        //     ? await dispatch(signIn(formData))
        //     : await dispatch(signUp(formData))
        // if (responseCode !== 200) {
        //   toast.error(responseMessage)
        //   setState((s) => ({ ...s, loading: false }))
        // }
      } catch (error) {
        setLoading(false)
      }
    }
  }

  return (
    <DecoContainer
      header={
        <header>
          <div className="ellipse--container">
            <img src={Ellipse4} alt="Ellipse" />
            <h2>
              {authMethod === 'sign-in'
                ? 'Welcome'
                : authMethod === 'sign-up'
                ? 'Create An Account'
                : ''}
            </h2>
          </div>
          <p>
            {authMethod === 'sign-in'
              ? 'Login to continue'
              : authMethod === 'sign-up'
              ? 'Fill the form below to register your account'
              : ''}
          </p>
        </header>
      }
      content={
        <Container>
          <form
            name="auth--form"
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit()
            }}
            noValidate
          >
            <Route path="/auth/sign-in">
              <SignInForm {...{ formData, handleInput, loading }} />
            </Route>
            <Route path="/auth/sign-up">
              <SignUpForm {...{ formData, handleInput, loading }} />
            </Route>
          </form>
        </Container>
      }
    />
  )
}

export default Auth
