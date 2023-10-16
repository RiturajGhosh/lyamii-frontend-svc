import React, { FC } from "react";
import { Card, Col, Image } from "react-bootstrap";

type CardWithShadowType = {
  col?: number;
  children?: React.ReactNode;
  classname?: string;
};
const CardWithShadow: FC<CardWithShadowType> = ({
  col,
  children,
  classname,
}) => {
  return (
    <Col md={col} className={classname}>
      <Card>
        <Card.Body>{children}</Card.Body>
      </Card>
    </Col>
  );
};

export default CardWithShadow;
