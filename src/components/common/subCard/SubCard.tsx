import React, { FC } from "react";
import { Col } from "react-bootstrap";

type subCardType = {
  title?: string;
  className?: string;
  titleStyling?: string;
  cardColor?: string;
  children?: React.ReactNode;
};
const SubCard: FC<subCardType> = ({
  title,
  children,
  cardColor="bg-light-grey",
  className,
  titleStyling = "title",
}) => {
  return (
    <Col className={`${className ? className : "my-3"}`}>
      <div className="form__input-group border-1 border m-0 h-100 p-0" style={{ background: cardColor }}>
        <div
          className={`form__input-label border-1 border rounded ${titleStyling}`}
        >
          {title}
        </div>
        <div className="form__input" style={{ background: cardColor }}>
          {children}
        </div>
      </div>
    </Col>
  );
};

export default SubCard;
