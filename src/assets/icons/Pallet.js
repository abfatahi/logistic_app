import * as React from 'react'
import Styled from 'styled-components'

const PalletContainer = Styled.div`
  display: flex; 
  flex-direction: column;
  svg {
    &:not(:last-child) {
      margin-bottom: 0.1em;
    }
  }
`

function SvgPallet({ count, ...props }) {
  const pallet = (
    <svg
      width="0.9em"
      height="0.9em"
      viewBox="0 0 2 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={0.027}
        y={0.25}
        width={1.078}
        height={5.747}
        rx={0.539}
        fill="#fff"
        fillOpacity={0.3}
      />
    </svg>
  )
  return (
    <>
      {count ? (
        <PalletContainer>
          {[...Array(count).keys()].map((item) => pallet)}
        </PalletContainer>
      ) : (
        pallet
      )}
    </>
  )
}

export default SvgPallet
