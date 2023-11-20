import React, { FC } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

const Contact: FC = () => {
  return (
    <Container
      className="home-about-section sectionContainer m-0 pt-42"
      fluid
      id="about"
    >
      <Container>
        <Card style={{}}>
          <Card.Body>
            <Row className="justify-content-between p-4">
              <Col md={4}>
                <span className="secondary display-5">Any Quarries !!</span>
                <p className="w-100 border-bottom border-2 border-danger"></p>
                <span className="display-6 d-flex justify-content-center">
                  We are just one
                </span>{" "}
                <span className="display-6 d-flex justify-content-center">
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
              <Col md={4} className="d-flex flex-column">
                <span className="secondary h2 p-0 m-0 d-flex float-right">
                  schedule
                </span>
                <span className="display-4 float-right p-0 m-0 d-flex justify-content-end">
                  callback
                </span> <p className="w-100 border-bottom border-2 border-danger"></p>
               
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};

export default Contact;
