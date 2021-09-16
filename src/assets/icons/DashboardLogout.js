import * as React from "react";

function SvgDashboardLogout(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#dashboardLogout_svg__clip0)" fill="#fff">
        <path d="M15.625 13.542c-.576 0-1.042.467-1.042 1.042v4.166c0 .574-.466 1.042-1.042 1.042h-3.125V4.167a2.1 2.1 0 00-1.418-1.98l-.309-.103h4.852c.575 0 1.042.467 1.042 1.041V6.25a1.041 1.041 0 102.083 0V3.125A3.129 3.129 0 0013.541 0H2.345c-.04 0-.073.018-.112.023C2.182.02 2.134 0 2.083 0A2.085 2.085 0 000 2.084v18.75a2.1 2.1 0 001.419 1.98l6.268 2.09c.213.065.424.096.646.096a2.085 2.085 0 002.083-2.083v-1.042h3.125a3.129 3.129 0 003.125-3.125v-4.166c0-.575-.465-1.042-1.041-1.042z" />
        <path d="M24.695 9.68l-4.167-4.166a1.042 1.042 0 00-1.778.736v3.125h-4.167a1.042 1.042 0 000 2.084h4.167v3.125a1.042 1.042 0 001.778.737l4.167-4.168a1.04 1.04 0 000-1.472z" />
      </g>
      <defs>
        <clipPath id="dashboardLogout_svg__clip0">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgDashboardLogout;
