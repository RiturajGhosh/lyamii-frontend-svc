import React, { FC } from "react";
import { Button, Image, Col } from "react-bootstrap";
import style from "./BorderCard.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";

type BorderCardType = {
  title?: string;
  className?: string;
  text?: string;
  children?: React.ReactNode;
  imageAbove?: string;
  minHeight?: string;
  buttonColor?: string;
  titleStyling?: string;
  descriptionStyling?: string;
};
const BorderCard: FC<BorderCardType> = ({
  className,
  title,
  text,
  children,
  imageAbove,
  minHeight,
  titleStyling,
  descriptionStyling,
  buttonColor,
}) => {
  return (
    <div
      className={`${className} p-2 border-3 ${style.card} border-white`}
      style={{ minHeight: minHeight }}
    >
      {imageAbove && (
        <Image className="h-25 card-img-top p-0 rounded-3" src={imageAbove} />
      )}
      <div className="card-body">
        {title && (
          <h1 className={`${titleStyling} card-title text-secondary`}>
            {title}
          </h1>
        )}
        <button
          className={`btn btn-circle d-flex justify-items-center ${style.btmRght} ${buttonColor} p-4 ${style.navigationButton}`}
        >
          <Col xs={4} className="social-icons align-self-center w-100">
            <FaArrowRightLong />
          </Col>
        </button>
        {text && <p className={`${descriptionStyling} card-text`}>{text}</p>}
      </div>
      {children}
    </div>
  );
};

export default BorderCard;
