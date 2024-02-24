import React, { FC, useState } from "react";
import { bharatTours } from "../../common/enum/enum";
import style from "./ComboTours.module.scss";
import TourOverviewCard from "../../common/tourOverviewCard/TourOverviewCard";
import { Card, Col, Form, Row } from "react-bootstrap";
import MainContainer from "../../common/container/MainContainer";

const CheckOut: FC = () => {
  const [number, SetNumber] = useState("");
  const [name, SetName] = useState("");
  const [date, SetDate] = useState("");
  const [cvc, SetCvc] = useState("");

  return (
    <MainContainer className="p-5" background="#A2CDFF">
      <Card className="p-5">
        <Col className="row">
          <Col className="col-lg-8 col-md-12">
            <Form className="gap-4 d-grid">
              <Col className="card-data gap-4 d-flex flex-column flex-vertical">
                <Col className="flex-between flex-vertical-center">
                  <Col className="flex-column d-flex">
                    <strong>Card Number</strong>
                    <span>Enter 16-digit card number on the card</span>
                  </Col>
                </Col>

                <Row className="justify-content-between d-flex">
                  <Col className="p-0 m-0">
                    <div className="input-group">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="24px"
                        height="24px"
                      >
                        <path
                          fill="#ff9800"
                          d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                        />
                        <path
                          fill="#d50000"
                          d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                        />
                        <path
                          fill="#ff3d00"
                          d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                        />
                      </svg>
                      <input
                        type="tel"
                        className="form-control border-secondary"
                        name="cardNumber"
                        placeholder="Valid Card Number"
                      />
                    </div>
                    <span className="input-group-addon">
                      <i className="fa fa-credit-card"></i>
                    </span>
                    <i className="ai-circle-check-fill size-lg f-main-color"></i>
                  </Col>
                </Row>

                <Row className="justify-content-between p-0 m-0 d-flex">
                  <Col className="col-5 p-0 m-0 flex-column d-flex">
                    <strong>Expiry Date</strong>
                    <span>Enter the expiration date of the card</span>
                  </Col>
                  <Row className="col-6 d-flex  justify-content-end align-items-center flex-vertical-center">
                    <Col className=" p-0 m-0 col-5 d-flex justify-content-end align-items-center d-flex  half-width">
                      <input
                        className="form-control border-secondary"
                        data-def="00"
                        type="text"
                        data-bound="mm_mock"
                        placeholder="MM"
                      />
                    </Col>
                    <Col className="col-1">/</Col>
                    <Col className=" p-0 m-0 col-5 d-flex justify-content-end align-items-center d-flex  half-width">
                      <input
                        className="form-control border-secondary"
                        data-def="01"
                        type="text"
                        data-bound="yy_mock"
                        placeholder="YYYY"
                      />
                    </Col>
                  </Row>
                </Row>

                <Row className="justify-content-between d-flex">
                  <Col className="col-6 flex-column p-0 m-0 d-flex">
                    <strong>CVC Number</strong>
                    <span>
                      Enter card verification code from the back of the card
                    </span>
                  </Col>
                  <Col className="col-5  p-0 m-0 justify-content-end align-items-center d-flex ">
                    <input
                      className="form-control border-secondary"
                      id="cvc"
                      placeholder="Card CVV"
                      maxLength={3}
                      type="password"
                    />
                    <i
                      id="cvc_toggler"
                      data-target="cvc"
                      className="ai-eye-open pointer"
                    ></i>
                  </Col>
                </Row>

                <Row className="justify-content-between d-flex">
                  <Col className="p-0 m-0 flex-column d-flex">
                    <strong>Cardholder Name</strong>
                    <span>Enter cardholder's name</span>
                  </Col>
                  <Col className="col-5 p-0 m-0">
                    <Col className="justify-content-end align-items-center d-flex ">
                      <input
                        className="form-control border-secondary"
                        id="name"
                        data-bound="name_mock"
                        data-def="Mr. Cardholder"
                        type="text"
                        placeholder="CARDHOLDER NAME"
                      />
                      <i className="ai-person"></i>
                    </Col>
                  </Col>
                </Row>

                <Row className="justify-content-between d-flex">
                  <Col className="p-0 m-0 flex-column d-flex">
                    <strong>Mobile No.</strong>
                    <span>Enter Mobile No.</span>
                  </Col>
                  <Col className="col-5 p-0 m-0">
                    <Col className="justify-content-end align-items-center d-flex ">
                      <input
                        className="form-control border-secondary"
                        id="phone"
                        type="text"
                        placeholder="Your Mobile No."
                      />
                      <i className="ai-phone"></i>
                    </Col>
                  </Col>
                </Row>
              </Col>
              <Col className="">
                <button type="submit" className="btn btn-primary mb-2">
                  Pay Now
                </button>
              </Col>
            </Form>
          </Col>
          <Col className="p-4 text-dark" style={{ background: "#F1F1F1" }}>
            <Col className="col-lg-4 col-md-12 py-5 w-100">
              <Col></Col>
              <Col className="purchase-section flex-fill flex-vertical">
                <Col className="p-3 w-100 " style={{ background: "#71A2F7" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="40px"
                    height="40px"
                  >
                    <path
                      fill="#ff9800"
                      d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                    />
                    <path
                      fill="#d50000"
                      d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                    />
                    <path
                      fill="#ff3d00"
                      d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                    />
                  </svg>
                  <Col>
                    <strong>
                      <Col
                        id="name_mock"
                        className="size-md pb-sm uppercase ellipsis"
                      >
                        mr. Cardholder
                      </Col>
                    </strong>
                    <Col className="size-md pb-md">
                      <strong>
                        <span id="carddigits_mock">0000 0000 0000 0000</span>
                      </strong>
                    </Col>
                    <Row className="w-100 justify-content-stretch align-items-center d-flex p-0 m-0 flex-vertical-center">
                      <Col className="p-0 m-0">
                        <span>Expiry Date : </span>
                        <span id="mm_mock">00</span> /{" "}
                        <span id="yy_mock">00</span>
                      </Col>
                      <Col>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="40px"
                          height="40px"
                        >
                          <path
                            fill="#1565C0"
                            d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
                          />
                          <path
                            fill="#FFF"
                            d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"
                          />
                          <path
                            fill="#FFC107"
                            d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"
                          />
                        </svg>
                      </Col>
                    </Row>
                  </Col>
                </Col>

                <ul className="purchase-props">
                  <li className="flex-between">
                    <span>Tour Name</span>
                    <strong>Goa</strong>
                  </li>
                  <li className="flex-between">
                    <span>Tour ID</span>
                    <strong>429252965</strong>
                  </li>
                </ul>
              </Col>
              <Col className="separation-line"></Col>
              <Col className="total-section flex-between flex-vertical-center">
                <Col className="flex-fill flex-vertical">
                  <Col className="total-label f-secondary-color">
                    You have to Pay
                  </Col>
                  <Col>
                    <strong>549</strong>
                    <small>
                      .99 <span className="f-secondary-color">USD</span>
                    </small>
                  </Col>
                </Col>
                <i className="ai-coin size-lg"></i>
              </Col>
            </Col>
          </Col>
        </Col>
      </Card>
    </MainContainer>
  );
};

export default CheckOut;
