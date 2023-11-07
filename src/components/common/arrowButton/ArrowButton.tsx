import React, { FC } from "react";
import { AiFillRightCircle } from "react-icons/ai";

type ArrowButtonType = {
  className?: string;
  fill?: string;
  onClick: Function;
  size?: string;
};
const ArrowButton: FC<ArrowButtonType> = ({
  className,
  size = "70px",
  fill,
  onClick,
}) => {
  return (
    <AiFillRightCircle
      onClick={() => onClick()}
      fill={fill}
      size={size}
      className={className}
    />
  );
};

export default ArrowButton;
