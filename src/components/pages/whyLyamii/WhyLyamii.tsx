import React, { FC } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { mapDescription, reasons } from "../../common/enum/enum";
import fingerPrint from "../../../Assets/fingerprint.svg";
import style from './WhyLamii.module.scss'
const WhyLyamii: FC = () => {
  return (
    <Container
      className="home-about-section sectionContainer py-42"
      fluid
      id="about"
    >
      <Container>
        <Row>
          <Col md={2} className="card-body m-auto w-25">
            {<p className="card-text text-secondary ft-32">So why</p>}
            {<h1 className="card-title text-warning ft-57">Lyamii ?</h1>}
          </Col>
          <Col md={8} className="justify-content-between d-flex">
            <Row className="w-100 m-0 d-flex justify-content-center">
              {reasons.map((reason, idx) => (
                <Col key={idx}>
                  <Card
                  className={`${style.reasonCard} my-2 mx-1`}
                  >
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        className=""
                        style={{ width: "200px" }}
                        src={reason.img}
                      />
                      <Card.Body>
                        <Card.Title className="bold">{reason.title}</Card.Title>
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
  );
};

export default WhyLyamii;
