import React, { FC } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { mapDescription, reasons } from "../../common/enum/enum";
import fingerPrint from "../../../Assets/fingerprint.svg";
import style from './WhyLamii.module.scss'
const WhyLyamii: FC = () => {
  return (
    <>
    <div className={`${style.downImage} position-absolute`}></div>
    <Container
      className="home-about-section sectionContainer py-42 px-0"
      fluid
      id="about"
    >
      <Container>
        <Row>
          <Col md={12} lg={3} className="card-body m-auto">
            {<p className="card-text text-secondary fw-bold ft-32 text-shadow-light">Why</p>}
            {<h1 className="card-title text-warning fw-bold title text-shadow-dark">Lyamii ?</h1>}
          </Col>
          <Col md={12} lg={9} className="justify-content-between p-0 d-flex">
            <Row className="w-100 m-0 d-flex justify-content-center">
              {reasons.map((reason, idx) => (
                <Col key={idx}>
                  <Card
                  className={`${style.reasonCard} my-2 mx-1`}
                  >
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        className="p-0 m-0 justify-content-center"
                        style={{ width: "200px",padding: '0px !important', margin:'0px !important' }}
                        src={reason.img}
                      />
                      <Card.Body className="pt-0">
                        <Card.Title className="bold p fw-bold">{reason.title}</Card.Title>
                        <Card.Text>{reason.description}</Card.Text>
                      </Card.Body>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  );
};

export default WhyLyamii;
