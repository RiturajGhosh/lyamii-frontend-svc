import React, { FC } from "react";
import destinationMap from "../../../Assets/map.jpg";
const MaskedImage: FC = () => {
  return (
    <div className="curve-container b400 bundle-bb-curve-container">
      <div className="wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 280 388"
        >
          <pattern
            id="img1"
            patternUnits="userSpaceOnUse"
            width="100"
            style={{ backgroundImage: "no-repeat", backgroundSize: "100%" }}
            height="100"
          >
            <image
              className="background-no-repeat"
              href={destinationMap}
              x="0"
              y="0"
              width="100"
              height="100"
            />
          </pattern>
          <path
            fill="url(#img1)"
            d="M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4
    c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6
    c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8
    C48.9,198.6,57.8,191,51,171.3z"
          ></path>
        </svg>
      </div>
      <div className="curve-three plain container-fluid">
        <div className="row"> </div>
      </div>
    </div>
  );
};

export default MaskedImage;
