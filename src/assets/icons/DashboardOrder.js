import * as React from "react";

function SvgDashboardOrder(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.625 4.41v-.005l4.678 2.12L25 4.743 12.5 0 0 4.743l12.5 4.743 4.678-1.776L12.5 5.76v-.005l3.125-1.344zM0 6.324v14.228L11.719 25V10.77L0 6.324zm6.25 14.28L3.125 19.42v-1.687l3.125 1.186v1.687zM20.313 8.102v3.96l-3.125 1.186v-3.96l-3.907 1.483V25L25 20.552V6.324l-4.688 1.778z"
        fill="#fff"
        fillOpacity={0.8}
      />
    </svg>
  );
}

export default SvgDashboardOrder;
