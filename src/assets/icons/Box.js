import * as React from "react";

function SvgBox(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 55 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#box_svg__filter0_b)">
        <path
          d="M32.46 47.56c12.207 0 22.153-9.924 22.153-22.153 0-12.206-9.946-22.152-22.152-22.152-12.229 0-22.153 9.947-22.153 22.152 0 12.021 9.59 21.816 21.533 22.144l.62.009z"
          fill="url(#box_svg__paint0_linear)"
          style={{
            mixBlendMode: "color-dodge",
          }}
        />
      </g>
      <path
        d="M42.045 20.537l-.006-.013-.004-.006a1.455 1.455 0 00-.543-.535l-8.01-4.506a1.466 1.466 0 00-1.428 0l-8.01 4.506a1.456 1.456 0 00-.545.538l-.005.007-.005.012a1.455 1.455 0 00-.187.712v8.979a1.459 1.459 0 00.742 1.269l8.01 4.506c.202.112.427.175.658.184.017 0 .034.002.05.003h.007a1.453 1.453 0 00.713-.187l8.01-4.506a1.457 1.457 0 00.742-1.27v-8.978c0-.25-.065-.497-.189-.715zm-9.277-3.79l7.258 4.082-2.787 1.584-7.344-4.05 2.873-1.616zm.083 8.159l-7.33-4.083 2.881-1.62 7.352 4.054-2.903 1.649zm.656 9.414l.072-8.153 2.923-1.66v3.465a.728.728 0 101.456 0V23.68l2.82-1.601v8.153l-7.27 4.09z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="box_svg__paint0_linear"
          x1={-32.499}
          y1={-7}
          x2={26.5}
          y2={116}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF1935" />
          <stop offset={1} stopColor="#BA4B58" stopOpacity={0} />
        </linearGradient>
        <filter
          id="box_svg__filter0_b"
          x={-2.712}
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

export default SvgBox;
