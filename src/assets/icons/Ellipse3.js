import * as React from "react";

function SvgEllipse3(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 444 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M442.5 32c0 1.457-1.035 3.223-3.874 5.223-2.787 1.963-6.994 3.918-12.556 5.813-11.104 3.784-27.253 7.216-47.306 10.107C338.68 58.92 283.255 62.5 222 62.5c-61.255 0-116.68-3.58-156.764-9.357-20.053-2.89-36.202-6.323-47.306-10.107-5.562-1.895-9.769-3.85-12.556-5.813C2.535 35.223 1.5 33.457 1.5 32c0-1.457 1.035-3.223 3.874-5.223 2.787-1.963 6.994-3.918 12.556-5.813 11.104-3.784 27.253-7.216 47.306-10.107C105.32 5.08 160.745 1.5 222 1.5c61.255 0 116.68 3.58 156.764 9.357 20.053 2.89 36.202 6.323 47.306 10.107 5.562 1.895 9.769 3.85 12.556 5.813 2.839 2 3.874 3.766 3.874 5.223z"
        stroke="url(#Ellipse3_svg__paint0_radial)"
        strokeWidth={3}
      />
      <defs>
        <radialGradient
          id="Ellipse3_svg__paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(81.00003 46.89649 -216.40756 373.78107 -20 52.965)"
        >
          <stop stopColor="#D66506" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default SvgEllipse3;
