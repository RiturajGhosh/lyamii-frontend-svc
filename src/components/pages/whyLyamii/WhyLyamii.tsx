import React, { FC, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { reasons } from "../../common/enum/enum";
import style from "./WhyLamii.module.scss";

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
        <Container className="w-100">
          <Col>
            <Col md={12} lg={5} className="card-body">
              <Col>
                <p className="card-text text-white fw-bold heading position-absolute px-5 text-shadow-dark">
                  Why
                </p>
                <Row className="">
                  <span
                    className="fw-bold display-1 w-100 py-4 d-flex text-shadow-light"
                    style={{ color: "#b64746" }}
                  >
                    Lyamii
                    <Card.Img
                      className={`w-15 h-100 p-2 m-0 justify-content-center`}
                      style={{
                        padding: "0px !important",
                        margin: "0px !important",
                      }}
                      src={require("../../../Assets/quesMark.png")}
                    />
                  </span>
                </Row>
              </Col>
            </Col>
            <Col md={12} lg={12} className="justify-content-between p-0 d-flex">
              <Row className="justify-content-center flex-wrap g-2 flex-row scrolling-wrapper-flexbox">
                {reasons.map((reason, idx) => (
                  <Col
                    key={idx}
                    md={3}
                    lg={3}
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
                      className={`bg-white form__input my-2 mx-1 flipcard shadow position-relative h-100 overflow-hidden p-0 m-0`}
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
                        <section className="bg-danger align-items-center m-0 d-flex h-100 p-2 w-100 back">
                          <Card.Body className="p-0 d-flex flex-column align-items-center align-self-center">
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
          </Col>
        </Container>
      </Container>
    </>
  );
};

export default WhyLyamii;
