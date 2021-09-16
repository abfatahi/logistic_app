import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminForm from './AdminForm'
import AdminDetails from './AdminDetails'
import { OrdersIcon, Filter, Calendar, Reset } from '../../../assets/icons'
import { SearchBar, Button } from '../../../UI'
import Container from './styles'

const Orders = () => {
  return (
    <Container>
      <Switch>
        <Route
          path="/dashboard/orders/:adminId/details"
          component={AdminDetails}
        />
        <Route
          path="/dashboard/orders/:action"
          exact={true}
          component={AdminForm}
        />
        <Route path="/dashboard/orders">
          <>
            <header>
              <div className="top--row">
                <h2>All Orders</h2>
                <OrdersIcon />
              </div>
              <SearchBar placeholder="Search by Order No" />
              <div className="filter--row">
                <Button icon>
                  <Filter />
                  Filter by
                </Button>
                <hr />
                <Button icon>
                  Date <Calendar />
                </Button>
                <hr />
                <Button icon>
                  Start date <Calendar />
                </Button>
                <hr />
                <Button icon>
                  End date <Calendar />
                </Button>
                <hr />
                <Button icon className="reset--btn">
                  <Reset />
                  Reset filter
                </Button>
              </div>
            </header>
            <div className="admin--content__container"></div>
          </>
        </Route>
      </Switch>
    </Container>
  )
}

export default Orders
