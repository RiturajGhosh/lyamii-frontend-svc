import { FC } from "react";

const WalkingFingerSvg: FC = () => {
  return (
    <div className="curve-container b400 bundle-bb-curve-container">
      <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <defs>
          {" "}
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            {" "}
            <stop
              id="stop1"
              stop-color="rgba(248, 117, 55, 1)"
              offset="0%"
            ></stop>{" "}
            <stop
              id="stop2"
              stop-color="rgba(251, 168, 31, 1)"
              offset="100%"
            ></stop>{" "}
          </linearGradient>{" "}
        </defs>{" "}
        <path
          fill="none"
          d="M29.5,-31.1C35.6,-23.4,36,-11.7,35.8,-0.2C35.6,11.3,34.8,22.7,28.7,30.4C22.7,38.2,11.3,42.4,0.8,41.5C-9.7,40.7,-19.3,34.8,-26.2,27.1C-33.1,19.3,-37.2,9.7,-36.9,0.3C-36.5,-9,-31.7,-17.9,-24.8,-25.6C-17.9,-33.2,-9,-39.5,1.4,-40.9C11.7,-42.3,23.4,-38.7,29.5,-31.1Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="1"
          // style="transition: all 0.3s ease 0s;"
          stroke="url(#sw-gradient)"
        ></path>{" "}
      </svg>
      <div className="curve-three plain container-fluid">
        <div className="row"> </div>
      </div>
    </div>
  );
};

export default WalkingFingerSvg;
