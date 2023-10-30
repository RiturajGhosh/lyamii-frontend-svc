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
  imageStyling?: string;
  descriptionStyling?: string;
  onClick?: Function;
};
const BorderCard: FC<BorderCardType> = ({
  className,
  title,
  text,
  children,
  imageAbove,
  minHeight,
  titleStyling,
  imageStyling,
  descriptionStyling,
  buttonColor,
  onClick
}) => {
  return (
    <div
      className={`${className} p-2 border-3 ${style.card}`}
      style={{ minHeight:'100%' }}
    >
      {imageAbove && (
        <Image className={`card-img-top p-0 rounded-3 ${imageStyling}`} src={imageAbove} />
      )}
      <div className="card-body">
        {title && (
          <h1 className={`${titleStyling} text-shadow-light fw-bold heading`}>
            {title}
          </h1>
        )}
        {children}
        {onClick && <button
          className={`btn btn-circle d-flex justify-items-center ${style.btmRght} ${buttonColor} p-4 ${style.navigationButton}`}
          onClick={()=>onClick && onClick()}
        >
          <Col xs={4} className="social-icons align-self-center w-100">
            <FaArrowRightLong />
          </Col>
        </button>}
        {text && <p className={`${descriptionStyling} card-text`}>{text}</p>}
      </div>
    </div>
  );
};

export default BorderCard;
