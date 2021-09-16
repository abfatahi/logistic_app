import * as React from "react";

function SvgLocationBlue(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 55 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#locationBlue_svg__filter0_b)">
        <path
          d="M32.46 47.56c12.206 0 22.153-9.924 22.153-22.152 0-12.207-9.947-22.153-22.153-22.153-12.228 0-22.152 9.947-22.152 22.153 0 12.02 9.59 21.815 21.532 22.144l.62.008z"
          fill="url(#locationBlue_svg__paint0_linear)"
        />
      </g>
      <path
        d="M32.04 15.777a6.791 6.791 0 00-6.797 6.796c0 1.69.486 3.272 1.37 4.7.922 1.494 2.135 2.776 3.067 4.271.457.729.787 1.408 1.136 2.195.253.534.457 1.456 1.224 1.456.767 0 .97-.922 1.213-1.456.36-.787.68-1.466 1.136-2.195.932-1.485 2.146-2.767 3.068-4.272.893-1.427 1.379-3.01 1.379-4.699a6.791 6.791 0 00-6.796-6.796zm0 9.466a2.428 2.428 0 11.001-4.856 2.428 2.428 0 01-.001 4.856z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="locationBlue_svg__paint0_linear"
          x1={3.5}
          y1={-23}
          x2={-15}
          y2={39.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B5DFE" />
          <stop offset={1} stopColor="#4B5DFE" stopOpacity={0} />
        </linearGradient>
        <filter
          id="locationBlue_svg__filter0_b"
          x={-2.713}
          y={-9.765}
          width={70.346}
          height={70.346}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={6.51} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgLocationBlue;
