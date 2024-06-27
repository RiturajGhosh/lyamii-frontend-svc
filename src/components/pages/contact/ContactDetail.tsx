import React, { FC } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Icon from "../../common/icon/Icon";

const ContactDetail: FC = () => {
  const longitude = "";
  const latitude = "";
  const showInMapClicked = () => {
    window.open("https://maps.google.com?q=" + latitude + "," + longitude);
  };
  return (
    <Col
      className="flex-column home-about-section align-self-start d-flex min-vh-100 justify-content-center sectionContainer pt-42"
      style={{ background: "#ffffff" }}
    >
      <Col
        lg={12}
        md={12}
        sx={12}
        xs={12}
        className="align-self-start d-flex"
        style={{ background: "#005154" }}
      >
        <Card.Body className="p-0 m-0 justify-content-center">
          <Row className="justify-content-between d-flex p-0 m-0 px-sm-5">
            <Col
              className="col-12 align-self-start position-relative mt-5 pt-3 p-0 m-0"
              style={{
                color: "#218a43",
                textShadow: "#218a43",
              }}
            >
              <Col className="w-100 position-relative">
                <span
                  className="fs-24 d-flex justify-content-center text-start align-self-start text-shadow-dark bold text-white"
                  style={{ fontFamily: "fangsong" }}
                >
                  GET IN TOUCH
                </span>
              </Col>
            </Col>
            <Row>
              <Col className="m-5 justify-content-center flex-column d-flex">
                <Col className="col-12 justify-content-center d-flex p-0 m-0">
                  <Icon
                    fill={"#ffffff"}
                    className={`w-50 h-90 p-4 mr-1 rounded-circle`}
                    style={{
                      background: "#7ab3b5",
                    }}
                    name={"MdOutlineLocationOn"}
                  />
                </Col>
                <Col
                  className="bold pointer fs-16 col-12 text-center text-white"
                  onClick={() => showInMapClicked()}
                >
                  ADDRESS
                </Col>{" "}
                <Col>
                  <span
                    className="fs-auto bold d-flex  justify-content-center"
                    style={{ color: "#ffffff", fontFamily: "Georgia (bold)" }}
                  >
                    Customer Support
                  </span>
                  <span
                    className="fs-auto d-flex  justify-content-center"
                    style={{ color: "#ffffff", fontFamily: "Georgia (bold)" }}
                  >
                    Connect.CRM@Lyamii.com
                  </span>{" "}
                  <span
                    className="fs-auto bold d-flex  justify-content-center"
                    style={{ color: "#ffffff", fontFamily: "Georgia (bold)" }}
                  >
                    Business Related Support
                  </span>
                  <span
                    className="fs-auto d-flex  justify-content-center"
                    style={{ color: "#ffffff", fontFamily: "Georgia (bold)" }}
                  >
                    Connect.Business@Lyamii.com
                  </span>{" "}
                  <span
                    className="fs-auto bold d-flex  justify-content-center"
                    style={{ color: "#ffffff", fontFamily: "Georgia (bold)" }}
                  >
                    FeedBack
                  </span>
                  <span
                    className="fs-auto d-flex justify-content-center"
                    style={{ color: "#ffffff", fontFamily: "Georgia (bold)" }}
                  >
                    Drop.Feedback@Lyamii.com
                  </span>
                </Col>
              </Col>
              <Col className="m-5 justify-content-center flex-column d-flex">
                <Col className="col-12 justify-content-center d-flex p-0 m-0">
                  <Icon
                    className={`w-50 h-90 p-4 mr-1 rounded-circle`}
                    fill={"#ffffff"}
                    style={{
                      background: "#7ab3b5",
                      padding: "0px !important",
                      margin: "0px !important",
                    }}
                    name={"FaPhone"}
                  />{" "}
                </Col>
                <Col className="bold fs-16 col-12 text-center text-white">
                  PHONE
                </Col>{" "}
                <Col>
                  <span
                    className="fs-auto bold d-flex  justify-content-center"
                    style={{ color: "#ffffff", fontFamily: "Georgia (bold)" }}
                  >
                    Customer Support
                  </span>
                  <span
                    className="fs-auto d-flex  justify-content-center"
                    style={{ color: "#ffffff", fontFamily: "Georgia (bold)" }}
                  >
                    Connect.CRM@Lyamii.com
                  </span>{" "}
                  <span
                    className="fs-auto bold d-flex  justify-content-center"
                    style={{ color: "#ffffff", fontFamily: "Georgia (bold)" }}
                  >
                    Business Related Support
                  </span>
                  <span
                    className="fs-auto d-flex  justify-content-center"
                    style={{ color: "#ffffff", fontFamily: "Georgia (bold)" }}
                  >
                    Connect.Business@Lyamii.com
                  </span>{" "}
                  <span
                    className="fs-auto bold d-flex  justify-content-center"
                    style={{ color: "#ffffff", fontFamily: "Georgia (bold)" }}
                  >
                    FeedBack
                  </span>
                  <span
                    className="fs-auto d-flex justify-content-center"
                    style={{ color: "#ffffff", fontFamily: "Georgia (bold)" }}
                  >
                    Drop.Feedback@Lyamii.com
                  </span>
                </Col>
              </Col>
              <Col className="m-5 justify-content-center flex-column d-flex">
                <Col className="col-12 justify-content-center d-flex p-0 m-0">
                  <Icon
                    className={`w-50 h-90 p-4 mr-1 rounded-circle`}
                    fill={"#ffffff"}
                    style={{
                      background: "#7ab3b5",
                      padding: "0px !important",
                      margin: "0px !important",
                    }}
                    name={"message"}
                  />{" "}
                </Col>
                <Col
                  className="col-12 pointer fs-16 bold text-center text-white"
                  onClick={(e) => {
                    window.location.href = "mailto:no-reply@example.com";
                    e.preventDefault();
                  }}
                >
                  EMAIL
                </Col>{" "}
                <Col>
                  <span
                    className="fs-auto bold d-flex  justify-content-center"
                    style={{ color: "#ffffff", fontFamily: "Georgia (bold)" }}
                  >
                    Customer Support
                  </span>
                  <span
                    className="fs-auto d-flex  justify-content-center"
                    style={{ color: "#ffffff", fontFamily: "Georgia (bold)" }}
                  >
                    Connect.CRM@Lyamii.com
                  </span>{" "}
                  <span
                    className="fs-auto bold d-flex  justify-content-center"
                    style={{ color: "#ffffff", fontFamily: "Georgia (bold)" }}
                  >
                    Business Related Support
                  </span>
                  <span
                    className="fs-auto d-flex  justify-content-center"
                    style={{ color: "#ffffff", fontFamily: "Georgia (bold)" }}
                  >
                    Connect.Business@Lyamii.com
                  </span>{" "}
                  <span
                    className="fs-auto bold d-flex  justify-content-center"
                    style={{ color: "#ffffff", fontFamily: "Georgia (bold)" }}
                  >
                    FeedBack
                  </span>
                  <span
                    className="fs-auto d-flex justify-content-center"
                    style={{ color: "#ffffff", fontFamily: "Georgia (bold)" }}
                  >
                    Drop.Feedback@Lyamii.com
                  </span>
                </Col>
              </Col>
            </Row>
          </Row>
        </Card.Body>
      </Col>
      <Col
        lg={12}
        md={12}
        sx={12}
        xs={12}
        className="align-self-start py-5 d-flex"
        style={{ background: "#ffffff" }}
      >
        <Card.Body className="p-0 m-0 justify-content-center">
          <Row className="justify-content-between flex-wrap d-flex p-0 m-0">
            <Col
              className="align-self-start position-relative mt-5 pt-3 px-5 p-0 m-0"
              style={{
                color: "#218a43",
                textShadow: "#218a43",
              }}
            >
              <Col className="w-100 position-relative">
                <span
                  className="fs-24 d-flex justify-content-start text-start align-self-start text-shadow-light bold"
                  style={{ fontFamily: "Archivo Black", color: "#213D66" }}
                >
                  Message Us
                </span>
              </Col>
            </Col>
            <Col md={6} lg={6} sx={12} xs={12} className="my-5">
              <Col className="row">
                <Col className="">
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
                          <Form.Label>Surname</Form.Label>
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>
                      </Col>
                      <Col className="col-6">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="name@example.com"
                          />
                        </Form.Group>
                      </Col>
                      <Col className="col-6">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Subject</Form.Label>
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
                </Col>
              </Col>
            </Col>
          </Row>
        </Card.Body>
      </Col>
    </Col>
  );
};

export default ContactDetail;
