import React from 'react'
import { InputGroup, Modal, Button } from '../../../../UI'
import Container from './styles'

const AdminForm = () => {
  return (
    <Container>
      <Modal showModal={true}>
        <div className="adminForm--container">
          <header>
            <h2>Add New Admin</h2>
            <p>Kindly fill this form below</p>
          </header>
          <form>
            <InputGroup label={'Full name'} placeholder="Enter the full name" />
            <InputGroup
              label={'Email address'}
              placeholder="Enter the email address "
            />
            <InputGroup
              label={'Phone number'}
              placeholder="Enter the phone number"
            />
            <InputGroup label={'Password'} placeholder="Enter the password " />
            <Button type="submit" full>
              Submit
            </Button>
          </form>
        </div>
      </Modal>
    </Container>
  )
}

export default AdminForm
