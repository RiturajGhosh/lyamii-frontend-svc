import { FC } from "react";

const Wave: FC = () => {
  return (
    <div className="curve-container b400 bundle-bb-curve-container">
      <svg
        className="curve-container__curve curve-three"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 235"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          className="plain fill-"
          fill="#f9f8f4 "
          id="Path"
          d="M0,192L40,197.3C80,203,160,213,240,197.3C320,181,400,139,480,149.3C560,160,640,224,720,224C800,224,880,160,960,160C1040,160,1120,224,1200,234.7C1280,245,1360,203,1400,181.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <div className="curve-three plain container-fluid">
        <div className="row"> </div>
      </div>
    </div>
  );
};

export default Wave;
