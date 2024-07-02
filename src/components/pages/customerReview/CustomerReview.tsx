import React, { FC, useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { US } from "country-flag-icons/react/3x2";
import style from "./CustomerReview.module.scss";
import avatar from "../../../Assets/avatar.png";
import { useSelector } from "react-redux";
import { selectCustomerReview } from "../../../state/selectors/selectCustomerReview";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CustomerReviews: FC = () => {
  const reviews = useSelector(selectCustomerReview);
  const [page, setPage] = useState(0);
  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <Col className="flex-column home-about-section align-self-start d-flex min-vh-100 justify-content-center sectionContainer pt-42">
      <Col lg={12} md={12} sx={12} xs={12} className="align-self-start d-flex">
        <Card.Body className="p-0 m-0 justify-content-center">
          <Row className="justify-content-between d-flex p-0 m-0 px-sm-5">
            <div className="card-body w-25">
              {
                <span
                  className="display-2 text-shadow-dark float-left text-white fw-bold"
                  style={{ fontFamily: "LeagueGothic" }}
                >
                  Reviews
                </span>
              }
            </div>
            <Row className="g-5 pb-5">
              {reviews.customerReviews
                .slice(6 * page, 6 * (page + 1))
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

            <Row className="gh-5 pb-5 mt-0 justify-content-end">
              <IoIosArrowBack
                className={"d-flex align-items-center"}
                size={40}
                style={{ width: "10%" }}
                onClick={(e) => {
                  page > 0 && setPage(page - 1);
                }}
              />
              {[...Array(reviews.customerReviews?.length % 6)].map(
                (review: any, idx: number) => (
                  <Button
                    style={{ width: "1%" }}
                    className={
                      "text-center d-flex align-items-center justify-content-center mx-0 border border-2 position-relative"
                    }
                    onClick={(e) => {
                      setPage(idx);
                    }}
                    key={idx}
                  >
                    {idx}
                  </Button>
                )
              )}

              <IoIosArrowForward
                size={40}
                className={" d-flex align-items-center "}
                style={{ width: "10%" }}
                onClick={(e) => {
                  page < reviews.customerReviews?.length % 6 &&
                    setPage(page + 1);
                }}
              />
            </Row>
          </Row>
        </Card.Body>
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
export default CustomerReviews;
