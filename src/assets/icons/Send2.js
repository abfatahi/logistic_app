import * as React from "react";

function SvgSend2(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 55 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#send2_svg__filter0_b)">
        <path
          d="M32.46 47.56c12.206 0 22.153-9.924 22.153-22.152 0-12.206-9.947-22.153-22.153-22.153-12.228 0-22.152 9.947-22.152 22.153 0 12.02 9.59 21.815 21.532 22.144l.62.008z"
          fill="url(#send2_svg__paint0_linear)"
        />
      </g>
      <path
        d="M41.102 15.898a1.438 1.438 0 00-1.407-.367l-16.74 4.722a1.438 1.438 0 00-.226 2.683l7.002 3.316 4.787-4.787a.719.719 0 111.017 1.017l-4.787 4.787 3.316 7.002a1.425 1.425 0 001.42.817 1.426 1.426 0 001.263-1.043l4.721-16.74a1.44 1.44 0 00-.367-1.407z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="send2_svg__paint0_linear"
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
          id="send2_svg__filter0_b"
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

export default SvgSend2;
