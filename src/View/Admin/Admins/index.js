import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { useHistory, Route, Switch } from 'react-router-dom'
import AdminForm from './AdminForm'
import AdminDetails from './AdminDetails'
import AdminListItem from './AdminListItem'
import { NotAdminPlaceHoldersvg, AdminsIcon } from '../../../assets/icons'
import { SearchBar, Button } from '../../../UI'
import Container from './styles'

const Admins = () => {
  const history = useHistory()
  return (
    <Container>
      <Switch>
        <Route
          path="/dashboard/admins/:adminId/details"
          component={AdminDetails}
        />
        <Route path="/dashboard/admins">
          <>
            <Route
              path="/dashboard/admins/:action"
              exact={true}
              component={AdminForm}
            />
            <header>
              <div className="top--row">
                <h2>Admins</h2>
                <AdminsIcon />
              </div>
              <div className="header--row">
                <SearchBar placeholder="Search by names" />
                <Button
                  className="add--btn"
                  onClick={() => history.push('/dashboard/admins/add')}
                >
                  <IoMdAdd />
                  Add Admin
                </Button>
              </div>
            </header>
            <div className="admin--content__container">
              <div className="admin--lists--container">
                {[...Array(100).keys()].map((item) => (
                  <AdminListItem />
                ))}
              </div>

              {false && (
                <div className="noAdminList--container">
                  <NotAdminPlaceHoldersvg />
                  <h3>No admin added</h3>
                  <p className="instruction">
                    You are permitted to add <span>10 admins</span> only as a
                    super admin
                  </p>
                  <Button onClick={() => history.push('/dashboard/admins/add')}>
                    <IoMdAdd />
                    Add admin
                  </Button>
                </div>
              )}
            </div>
          </>
        </Route>
      </Switch>
    </Container>
  )
}

export default Admins
