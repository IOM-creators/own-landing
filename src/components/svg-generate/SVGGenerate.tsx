import React from "react";

interface ISVGGenerate {
  className?: string;
  name: string;
}
const SVGGenerate: React.FC<ISVGGenerate> = ({ className, name }) => {
  // Define a function that generates SVG content based on the provided shape.
  const generateSVG = (name: string) => {
    switch (name) {
      case "check":
        return (
          <svg
            className={className}
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18" cy="18" r="18" fill="#0A2640" />
            <path
              className={className}
              d="M26 12L15 23L10 18"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case "eye":
        return (
          <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <g clip-path="url(#clip0_62_553)">
              <path
                className={className}
                d="M1.77502 12.6543C1.77502 12.6543 5.77502 4.6543 12.775 4.6543C19.775 4.6543 23.775 12.6543 23.775 12.6543C23.775 12.6543 19.775 20.6543 12.775 20.6543C5.77502 20.6543 1.77502 12.6543 1.77502 12.6543Z"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className={className}
                d="M12.775 15.6543C14.4319 15.6543 15.775 14.3112 15.775 12.6543C15.775 10.9974 14.4319 9.6543 12.775 9.6543C11.1182 9.6543 9.77502 10.9974 9.77502 12.6543C9.77502 14.3112 11.1182 15.6543 12.775 15.6543Z"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_62_553">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.775024 0.654297)"
                />
              </clipPath>
            </defs>
          </svg>
        );
      case "leaf":
        return (
          <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              className={className}
              d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z"
              stroke="#0A2640"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              className={className}
              d="M16 8L2 22"
              stroke="#0A2640"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              className={className}
              d="M17.5 15H9"
              stroke="#0A2640"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case "left-arrow":
        return (
          <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
          >
            <path
              className={className}
              d="M5 14H19"
              stroke="#0A2640"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              className={className}
              d="M12 7L19 14L12 21"
              stroke="#0A2640"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case "sun":
        return (
          <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_62_578)">
              <path
                className={className}
                d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className={className}
                d="M12 1V3"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className={className}
                d="M12 21V23"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className={className}
                d="M4.22 4.21997L5.64 5.63997"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className={className}
                d="M18.36 18.3601L19.78 19.7801"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className={className}
                d="M1 12H3"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className={className}
                d="M21 12H23"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className={className}
                d="M4.22 19.7801L5.64 18.3601"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className={className}
                d="M18.36 5.63997L19.78 4.21997"
                stroke="#0A2640"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_62_578">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );

      default:
        break;
    }
  };

  return <>{generateSVG(name)}</>;
};

export default SVGGenerate;
