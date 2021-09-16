import React, { useState } from 'react'
import { useRouteMatch, Route } from 'react-router-dom'
import Ellipse4 from '../../assets/Ellipse4.svg'
import DecoContainer from '../../Layout/DecoContainer'
import Container from './styles'
import StageOne from './StageOne'
import StageTwo from './StageTwo'

const Auth = () => {
  const {
    params: { stage },
  } = useRouteMatch()
  const storedState = sessionStorage.getItem('authState')
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
    try {
      // const { responseCode, responseMessage } = await dispatch(
      //   loginHandler(formData),
      // )
      // if (responseCode !== 200) {
      //   toast.error(responseMessage)
      //   setState((s) => ({ ...s, loading: false }))
      // }
    } catch (error) {}
  }

  return (
    <DecoContainer
      header={
        <header>
          <div className="ellipse--container">
            <img src={Ellipse4} alt="Ellipse" />
            <h2>
              {stage === 'step-1'
                ? 'Create your delivery request'
                : stage === 'step-2'
                ? 'More details'
                : ''}
            </h2>
          </div>
          <p>
            {stage === 'step-1'
              ? 'Fill the form below to make a  request'
              : stage === 'step-2'
              ? 'You are almost done!!!!'
              : ''}
          </p>
        </header>
      }
      content={
        <Container>
          <form name="auth--form" onSubmit={handleSubmit} noValidate>
            <Route path="/delievery-request/step-1">
              <StageOne {...{ formData, handleInput }} />
            </Route>
            <Route path="/delievery-request/step-2">
              <StageTwo {...{ formData, handleInput }} />
            </Route>
          </form>
        </Container>
      }
    />
  )
}

export default Auth
