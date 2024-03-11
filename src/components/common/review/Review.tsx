import React, { FC } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { review } from "../enum/reviews";
import { useHistory } from "react-router-dom";
const Review: FC = () => {
  const history = useHistory();
  return (
    <Col md={12} lg={12} className="position-relative">
      <Col className="py-5" id="#review">
        <Row className="my-5" onScroll={(e) => {}}>
          {review.map((option, idx) => (
            <Col className={"mx-5"} onClick={() => {}} key={idx} sm={3} xs={3}>
              <Card.Body className="p-0 px-5 align-items-center justify-content-center">
                <Row className="flex-nowrap">
                  <img
                    className={`p-0 m-0 h-50 justify-content-center`}
                    style={{
                      width: "40px",
                      padding: "0px !important",
                      margin: "0px !important",
                    }}
                    src={require("../../../Assets/invertedComma.png")}
                  />
                  <p className="w-100 text-dark text-center">{option.review}</p>
                  <img
                    className={`p-0 m-0 h-50 justify-content-center`}
                    style={{
                      width: "40px",
                      padding: "0px !important",
                      margin: "0px !important",
                    }}
                    src={require("../../../Assets/invertedComma.png")}
                  />
                </Row>
                <p className="text-wrap text-dark text-center">{option.name}</p>
              </Card.Body>
            </Col>
          ))}
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li className="page-item">
                <div
                  className="page-link text-decoration-none"
                  onClick={() => history.push("/reviews")}
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only"></span>
                </div>
              </li>
              <li className="page-item">
                <div
                  className="page-link text-decoration-none"
                  onClick={() => history.push("/reviews")}
                >
                  1
                </div>
              </li>
              <li className="page-item">
                <div
                  className="page-link text-decoration-none"
                  onClick={() => history.push("/reviews")}
                >
                  2
                </div>
              </li>
              <li className="page-item">
                <div
                  className="page-link text-decoration-none"
                  onClick={() => history.push("/reviews")}
                >
                  3
                </div>
              </li>
              <li className="page-item">
                <div
                  className="page-link text-decoration-none"
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
