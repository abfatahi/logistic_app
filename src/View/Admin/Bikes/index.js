import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { useHistory, Route, Switch } from 'react-router-dom'
import BikeForm from './BikeForm'
import AdminDetails from './AdminDetails'
import { DashBikes } from '../../../assets/icons'
import { SearchBar, Button } from '../../../UI'
import Container from './styles'

const Bikes = () => {
  const history = useHistory()
  return (
    <Container>
      <Switch>
        <Route
          path="/dashboard/bikes/:adminId/details"
          component={AdminDetails}
        />
        <Route path="/dashboard/bikes">
          <>
            <Route
              path="/dashboard/bikes/:action"
              exact={true}
              component={BikeForm}
            />
            <header>
              <div className="top--row">
                <h2>Bikes</h2>
                <DashBikes />
              </div>
              <div className="header--row">
                <SearchBar placeholder="Search by bike ID" />

                <Button
                  className="add--btn"
                  onClick={() => history.push('/dashboard/bikes/add')}
                >
                  <IoMdAdd />
                  Add bike
                </Button>
              </div>
            </header>
            <div className="bikes--content__container"></div>
          </>
        </Route>
      </Switch>
    </Container>
  )
}

export default Bikes
