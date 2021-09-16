import * as React from "react";

function SvgGift(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 55 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#gift_svg__filter0_b)">
        <path
          d="M32.459 47.56c12.205 0 22.15-9.925 22.15-22.153 0-12.206-9.945-22.152-22.15-22.152-12.228 0-22.152 9.946-22.152 22.152 0 12.021 9.59 21.816 21.532 22.144l.62.009z"
          fill="url(#gift_svg__paint0_radial)"
        />
      </g>
      <path
        d="M40.047 20.389h-3.182a2.913 2.913 0 00-4.312-3.906 2.82 2.82 0 00-.515.747 2.825 2.825 0 00-.515-.747 2.913 2.913 0 00-4.312 3.906h-3.183a1.458 1.458 0 00-1.456 1.456v2.913a1.458 1.458 0 001.456 1.456v5.825a1.458 1.458 0 001.457 1.457H38.59a1.458 1.458 0 001.456-1.457v-5.825a1.458 1.458 0 001.457-1.456v-2.913a1.458 1.458 0 00-1.457-1.456zm-6.465-2.876a1.457 1.457 0 112.06 2.06c-.45.449-1.75.701-2.845.785.083-1.096.336-2.396.785-2.845zm-5.148 0a1.458 1.458 0 012.06 0c.449.45.701 1.75.785 2.845-1.095-.084-2.395-.336-2.845-.786a1.458 1.458 0 010-2.06zm11.613 7.245h-7.281v6.553a.728.728 0 01-1.456 0v-6.553h-7.282v-2.913h7.282v2.913h1.456v-2.913h7.281l.001 2.913z"
        fill="#fff"
      />
      <defs>
        <radialGradient
          id="gift_svg__paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(54.464 -3.788 10.897) scale(72.0341 72.033)"
        >
          <stop stopColor="#FF196E" />
          <stop offset={1} stopColor="#FF196E" stopOpacity={0} />
        </radialGradient>
        <filter
          id="gift_svg__filter0_b"
          x={-7.574}
          y={-14.626}
          width={80.064}
          height={80.067}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={8.94} />
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

export default SvgGift;
