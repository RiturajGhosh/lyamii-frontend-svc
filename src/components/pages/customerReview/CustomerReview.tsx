import React, { FC } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { mapDescription, reviews } from "../../common/enum/enum";
import InvertedComma from "../../common/icon/invertedComma";
import style from './CustomerReview.module.scss'

const CustomerReviews: FC = () => {
  return (
    <Container
      className="home-about-section sectionContainer py-42"
      fluid
      id="about"
    >
      <Container>
        <Row className="d-flex justify-content-center">
          <div className="card-body w-25">
            {
              <p className="card-text text-orange ft-32">
                What our <span style={{ color: "#297568" }}>Customers</span>{" "}
                say?
              </p>
            }
          </div>
          <Row className="g-4">
            {reviews.map((review, idx) => (
              <Col key={idx}>
                <Card className={`${style.reviewCard}`}>
                  <Card.Body>
                    <Row className="d-flex justify-content-between">
                      <img
                        className="img-round mb-3"
                        style={{ width: "80px", height: "80px"}}
                        src="https://cdn.pixabay.com/photo/2016/08/05/15/06/tunnel-1572456_1280.jpg"
                      />
                      <InvertedComma className="w-25" />
                    </Row>
                    <p className={`${style.review} font-italic secondary overflow-hidden ft-16`}>
                      {review.review}
                    </p>
                    <Card.Title className="ft-16">{review.name}</Card.Title>
                    <Card.Text className="ft-16 secondary">
                      {"customer"}
                    </Card.Text>
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
