import React from 'react'
import { NavLink } from 'react-router-dom'
import { Padlock, Bin } from '../../../../assets/icons'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Button } from '../../../../UI'
import Container from './styles'

const AdminDetails = () => {
  return (
    <Container>
      <header>
        <div className="row-1">
          <NavLink to="/dashboard/admins" exact={true}>
            Admins
          </NavLink>
          <NavLink to="/dashboard/admins" exact={true}>
            Admins
          </NavLink>
        </div>
        <div className="row-2">
          <Button icon arial-label="prev admin">
            <IoIosArrowBack />
          </Button>
          <Button icon arial-label="next admin">
            <IoIosArrowForward />
          </Button>
        </div>
      </header>
      <div className="admin--details__container">
        <div className="profile--row">
          <div className="col-1">
            <div className="img--contents">
              <div className="img--container"></div>
              <Button>Edit Profile</Button>
            </div>
            <div className="profile--content">
              <h3>Shittu Ayomide</h3>
              <p>ayomideshittu18@gmail.com</p>
              <p>07014767755</p>
              <p className="offline">Offline</p>
            </div>
          </div>
          <div className="col-2">
            <Button icon>
              <Padlock />
              Reset Password
            </Button>
            <Button className="btn--deactivate">Deactivate account</Button>
            <Button icon className="btn--delete">
              <Bin />
              Delete account
            </Button>
          </div>
        </div>
        <div className="activities--container">
          <h3>Recent Activities</h3>
          <div className="activity--lists"></div>
        </div>
      </div>
    </Container>
  )
}

export default AdminDetails
