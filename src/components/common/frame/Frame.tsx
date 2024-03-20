import React, { FC } from "react";
import style from "./Frame.module.scss";
import { Col } from "react-bootstrap";

const Frame: FC = () => {
  return (
    <Col sm={3} xs={3} sx={3} md={3} lg={3} className={style.border}>
      <div className={style.frame}></div>
    </Col>
  );
};

export default Frame;
