import React, { CSSProperties, FC } from "react";
import { Col } from "react-bootstrap";
import Icon from "../icon/Icon";

type subCardType = {
  title?: string;
  className?: string;
  titleStyling?: CSSProperties;
  iconClassName?: string;
  iconStyling?: CSSProperties;
  cardColor?: string;
  titleClassName?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  icon?: string;
  fill?: string;
  img?: string;
  fontSize?: string;
};
const SubCard: FC<subCardType> = ({
  title,
  children,
  fill,
  iconStyling,
  style,
  titleClassName,
  iconClassName,
  icon,
  img,
  cardColor = "bg-light-grey",
  className,
  titleStyling,
  fontSize,
}) => {
  return (
    <Col className={`${className ? className : "my-3"}`} style={style}>
      <div
        className={`form__input-group border-1 border m-0 h-100 p-0`}
        style={{ background: cardColor }}
      >
        {titleStyling && (
          <div
            style={titleStyling}
            className={`form__input-label d-flex align-items-center justify-content-center border-1 border rounded ${titleClassName}`}
          >
            {icon && (
              <Icon
                className={iconClassName ? iconClassName : ""}
                fill={fill && fill}
                style={iconStyling ? iconStyling : {}}
                name={icon}
              />
            )}
            {img && (
              <img
                className={`w-20 h-10`}
                style={{
                  padding: "0px !important",
                  margin: "0px !important",
                }}
                alt={""}
                src={img}
              />
            )}
            {title}
          </div>
        )}
        <div className="form__input" style={{ background: cardColor }}>
          {children}
        </div>
      </div>
    </Col>
  );
};

export default SubCard;
