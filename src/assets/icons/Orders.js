import * as React from "react";

function SvgOrders(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={19} cy={19} r={19} fill="#9696A6" />
      <path
        d="M18.256 18.115L9.27 14.332a.195.195 0 00-.271.18v10.113c0 .256.156.486.393.58l8.714 3.486a.195.195 0 00.268-.181V18.295a.195.195 0 00-.12-.18zM19.076 17.04l8.684-3.656a.195.195 0 00.007-.357l-8.503-3.968a.625.625 0 00-.528 0l-8.503 3.967a.195.195 0 00.007.357l8.684 3.657c.049.02.103.02.152 0zM24.625 19c1.653 0 3.141.717 4.171 1.856.072.08.204.029.204-.079v-6.265a.195.195 0 00-.271-.18l-8.985 3.783a.195.195 0 00-.119.18v3.312c0 .118.154.162.216.062A5.626 5.626 0 0124.625 19z"
        fill="#fff"
      />
      <path
        d="M24.625 20.25a4.38 4.38 0 00-4.375 4.375A4.38 4.38 0 0024.625 29 4.38 4.38 0 0029 24.625a4.38 4.38 0 00-4.375-4.375zm1.38 4.87a.625.625 0 01-.884.884l-.496-.495-.495.495a.623.623 0 01-.884 0 .625.625 0 010-.884l.495-.495-.495-.495a.625.625 0 01.884-.884l.495.495.496-.495a.625.625 0 11.884.883l-.496.496.496.495z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgOrders;
