import React from 'react'
import { NavLink } from 'react-router-dom'
import { Padlock, Bin, Checked, Pallet } from '../../../../assets/icons'
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
          <NavLink to="/dashboard/admins/sdsdksjdskdjsd/details" exact={true}>
            Shittu Ayomide
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
        <div className="content--container">
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
            <div className="activity--lists">
              {[...Array(10).keys()].map((item) => (
                <div className="activity--item">
                  <div className="illustration--container">
                    <Checked />
                    <div className="pallet--container">
                      <Pallet count={6} />
                    </div>
                  </div>
                  <div className="activity--content">
                    <div>
                      <p>
                        Updated the order progress of order no 10845762 to
                        processing orders
                      </p>
                      <p>10/07/2021</p>
                    </div>
                    <div>
                      <p>Just Now</p>
                      <p>10:20pm</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AdminDetails
