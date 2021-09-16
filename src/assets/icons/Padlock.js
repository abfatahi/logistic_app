import * as React from 'react'

function SvgPadlock(props) {
  return (
    <svg
      width="1rem"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#padlock_svg__clip0)" fill="#fff" fillOpacity={0.8}>
        <path d="M12.5 16h-9c-.827 0-1.5-.673-1.5-1.5v-7C2 6.673 2.673 6 3.5 6h9c.827 0 1.5.673 1.5 1.5v7c0 .827-.673 1.5-1.5 1.5zm-9-9a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-9z" />
        <path d="M11.5 7a.5.5 0 01-.5-.5V4c0-1.654-1.346-3-3-3S5 2.346 5 4v2.5a.5.5 0 01-1 0V4c0-2.206 1.794-4 4-4s4 1.794 4 4v2.5a.5.5 0 01-.5.5zM8.001 11.333a1.335 1.335 0 01-1.333-1.334c0-.735.598-1.333 1.333-1.333.736 0 1.334.598 1.334 1.333 0 .736-.598 1.334-1.334 1.334zm0-1.667a.334.334 0 10.001.668.334.334 0 000-.668z" />
        <path d="M8 13.333a.5.5 0 01-.5-.5V11a.5.5 0 011 0v1.833a.5.5 0 01-.5.5z" />
      </g>
      <defs>
        <clipPath id="padlock_svg__clip0">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgPadlock
