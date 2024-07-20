import React, { FC, useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { useHistory } from "react-router-dom";
import MainContainer from "../container/MainContainer";

const Cart: FC = () => {
  const screenSize = useSelector(selectScreenSize);
  const history = useHistory();
  return (
    <section className="bg-white d-flex flex-column">
      <Col className="flex-column align-self-center d-flex">
        <span className="fs-1 my-5 py-5 pl-4 text-decoration-underline col-12 text-dark fw-bold">
          Cart
        </span>
      </Col>{" "}
      <Col
        className="h3 justify-content-center d-flex m-5"
        style={{
          fontWeight: "700",
          padding: "20px",
          background: "#869cff",
          color: "white",
          margin: "50px",
        }}
      >
        No Tour Yet Selected
      </Col>
    </section>
  );
};

export default Cart;
