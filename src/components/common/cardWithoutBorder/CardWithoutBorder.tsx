import React, { FC } from "react";
import { Image } from "react-bootstrap";
import style from "./CardWithoutBorder.module.scss";

type CardWithoutBorderType = {
  title?: string;
  className?: string;
  text?: string;
  children?: React.ReactNode;
  imageAbove?: string;
  minHeight?: string;
};
const CardWithoutBorder: FC<CardWithoutBorderType> = ({
  className,
  title,
  text,
  children,
  imageAbove,
  minHeight,
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
        {title && <h1 className="card-title text-secondary">{title}</h1>}
        {text && <p className="card-text text-primary">{text}</p>}
      </div>
      {children}
    </div>
  );
};

export default CardWithoutBorder;
