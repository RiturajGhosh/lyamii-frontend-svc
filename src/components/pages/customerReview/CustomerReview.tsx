import React, { FC, useEffect, useState } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import { US } from "country-flag-icons/react/3x2";
import style from "./CustomerReview.module.scss";
import avatar from "../../../Assets/avatar.png";
import { useSelector } from "react-redux";
import { selectCustomerReview } from "../../../state/selectors/selectCustomerReview";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import FormInput from "../../common/formInput/FormInput";

const CustomerReviews: FC = () => {
  const reviews = useSelector(selectCustomerReview);
  const [page, setPage] = useState(0);
  useEffect(() => {
    console.log(page);
  }, [page]);
  const numPages = Math.ceil(reviews.customerReviews?.length / 6);
  const [add, setAdd] = useState(false);

  return (
    <Col className="flex-column mt-5 home-about-section align-self-start d-flex min-vh-100 justify-content-center sectionContainer pt-42">
      <Col
        lg={12}
        md={12}
        sx={12}
        xs={12}
        className="align-self-start d-flex flex-column"
      >
        <Card.Body className="p-0 m-0 justify-content-center">
          <Row className="justify-content-between d-flex p-0 m-0 px-sm-5">
            <div className="card-body w-100">
              {
                <Col className="justify-content-between d-flex">
                  <span
                    className="display-2 text-shadow-dark float-left fw-bold"
                    style={{
                      fontFamily: "LeagueGothic",
                      color: "rgb(135, 157, 255)",
                    }}
                  >
                    Reviews
                  </span>
                  <Button
                    className="view-more-button justify-content-end align-self-end"
                    onClick={() => setAdd(true)}
                    style={{
                      backgroundColor: "#4A90E2",
                      fontSize: 15,
                      width: "120px",
                      fontWeight: "600",
                      color: "#FFFFFF",
                      border: "none",
                      borderRadius: 0,
                    }}
                  >
                    Add Review
                  </Button>
                </Col>
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
                                className="mb-3 rounded-circle"
                                style={{
                                  width: "9dvi",
                                  height: "9dvi",
                                }}
                                alt=""
                                loading="lazy"
                                src={review.image}
                              />
                            </Col>

                            <div className="col-4 position-absolute top-0 start-90 translate-middle-x pr-3">
                              {/* <US title="United States" className="" /> */}
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
                              style={{ color: "#213D66", fontFamily: "auto" }}
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
              {Array.from({ length: numPages }, (_, idx) => (
                <Button
                  style={{ width: "1%" }}
                  className="text-center d-flex align-items-center justify-content-center mx-0 border border-2 position-relative"
                  onClick={() => setPage(idx)}
                  key={idx}
                >
                  {idx + 1}
                </Button>
              ))}

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
        <Modal show={add} onHide={() => setAdd(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Col className="row g-3">
                <Col className="col-6">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </Col>
                <Col className="col-6">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </Col>
                <Col className="col-6">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                </Col>
                <Col className="col-6">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </Col>

                <Col className="">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Comments</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Col>
              </Col>
              <Col md={6} lg={6} sx={12} xs={12} className="">
                <Col className="row">
                  <Col className="col-6">
                    <button
                      data-res="<?php echo $sum; ?>"
                      type="submit"
                      className="btn btn-dark w-100 fw-bold"
                    >
                      Send
                    </button>
                  </Col>
                </Col>
              </Col>
            </Form>
          </Modal.Body>
        </Modal>
        {/* <img
          src={
            "https://drive.google.com/thumbnail?sz=w2000&id=1ErNWkq6tGcliGK5P_efm9uejbDZg_VaD"
          }
          alt={"Main Tour Image"}
          className="w-100 position-relative h-50"
        /> */}
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
