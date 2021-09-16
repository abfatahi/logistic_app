import * as React from "react";

function SvgCheck(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27.65 12.633L16.667 23.617l-5.984-5.967L8.333 20l8.334 8.333L30 15l-2.35-2.367zM20 3.333C10.8 3.333 3.333 10.8 3.333 20c0 9.2 7.467 16.667 16.667 16.667 9.2 0 16.667-7.467 16.667-16.667C36.667 10.8 29.2 3.333 20 3.333zm0 30c-7.367 0-13.333-5.966-13.333-13.333S12.633 6.667 20 6.667 33.333 12.633 33.333 20 27.367 33.333 20 33.333z"
        fill="#fff"
        fillOpacity={0.7}
      />
    </svg>
  );
}

export default SvgCheck;
