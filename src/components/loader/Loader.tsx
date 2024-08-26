import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <h2 className="mt-4 text-center">
        <span>I</span>
        <span>O</span>
        <span>M</span>
      </h2>
    </div>
  );
};

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
