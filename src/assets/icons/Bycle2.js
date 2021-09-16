import * as React from "react";

function SvgBycle2(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 55 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#bycle2_svg__filter0_b)">
        <path
          d="M32.46 47.56c12.206 0 22.153-9.924 22.153-22.152 0-12.206-9.947-22.153-22.153-22.153-12.228 0-22.152 9.947-22.152 22.153 0 12.02 9.59 21.815 21.532 22.144l.62.008z"
          fill="url(#bycle2_svg__paint0_linear)"
        />
      </g>
      <path
        d="M36.374 18.032l-.733.39-3.743-3.376a2.032 2.032 0 00-2.308-.287l-2.324 1.236.95 1.787 2.324-1.235 3.206 2.882-4.3 2.285-.797-.723.993-.527-.95-1.788-4.47 2.376.95 1.788 1.565-.832 4.002 3.605-.599.318c-1.453-1.784-3.908-2.37-6.052-1.357-2.57 1.205-3.652 4.452-2.322 6.954 1.33 2.503 4.343 3.424 6.845 2.094 2.2-1.169 3.175-3.625 2.48-5.904l3.754-1.995c1.452 1.784 3.908 2.37 6.052 1.357 2.564-1.214 3.652-4.452 2.317-6.964-1.326-2.494-4.338-3.415-6.84-2.084zM29.23 28.707a2.985 2.985 0 01-1.57 3.127 3.007 3.007 0 01-4.107-1.256 3.007 3.007 0 011.256-4.107 2.985 2.985 0 013.471.448l-2.52 1.34.95 1.788 2.52-1.34zm4.663-4.772l-1.251.665-1.603-1.44 2.709-1.44a4.792 4.792 0 00.145 2.215zm6.28 1.247a3.007 3.007 0 01-4.106-1.256 3.011 3.011 0 01-.145-2.536l2.112 1.903 1.358-1.501-2.136-1.926c.018-.01.04-.032.067-.047a3.007 3.007 0 014.107 1.257 3.007 3.007 0 01-1.256 4.106zM35.4 33.453l-3.576 1.9 6.789-.17-.95-1.787 3.575-1.9-6.789.169.95 1.788z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="bycle2_svg__paint0_linear"
          x1={-1.5}
          y1={-10}
          x2={44}
          y2={63.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#44EB45" />
          <stop offset={1} stopColor="#2BE92C" stopOpacity={0} />
        </linearGradient>
        <filter
          id="bycle2_svg__filter0_b"
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

export default SvgBycle2;
