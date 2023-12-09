import React, { FC } from "react";
import { Col } from "react-bootstrap";
import { FaCircle } from "react-icons/fa6";

type RoundButtonType = {
  className?: string;
  fill?: string;
  onClick?: Function;
  size?: string;
  text?: string;
  bordercolor?: string;
  background?: string;
};
const RoundButton: FC<RoundButtonType> = ({
  className,
  size = "70px",
  fill,
  onClick,
  text,
  bordercolor,
  background,
}) => {
  return (
    <Col className="position-relative p-0 m-0 h-100">
      <div className="active small text-dark position-absolute top-50 start-0 text-center w-100">
        {text}
      </div>
      {/* <Col className="align-items-center position-absolute p-0 m-0 top-50"> */}
      <FaCircle
        onClick={() => onClick && onClick()}
        fill={fill}
        size={size}
        style={{
          borderColor: `${bordercolor ? bordercolor : ""}`,
        }}
        className={className}
      />

      {/* </Col> */}
    </Col>
  );
};

export default RoundButton;
