import React from 'react'
import { InputGroup, Modal, Button } from '../../../../UI'
import Container from './styles'

const BikeForm = () => {
  return (
    <Container>
      <Modal showModal={true}>
        <div className="bikeForm--container">
          <header>
            <h2>Add New Bike</h2>
            <p>Kindly fill this form below</p>
          </header>
          <form>
            <InputGroup label={'Bike ID'} placeholder="Enter the bike ID" />
            <InputGroup
              label={'Rider full name'}
              placeholder="Enter the rider full name "
            />
            <InputGroup label={'Date created'} type="date" />
            <Button type="submit" full>
              Submit
            </Button>
          </form>
        </div>
      </Modal>
    </Container>
  )
}

export default BikeForm
