import * as React from 'react'

function SvgFilter(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.436 0h10.62c.792 0 1.435.654 1.435 1.462v1.02c0 .392-.155.768-.43 1.043L8.673 7.91a.398.398 0 01-.285.118l-3.674-.01a.4.4 0 01-.294-.131L.388 3.505a1.476 1.476 0 01-.388-1V1.462C0 .655.642 0 1.436 0zM4.91 9.216l3.274.01c.204 0 .37.17.37.377v1.82c0 .208-.12.396-.306.483l-2.972 1.38a.519.519 0 01-.738-.483v-3.21c0-.209.167-.378.372-.377z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgFilter
