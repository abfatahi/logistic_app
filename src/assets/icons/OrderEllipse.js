import * as React from "react";

function SvgOrderEllipse(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 387 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M385 52.5c0 6.184-4.646 12.568-14.286 18.752-9.548 6.125-23.497 11.716-40.913 16.44C295 97.136 246.809 103 193.5 103 140.191 103 92 97.135 57.198 87.693c-17.415-4.725-31.364-10.316-40.912-16.441C6.646 65.068 2 58.684 2 52.5c0-6.185 4.646-12.568 14.286-18.752 9.548-6.125 23.497-11.716 40.913-16.441C92 7.865 140.19 2 193.5 2 246.809 2 295 7.865 329.801 17.307c17.416 4.725 31.365 10.316 40.913 16.44C380.354 39.933 385 46.316 385 52.5z"
        stroke="url(#orderEllipse_svg__paint0_radial)"
        strokeWidth={4}
      />
      <defs>
        <radialGradient
          id="orderEllipse_svg__paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(54.577 107.399 5.873) scale(246.831 1150.55)"
        >
          <stop stopColor="#FF7B0D" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default SvgOrderEllipse;
