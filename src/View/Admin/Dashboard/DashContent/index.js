import React from 'react'
import {
  Activity1,
  Activity2,
  Activity3,
  Activity4,
  Activity5,
  Activity6,
  Activity7,
  Pallet1,
  Users,
  Orders,
  Deliveries,
} from '../../../../assets/icons'
import SaleReportPallet from './SaleReportPallet'
import TotalOrderPallet from './TotalOrderPallet'
import RecentOrderPallet from './RecentOrderPallet'
import PalletItem from './PalletItem'
import { Button } from '../../../../UI'
import Container from './styles'

const DashContent = () => {
  return (
    <Container>
      <div className="first--row">
        <div className="account--container">
          <header>
            <h2>Account Overview</h2>
            <select id="cars">
              <option value="Daily">Daily</option>
              <option value="Monethly">Monthly</option>
            </select>
          </header>
          <div className="pallet--container">
            <PalletItem
              {...{
                title: 'Total Sales',
                detail: 'Today',
                value: '₦800,000',
                icon: <Pallet1 />,
              }}
            />
            <PalletItem
              {...{
                title: 'Total orders',
                detail: 'Today',
                value: '2,000',
                icon: <Orders />,
              }}
            />
            <PalletItem
              {...{
                title: 'Pending deliveries',
                detail: 'Since last month',
                value: '12',
                icon: <Deliveries />,
              }}
            />
            <PalletItem
              {...{
                title: 'Fulfilled deliveries',
                detail: 'Since last year',
                value: '25,000',
                icon: <Pallet1 />,
              }}
            />
            <PalletItem
              {...{
                title: 'Registered Users',
                detail: 'Since last month',
                value: '12,000',
                icon: <Users />,
              }}
            />
            <PalletItem
              {...{
                title: 'Registered Users',
                detail: 'Since last month',
                value: '25',
                icon: <Orders />,
              }}
            />
          </div>
        </div>
        <div className="activity--container">
          <header>
            <h3>Activities feeds</h3>
            <Button tertiary small>
              View more
            </Button>
          </header>

          <div className="content--container">
            <div className="activity--item">
              <div>
                <Activity1 />
                <p>New user registration</p>
              </div>
              <p>Just Now</p>
            </div>
            <div className="activity--item">
              <div>
                <Activity2 />
                <p>New user registration</p>
              </div>
              <p>Just Now</p>
            </div>
            <div className="activity--item">
              <div>
                <Activity3 />
                <p>New user registration</p>
              </div>
              <p>Just Now</p>
            </div>
            <div className="activity--item">
              <div>
                <Activity4 />
                <p>New user registration</p>
              </div>
              <p>Just Now</p>
            </div>
            <div className="activity--item">
              <div>
                <Activity5 />
                <p>New user registration</p>
              </div>
              <p>Just Now</p>
            </div>
            <div className="activity--item">
              <div>
                <Activity6 />
                <p>New user registration</p>
              </div>
              <p>Just Now</p>
            </div>
            <div className="activity--item">
              <div>
                <Activity7 />
                <p>New user registration</p>
              </div>
              <p>Just Now</p>
            </div>
          </div>
        </div>
      </div>

      <div className="second--row">
        <SaleReportPallet />
        <TotalOrderPallet />
      </div>
      <div className="third--row">
        <RecentOrderPallet />
      </div>
    </Container>
  )
}

export default DashContent
