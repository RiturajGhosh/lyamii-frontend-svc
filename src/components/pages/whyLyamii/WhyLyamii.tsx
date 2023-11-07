import React, { FC, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { mapDescription, reasons } from "../../common/enum/enum";
import fingerPrint from "../../../Assets/fingerprint.svg";
import style from "./WhyLamii.module.scss";
import { tours } from "../mockData/destinations";

const WhyLyamii: FC = () => {
  const [flipped, setFliped] = useState(false);
  const flip = () => {
    setFliped(!flipped);
  };
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
              {
                <p className="card-text text-secondary fw-bold title text-shadow-light">
                  Why
                </p>
              }
              {
                <h1 className="card-title text-warning fw-bold heading text-shadow-dark">
                  Lyamii ?
                </h1>
              }
            </Col>
            <Col md={12} lg={9} className="justify-content-between p-0 d-flex">
              <Row className="justify-content-center flex-wrap g-2 flex-row scrolling-wrapper-flexbox">
                {reasons.map((reason, idx) => (
                  <Col
                    key={idx}
                    md={6}
                    lg={6}
                    className={`d-flex mb-4 p-0 m-0 col-6`}
                  >
                    {/* <Card className={`my-2 box box-1 d-flex mx-1`}>
                      <Card.Body className="first p-0">
                        <Card.Img
                          className={`p-5 m-0 justify-content-center ${style.reasonCard}`}
                          style={{
                            // width: "100%",
                            padding: "0px !important",
                            margin: "0px !important",
                          }}
                          src={reason.img}
                        />
                        <Card.Img
                          className={`p-5 m-0 justify-content-center`}
                          style={{
                            padding: "0px !important",
                            margin: "0px !important",
                          }}
                          src={reason.img}
                        />
                        <Card.Body className="py-0"></Card.Body>
                      </Card.Body>
                      <section className="overflow-auto second">
                        <Card.Body className="pt-0">
                          <Card.Title className="bold p fw-bold">
                            {reason.title}
                          </Card.Title>
                          <Card.Text>{reason.description}</Card.Text>
                        </Card.Body>
                      </section>
                    </Card> */}
                    <div
                      className={`${style.reasonCard} bg-white my-2 mx-1 flipcard shadow position-relative h-100 overflow-hidden p-0 m-0`}
                    >
                      <div className="content position-relative p-0 m-0 h-100">
                        <Card.Body className="position-relative p-0 m-0 h-100 front">
                          <Card.Img
                            className={`m-0 justify-content-center ${style.reasonCard}`}
                            style={{
                              padding: "0px !important",
                              margin: "0px !important",
                            }}
                            src={reason.img}
                          />
                        </Card.Body>
                        <section className="bg-danger align-items-center m-0 d-flex h-100 w-100 back">
                          <Card.Body className="pt-0 p-4 d-flex flex-column align-items-center align-self-center">
                            <Card.Title className="bold p fw-bold">
                              {reason.title}
                            </Card.Title>
                            <Card.Text className="text-center small d-flex">
                              {reason.description}
                            </Card.Text>
                          </Card.Body>
                        </section>
                      </div>
                    </div>
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
