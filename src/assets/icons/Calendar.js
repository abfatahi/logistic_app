import * as React from "react";

function SvgCalendar(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.293 1.083H7.99V.755A.744.744 0 007.26 0a.744.744 0 00-.733.755v.328h-.751V.755A.744.744 0 005.042 0a.744.744 0 00-.733.755v.328h-.751V.755A.744.744 0 002.825 0a.744.744 0 00-.733.755v.328h-.384c-.643 0-1.166.523-1.166 1.166v6.585c0 .643.523 1.166 1.166 1.166h6.585c.643 0 1.166-.523 1.166-1.166V2.249c0-.643-.523-1.166-1.166-1.166zM6.938.755c0-.19.144-.343.32-.343.178 0 .322.153.322.343v1.343c0 .189-.144.343-.321.343-.177 0-.321-.154-.321-.343V.755zm-2.217 0c0-.19.144-.343.321-.343.177 0 .321.153.321.343v1.343c0 .189-.144.343-.321.343-.177 0-.321-.154-.321-.343V.755zm-2.217 0c0-.19.144-.343.32-.343.178 0 .322.153.322.343v1.343c0 .189-.144.343-.321.343-.177 0-.321-.154-.321-.343V.755zm6.269 8.08a.48.48 0 01-.48.48H1.708a.48.48 0 01-.48-.48V2.797h7.545v6.036z"
        fill="#fff"
        fillOpacity={0.8}
      />
      <path
        d="M3.106 4.013h-1.26v1.122h1.26V4.013zM4.789 4.013H3.528v1.122h1.26V4.013zM6.473 4.013H5.212v1.122h1.26V4.013zM8.156 4.013H6.895v1.122h1.26V4.013zM3.106 5.51h-1.26v1.121h1.26v-1.12zM4.789 5.51H3.528v1.121h1.26v-1.12zM6.473 5.51H5.212v1.121h1.26v-1.12zM8.156 5.51H6.895v1.121h1.26v-1.12zM3.106 7.007h-1.26v1.121h1.26v-1.12zM4.789 7.007H3.528v1.121h1.26v-1.12zM6.473 7.007H5.212v1.121h1.26v-1.12zM8.156 7.007H6.895v1.121h1.26v-1.12z"
        fill="#fff"
        fillOpacity={0.8}
      />
    </svg>
  );
}

export default SvgCalendar;