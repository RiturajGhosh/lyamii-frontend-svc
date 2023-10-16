import React, { FC } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { reviews } from "../../common/enum/enum";
import InvertedComma from "../../common/icon/invertedComma";
import style from './CustomerReview.module.scss'
import avatar from '../../../Assets/avatar.png';

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
              <p className="card-text heading text-orange fw-bold text-shadow-dark ft-32">
                Clients <span style={{ color: "#297568" }}>Testimonials</span>{" "}
              </p>
            }
          </div>
          <Row className="g-4">
            {reviews.map((review, idx) => (
              <Col md={6} lg={4} className={'mt-4'} key={idx}>
                <Card className={`${style.reviewCard}`}>
                  <Card.Body>
                    <Row className="d-flex justify-content-between">
                      <img
                        className="mb-3"
                        style={{ width: "180px", height: "180px"}}
                        src={avatar}
                      />
                      <InvertedComma className="w-25" />
                    </Row>
                    <p className={`${style.review} small font-italic overflow-hidden p`}>
                      {review.review}
                    </p>
                    <Card.Title className="small">{review.name}</Card.Title>
                    <Card.Text className="small">
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
