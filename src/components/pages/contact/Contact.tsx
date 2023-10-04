import React, { FC } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { mapDescription } from "../../common/enum/enum";
import InvertedComma from "../../common/icon/invertedComma";

const Contact: FC = () => {
  return (
    <Container
      className="home-about-section sectionContainer py-42"
      fluid
      id="about"
    >
      <Container>
        <Card style={{}}>
          <Card.Body>
            <Row className="justify-content-between p-4">
              <Col md={3}>
                <p className="font-italic secondary ft-20">Still Confused</p>
                <p className="w-100 border-bottom border-2 border-danger"></p>
                <Card.Title className="ft-32 d-flex">Let Us Solve Your Problem</Card.Title>
              </Col>
              <Col md={4} className="justify-content-center d-flex align-items-center flex-column">
                <Card.Title className="ft-32 d-flex">{'+91 9339898844'}</Card.Title>
                <Card.Text className="ft-20 secondary">{'feel free to share your problem or opinion'}</Card.Text>
              </Col>
              <Col md={3} className="align-self-center justify-content-end d-flex">
              <Button variant="danger" className="ft-20">Contact us</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};

export default Contact;
