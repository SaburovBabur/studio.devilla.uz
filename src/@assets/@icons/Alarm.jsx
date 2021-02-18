import React from "react";

function Alarm(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="#2329D6"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      {...props}
    >
      {" "}
      <title id="alarmIconTitle">Alarm</title> <circle cx="12" cy="13" r="9" />{" "}
      <polyline points="12 8 12 13 15 16" /> <path d="M19 2L22 5M2 5L5 2" />{" "}
    </svg>
  );
}

export default Alarm;
