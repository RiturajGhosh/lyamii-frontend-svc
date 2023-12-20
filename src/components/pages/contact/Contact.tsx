import React, { FC } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";

const Contact: FC = () => {
  return (
    <Container
      className="home-about-section sectionContainer m-0 px-0 pt-42"
      fluid
      id="about"
    >
      <Container className="p-0">
        <Card className="m-0 p-0" style={{ background: "#f2e7cf" }}>
          <Card.Body>
            <Row className="justify-content-between">
              <Col md={4}>
                <span className="display-5" style={{ color: "#266d59" }}>
                  Any Quarries !!
                </span>
                <p
                  className="w-100 border-bottom border-2 border-danger"
                  style={{ borderColor: "#c6877c" }}
                ></p>
                <span
                  className="display-6 d-flex justify-content-center"
                  style={{ color: "#c6877c" }}
                >
                  We are just one
                </span>{" "}
                <span
                  className="display-6 d-flex justify-content-center"
                  style={{ color: "#c6877c" }}
                >
                  click awaY.
                </span>
              </Col>
              <Col
                md={4}
                className="justify-content-center d-flex align-items-center flex-column"
              >
                <Row className="p-0 m-0 w-100 flex-row d-flex">
                  <Col className="rounded-circle green w-50 h-100 d-grid">
                    <Image
                      className={`flex-grow-1 p-0 img-fluid w-100 h-75 p-2 m-2 d-flex align-self-center justify-self-center`}
                      src={require("../../../Assets/gmail.png")}
                    />
                  </Col>
                  <Col className="rounded-circle green w-50 d-grid">
                    <Image
                      className={`flex-grow-1 p-0 img-fluid w-100 h-75 p-2 m-2 d-flex align-self-center justify-self-center`}
                      src={require("../../../Assets/telephone.png")}
                    />
                  </Col>
                </Row>
              </Col>
              <Col
                md={4}
                className="d-flex align-self-center flex-column position-relative"
              >
                <Row>
                  <Col className="p-0 m-0 col-10">
                    <span
                      className="h2 p-0 mx-4 m-0 d-flex lh-1 justify-content-end"
                      style={{ color: "#266d59" }}
                    >
                      schedule
                    </span>
                    <span
                      className="display-4 p-0 m-0 d-flex lh-1 justify-content-end"
                      style={{ color: "#c6877c" }}
                    >
                      callback
                    </span>{" "}
                    <p
                      className="w-100 border-bottom border-2 border-danger"
                      style={{ borderColor: "#266d59" }}
                    ></p>
                  </Col>
                </Row>
              </Col>
              <Col className="p-3 m-0 position-absolute top-0 end-0 w-10 h-20">
                <p
                  className="w-100 circle-core h-100"
                  style={{ background: "#8dc498" }}
                >
                  <Card.Img
                    className={`m-0 p-0 justify-content-center`}
                    style={{
                      padding: "0px !important",
                      margin: "0px !important",
                    }}
                    src={require("../../../Assets/A.png")}
                  />
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};

export default Contact;
