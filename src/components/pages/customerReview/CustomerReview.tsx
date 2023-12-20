import React, { FC } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { US } from "country-flag-icons/react/3x2";
import { reviews } from "../../common/enum/enum";
import style from "./CustomerReview.module.scss";
import avatar from "../../../Assets/avatar.png";

const CustomerReviews: FC = () => {
  return (
    <Container
      className="home-about-section sectionContainer py-42"
      fluid
      id="about"
    >
      <Container className="p-0">
        <Row className="d-flex justify-content-center">
          <div className="card-body w-25">
            {
              <span className="display-2 float-right text-white fw-bold">
                Reviews
              </span>
            }
          </div>
          <Row className="g-4">
            {reviews.map((review, idx) => (
              <Col md={6} lg={4} className={"mt-4 mx-0"} key={idx}>
                <Card className={`p-0 m-0 ${style.reviewCard}`}>
                  <Card.Body>
                    <Row className="d-flex my-4 flex-row flex-nowrap position-relative justify-content-between">
                      <Col className="col-5">
                        <img
                          className="mb-3"
                          style={{ width: "calc(0.1* 100vh)", height: "calc(0.1* 100vh)"}}
                          src={avatar}
                        />
                      </Col>
                      <Col className="col-5">
                        <US
                          title="United States"
                          className=""
                        />
                      </Col>
                    </Row>
                    <p
                      className={`${style.review} small overflow-hidden font-italic overflow-hidden p`}
                    >
                      {review.review}
                    </p>
                    <span className="text-italic h3 float-right">
                      {review.name}
                    </span>
                    {/* <Card.Text className="small">
                      {"customer"}
                    </Card.Text> */}
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
