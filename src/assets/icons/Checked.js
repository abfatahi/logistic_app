import * as React from "react";

function SvgChecked(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={5} cy={5} r={5} fill="#33CE85" />
      <path
        d="M4.288 7.142a.46.46 0 01-.326-.135L2.275 5.316a.447.447 0 01.005-.638.462.462 0 01.647.005l1.347 1.352 2.789-3.03a.462.462 0 01.645-.031c.187.167.2.452.031.637L4.626 6.995a.46.46 0 01-.33.148h-.008z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgChecked;
