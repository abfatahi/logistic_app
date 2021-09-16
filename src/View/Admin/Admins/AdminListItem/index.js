import React from 'react'
import { useHistory } from 'react-router-dom'
import Container from './styles'

const AdminListItem = () => {
  const history = useHistory()
  return (
    <Container
      role="button"
      onClick={() =>
        history.push('/dashboard/admins/sdjskdsjdksjdskdjdkj/details')
      }
    >
      <div className="img--container" />
      <h3>Shittu Ayomide</h3>
      <p>ayomideshittu18@gmail.com</p>
      <p>07014767755</p>
      <p>Active</p>
    </Container>
  )
}

export default AdminListItem
