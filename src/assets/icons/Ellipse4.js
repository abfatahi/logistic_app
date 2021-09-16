import * as React from "react";

function SvgEllipse4(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 233 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M231.5 25c0 1.219-.569 2.552-1.952 4.003-1.39 1.458-3.515 2.936-6.382 4.39-5.728 2.907-14.115 5.567-24.603 7.818-20.951 4.496-49.965 7.289-82.063 7.289-32.097 0-61.112-2.793-82.063-7.289-10.488-2.25-18.875-4.911-24.603-7.818-2.867-1.454-4.992-2.932-6.382-4.39C2.07 27.553 1.5 26.22 1.5 25c0-1.219.569-2.552 1.952-4.003 1.39-1.458 3.515-2.936 6.382-4.39 5.728-2.907 14.115-5.567 24.603-7.818C55.388 4.293 84.403 1.5 116.5 1.5c32.098 0 61.112 2.793 82.063 7.289 10.488 2.25 18.875 4.911 24.603 7.818 2.867 1.454 4.992 2.932 6.382 4.39 1.383 1.45 1.952 2.784 1.952 4.003z"
        stroke="url(#Ellipse4_svg__paint0_radial)"
        strokeWidth={3}
      />
      <defs>
        <radialGradient
          id="Ellipse4_svg__paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(27.91 -78.302 -100.178) scale(114.295 518.065)"
        >
          <stop stopColor="#FF7B0D" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default SvgEllipse4;
