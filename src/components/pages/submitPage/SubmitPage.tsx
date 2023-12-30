import React, { FC } from "react";
import { Col } from "react-bootstrap";

const SubmitPage: FC = () => {
  return (
    <section
      style={{ background: "#b5f4c5" }}
      className="justify-content-center align-items-center d-flex"
    >
      <Col
        lg={10}
        className="min-vh-100 justify-content-center align-items-center d-flex"
      >
        <Col className="h1 bold text-white">Thanks for Submitting.</Col>
      </Col>
    </section>
  );
};

export default SubmitPage;
