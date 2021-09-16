import * as React from "react";

function SvgLocationEllipse(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 468 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M466 42.5c0 2.132-1.183 4.496-4.082 7.07-2.89 2.565-7.269 5.133-13.096 7.635-11.638 4.998-28.602 9.544-49.716 13.38C356.91 78.247 298.535 83 234 83S111.09 78.248 68.894 70.584C47.78 66.75 30.816 62.203 19.178 57.205c-5.827-2.502-10.206-5.07-13.096-7.636C3.182 46.996 2 44.632 2 42.5c0-2.132 1.183-4.496 4.082-7.07 2.89-2.565 7.27-5.133 13.096-7.635 11.638-4.998 28.602-9.544 49.716-13.38C111.09 6.753 169.465 2 234 2s122.91 4.752 165.106 12.416c21.114 3.835 38.078 8.381 49.716 13.379 5.827 2.502 10.206 5.07 13.096 7.636C464.817 38.004 466 40.368 466 42.5z"
        stroke="url(#LocationEllipse_svg__paint0_radial)"
        strokeWidth={4}
      />
      <defs>
        <radialGradient
          id="LocationEllipse_svg__paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(220.49985 72.50007 -357.09206 1086.05056 -56.5 42)"
        >
          <stop stopColor="#FF7B0D" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default SvgLocationEllipse;
