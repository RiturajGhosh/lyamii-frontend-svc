import React, { FC } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

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
              <Col md={4}>
                <p className="font-italic secondary p fw-bold">Get in touch</p>
                <p className="w-100 border-bottom border-2 border-danger"></p>
                <Card.Title className="small d-flex">
                  We believe in user experience and transparency, feel free to
                  get in touch. Our multilingual 24×7 help desk is always just
                  one click away.
                </Card.Title>
              </Col>
              <Col
                md={5}
                className="justify-content-center d-flex align-items-center flex-column"
              >
                <Card.Title className="heading d-flex">
                  {"+91 9339898844"}
                </Card.Title>
                <Card.Text className="ft-20 secondary text-center">
                  {"feel free to contact, we’re happy to assist you."}
                </Card.Text>
              </Col>
              <Col
                md={3}
                className="align-self-center justify-content-end d-flex"
              >
                <Button variant="danger" className="p">
                  Contact us
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};

export default Contact;
