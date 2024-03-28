import React, { FC } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { US } from "country-flag-icons/react/3x2";
import style from "./CustomerReview.module.scss";
import avatar from "../../../Assets/avatar.png";
import { useHistory } from "react-router-dom";
import { selectCustomerReview } from "../../../state/selectors/selectCustomerReview";
import { useSelector } from "react-redux";

const CustomerReviewSection: FC = () => {
  const history = useHistory();
  const reviews = useSelector(selectCustomerReview);
  return (
    <Col
      className="home-about-section sectionContainer d-flex justify-content-center py-42"
      id="about"
    >
      <Col lg={11} md={11} sx={11} xs={11}>
        <Row className="d-flex justify-content-center">
          <div className="card-body w-25">
            {
              <span
                className="display-2 text-shadow-dark float-right text-white fw-bold"
                style={{ fontFamily: "LeagueGothic" }}
                onClick={() => history.push("/customerReviews")}
              >
                Reviews
              </span>
            }
          </div>
          <Row className="g-5">
            {reviews.customerReviews
              .slice(0, 3)
              .map((review: any, idx: number) => (
                <Col
                  md={6}
                  lg={4}
                  className={"mt-4 mx-0 position-relative"}
                  key={idx}
                >
                  <Col className="position-relative">
                    <Card className={`p-0 m-0 ${style.reviewCard}`}>
                      <Card.Body>
                        <Row className="d-flex my-4 col-11 flex-row flex-nowrap position-relative justify-content-between">
                          <Col className="col-5">
                            <img
                              className="mb-3"
                              style={{
                                width: "9dvi",
                                height: "9dvi",
                              }}
                              alt=""
                              src={avatar}
                            />
                          </Col>

                          <div className="col-4 position-absolute top-0 start-90 translate-middle-x pr-3">
                            <US title="United States" className="" />
                          </div>
                        </Row>
                        <Col className="">
                          <div
                            className={`${style.review} small overflow-hidden font-italic overflow-hidden`}
                            style={{
                              color: "black",
                            }}
                          >
                            {review.review}
                          </div>
                          <div
                            className="text-italic h3 float-right"
                            style={{ color: "#213D66", fontFamily: "Alice" }}
                          >
                            {review.name}
                          </div>
                        </Col>
                      </Card.Body>
                    </Card>
                  </Col>
                </Col>
              ))}
          </Row>
        </Row>
      </Col>
    </Col>
  );
};

// {reviews.map((review, idx) => (
//   <Col md={6} lg={4} className={"mt-4 mx-0"} key={idx}>
//     <Col
//       className={`p-0 m-0 ${style.reviewCard}`}
//       style={{ background: "#8dc498" }}
//     >
//       <Card.Body>
//         <Row className="d-flex bg-white shadow col-11 p-4 flex-row flex-nowrap position-relative justify-content-between">
//           <Col className="col-5">
//             <img
//               className="mb-3"
//               style={{
//                 width: "calc(0.1* 100vh)",
//                 height: "calc(0.1* 100vh)",
//               }}
//               src={avatar}
//             />
//           </Col>
//           <div className="col-5 position-absolute top-50 start-100 h3 translate-middle">
//             <US title="United States" className="" />
//           </div>
//         </Row>
//         <Col className="col-11 p-4 bg-white">
//           <span
//             className={`${style.review} fs-medium overflow-hidden font-italic overflow-hidden`}
//           >
//             {review.review}
//           </span>
//           <span className="text-italic h3 float-right">
//             {review.name}
//           </span>
//         </Col>
//         {/* <Card.Text className="small">
//           {"customer"}
//         </Card.Text> */}
//       </Card.Body>
//     </Col>
//   </Col>
// ))}
export default CustomerReviewSection;
