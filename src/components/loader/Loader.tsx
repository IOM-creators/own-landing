import React from "react";

const Loader = () => (
  <div>
    <Spinner />
    <h4 className="mt-4 text-center">Loading...</h4>
  </div>
);

const Spinner = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ margin: "auto", background: "none", display: "block" }}
    width="50px"
    height="50px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="#333"
      strokeWidth="10"
      r="35"
      strokeDasharray="164.93361431346415 56.97787143782138"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        keyTimes="0;1"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>
);

export default Loader;
