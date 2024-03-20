import React, { CSSProperties, FC } from "react";
import { Card, Col } from "react-bootstrap";
import { FaCircle } from "react-icons/fa6";
import Icon from "../icon/Icon";

type RoundButtonType = {
  className?: string;
  fill?: string;
  onClick?: Function;
  size?: string;
  text?: string;
  style?: CSSProperties;
  img?: string;
  bordercolor?: string;
  background?: string;
  children?: any;
  icon?: string;
  iconStyling?: CSSProperties;
  iconClassName?: string;
};
const RoundButton: FC<RoundButtonType> = ({
  className,
  size = "70px",
  fill,
  onClick,
  style,
  text,
  bordercolor,
  img,
  icon,
  background,
  children,
  iconClassName,
  iconStyling,
}) => {
  return (
    <Col className="position-relative p-0 m-0 h-100">
      {text && (
        <div className="active small text-dark position-absolute top-50 start-0 text-center w-100">
          {text}
        </div>
      )}
      {icon && (
        <Icon
          className={iconClassName ? iconClassName : ""}
          fill={fill && fill}
          style={iconStyling ? iconStyling : {}}
          name={icon}
        />
      )}
      {img && (
        <Card.Img
          className={`active small text-dark position-absolute top-0 start-0 text-center w-100 rounded-circle p-1 h-100 justify-content-center`}
          style={{
            padding: "0px !important",
            margin: "0px !important",
            borderColor: `${bordercolor ? bordercolor : ""}`,
          }}
          src={img}
        />
      )}
      {children && (
        <Col
          className={`fs-20 col-6 text-white position-absolute top-0 start-0 text-center justify-content-center`}
        >
          {children}
        </Col>
      )}
      {/* <Col className="align-items-center position-absolute p-0 m-0 top-50"> */}
      <FaCircle
        onClick={() => onClick && onClick()}
        fill={fill}
        size={size}
        style={
          style
            ? style
            : {
                borderColor: `${bordercolor ? bordercolor : "border border-0"}`,
                background: "none",
              }
        }
        className={className}
      />

      {/* </Col> */}
    </Col>
  );
};

export default RoundButton;
