import React, { FC } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { mapDescription } from "../../common/enum/enum";

const CustomerReviews: FC = () => {
  return (
    <Container className="home-about-section py-4" fluid id="about">
      <Container>
        <Row>
          <div className="card-body w-25">
            {
              <p className="card-text text-primary ft-32">
                What our Customers say?
              </p>
            }
          </div>
          <Row className="g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
              <Col key={idx}>
                <Card style={{}}>
                  <Card.Body>
                    <img
                      className="img-round w-25 h-25 mb-3"
                      src="https://cdn.pixabay.com/photo/2016/08/05/15/06/tunnel-1572456_1280.jpg"
                    />
                    <p className="font-italic secondary ft-16">{mapDescription}</p>
                    <Card.Title className="ft-16">Card title</Card.Title>
                    <Card.Text className="ft-16 secondary">{mapDescription}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Row>
      </Container>
    </Container>
  );
};

export default CustomerReviews;
