import React, { FC } from "react";
import { Col, Row, Card, Image } from "react-bootstrap";
import { review } from "../enum/reviews";
import { useHistory } from "react-router-dom";
const Review: FC = () => {
  const history = useHistory();
  return (
    <Col md={12} lg={12} className="position-relative">
      <Col className="" id="#review">
        <Row className="justify-content-center" onScroll={(e) => {}}>
          {review.map((option, idx) => (
            <Col xs={12} sm={6} md={6} lg={4} className={""} onClick={() => {}} key={idx}>
              <Col className="p-0 align-items-center justify-content-center">
                <Row className="flex-nowrap">
                  <Image
                    className={`p-0 m-0 h-50 justify-content-center`}
                    style={{
                      width: "40px",
                      padding: "0px !important",
                      margin: "0px !important",
                    }}
                    src={require("../../../Assets/invertedComma.png")}
                  />
                  <p style={{flex:"auto"}} className="justify-content-center small text-dark d-flex text-center">{option.review}</p>
                  <Image
                    className={`p-0 m-0 h-50 justify-content-center`}
                    style={{
                      width: "40px",
                      padding: "0px !important",
                      margin: "0px !important",
                    }}
                    src={require("../../../Assets/invertedComma.png")}
                  />
                </Row>
              </Col>
              <Col>
                <p className="text-wrap text-dark text-center">{option.name}</p>
              </Col>
            </Col>
          ))}
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li className="page-item">
                <div
                  className="page-link pointer text-decoration-none"
                  onClick={() => history.push("/reviews")}
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only"></span>
                </div>
              </li>
              <li className="page-item">
                <div
                  className="page-link pointer text-decoration-none"
                  onClick={() => history.push("/reviews")}
                >
                  1
                </div>
              </li>
              <li className="page-item">
                <div
                  className="page-link pointer text-decoration-none"
                  onClick={() => history.push("/reviews")}
                >
                  2
                </div>
              </li>
              <li className="page-item">
                <div
                  className="page-link pointer text-decoration-none"
                  onClick={() => history.push("/reviews")}
                >
                  3
                </div>
              </li>
              <li className="page-item">
                <div
                  className="page-link pointer text-decoration-none"
                  onClick={() => history.push("/reviews")}
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only"></span>
                </div>
              </li>
            </ul>
          </nav>
        </Row>
      </Col>
    </Col>
  );
};

export default Review;
