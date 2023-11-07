import React, { FC } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { HeaderList } from "../header/Header";
import { Link } from "react-router-dom";
import { communities, supports } from "../enum/enum";

type SwitchType = {
  isOn?: boolean;
  label1?: string;
  label2?: string;
};
const Switch: FC<SwitchType> = ({ isOn, label1, label2 }) => {
  return (
    <Card
      className="flex-row d-flex p-2 w-100 m-0"
      style={{ borderRadius: "45%" }}
    >
      <Col
        className={`border-1 p-1 text-center text-nowrap overflow-hidden ${isOn && "btn-warning w-100"}`}
        style={{ borderRadius: "45%" }}
      >
        {label1}
      </Col>
      <Col
        className={`border-1 text-center p-1 text-nowrap overflow-hidden ${!isOn && "btn-warning w-100"}`}
        style={{ borderRadius: "45%" }}
      >
        {label2}
      </Col>
    </Card>
  );
};

export default Switch;
