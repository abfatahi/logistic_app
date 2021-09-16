import * as React from "react";

function SvgEllipse(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 387 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M385 35.5c0 1.657-.908 3.551-3.266 5.665-2.351 2.108-5.934 4.236-10.736 6.318-9.587 4.159-23.584 7.95-41.033 11.152C295.099 65.032 246.851 69 193.5 69c-53.35 0-101.599-3.968-136.464-10.365-17.449-3.201-31.446-6.993-41.034-11.152-4.8-2.082-8.384-4.21-10.735-6.318C2.908 39.051 2 37.157 2 35.5s.908-3.551 3.267-5.665c2.351-2.108 5.934-4.236 10.735-6.318 9.588-4.159 23.585-7.95 41.034-11.152C91.901 5.968 140.15 2 193.5 2c53.351 0 101.599 3.968 136.465 10.365 17.449 3.201 31.446 6.993 41.033 11.152 4.802 2.082 8.385 4.21 10.736 6.318C384.092 31.949 385 33.843 385 35.5z"
        stroke="url(#Ellipse_svg__paint0_radial)"
        strokeWidth={4}
      />
      <defs>
        <radialGradient
          id="Ellipse_svg__paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(143.0648 136.0104 -670.28043 705.04558 49.936 -57.51)"
        >
          <stop stopColor="#FF7B0D" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default SvgEllipse;
