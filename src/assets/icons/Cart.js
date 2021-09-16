import * as React from "react";

function SvgCart(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 55 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#cart_svg__filter0_b)">
        <path
          d="M32.46 47.56c12.207 0 22.153-9.924 22.153-22.152 0-12.207-9.946-22.153-22.152-22.153-12.229 0-22.153 9.947-22.153 22.153 0 12.02 9.59 21.815 21.533 22.144l.62.008z"
          fill="url(#cart_svg__paint0_linear)"
        />
      </g>
      <path
        d="M27.914 31.311a1.94 1.94 0 00-1.933 1.942 1.94 1.94 0 001.933 1.942 1.947 1.947 0 001.941-1.942 1.947 1.947 0 00-1.941-1.942zm-5.826-15.534v1.942h1.942l3.495 7.369-1.31 2.378a1.877 1.877 0 00-.243.933c0 1.068.874 1.941 1.942 1.941h11.65V28.4H28.321a.24.24 0 01-.242-.243l.029-.117.874-1.582h7.233c.728 0 1.369-.398 1.699-1l3.476-6.301a.974.974 0 00-.854-1.437h-14.36l-.913-1.942h-3.175zm15.535 15.534a1.94 1.94 0 00-1.932 1.942 1.94 1.94 0 001.931 1.942 1.947 1.947 0 001.942-1.942 1.947 1.947 0 00-1.941-1.942z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="cart_svg__paint0_linear"
          x1={10.001}
          y1={9}
          x2={30.5}
          y2={52}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#902F92" stopOpacity={0.77} />
          <stop offset={1} stopColor="#DE60E0" stopOpacity={0} />
        </linearGradient>
        <filter
          id="cart_svg__filter0_b"
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

export default SvgCart;
