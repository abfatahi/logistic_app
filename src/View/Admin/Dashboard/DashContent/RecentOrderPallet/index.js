import React, { useState, useCallback, useEffect } from 'react'
import { Button } from '../../../../../UI'
import MaterialTable from '../../../../../lib/MaterialTable'
import { data, columns } from './tableData'
import Container from './styles'

const RecentOrderPallet = () => {
  const [{ position, showContext }, setState] = useState({
    position: {},
    showContext: false,
  })

  const clickHandler = useCallback(
    (e) => {
      if (!e.target.classList.contains('btn--showMore') && showContext) {
        setState({ position: {}, showContext: false })
      }
    },
    [showContext],
  )

  useEffect(() => {
    document.addEventListener('click', clickHandler)
    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, [clickHandler])

  const handleDisplayMenu = ({ clientX, clientY }, index) => {
    setState({
      position: { clientX, clientY },
      showContext: true,
    })
  }

  return (
    <Container>
      <header>
        <h3>Recent Order</h3>
      </header>
      <div className="chat--container">
        {showContext && (
          <div
            className="context--container"
            style={{
              top: position.clientY,
              left: position.clientX,
              position: 'fixed',
            }}
          >
            <Button full tertiary>
              View
            </Button>
            <Button full tertiary className="btn--delete">
              Delete
            </Button>
          </div>
        )}

        <MaterialTable columns={columns({ handleDisplayMenu })} data={data} />
      </div>
    </Container>
  )
}

export default RecentOrderPallet
