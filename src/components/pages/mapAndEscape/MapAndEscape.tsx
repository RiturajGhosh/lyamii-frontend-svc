import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import style from "./MapAndEscape.module.scss";
import Globe from "../../common/globe/Globe";
import { mapDescription } from "../../common/enum/enum";
import RoundButton from "../../common/roundButton/RoundButton";
import { IoIosPaperPlane } from "react-icons/io";
import { escapeRoute } from "../../common/enum/escapePlanRoute";
import HorizontalScroll from "../../common/horizontalScroll/HorizontalScroll";

const MapAndEscape: FC = () => {
  const data = [
    "Domestic Flights",
    "Lounge Access",
    "Airport drop-pickup",
    "Currency Exchange ",
    "Travel Insurance",
    "Health Insurance",
    "UPI Wallet",
    "Accommodations",
    "Cuisines",
    "Transfers",
    "Guides",
    "Entry Tickets ",
    "Show Tickets",
    "Activities",
    "Round the clock Multilingual Support",
  ];
  return (
    <Col
      className="home-about-section sectionContainer d-flex justify-content-center py-42 px-0"
      id="about"
    >
      <Col lg={11} md={11} sx={11} xs={11}>
        <Row className="g-4 p-0">
          <Col md={6} className="align-self-center">
            <div
              className={`border-5 pt-32 border-white justify-content-start d-table p-0 border-3 ${style.card}`}
              style={{ minHeight: "100%" }}
            >
              <div className="card-body flex-wrap d-flex">
                <span
                  className={`text-shadow-light fw-bold fs-7 justify-content-center d-flex w-100 text-center`}
                  style={{ color: "#213D66", fontFamily: "DISTILLERYSTRONG" }}
                >
                  Home among the Stars
                </span>
                {/* {mapDescription && (
                  <p
                    className={`text-center card-text`}
                    style={{ color: "#354775", fontFamily: "AsapCondensed" }}
                  >
                    {mapDescription}
                  </p>
                )} */}
                <Row className="d-flex mt-3 flex-row w-100 gap-2 flex-wrap">
                  {data.map((d: string, index: number) => (
                    <p
                      key={index}
                      className="text-white col py-2 px-3 small fit-content rounded-4 align-items-center justify-content-center d-flex"
                      style={{ background: "#0752a1", fontFamily: "Archive" }}
                    >
                      {d}
                    </p>
                  ))}
                  {/* <p
                    className="text-white col py-2 px-3 fit-content rounded-4 align-items-center justify-content-center d-flex"
                    style={{ background: "#0752a1", fontFamily: "Archive" }}
                  >
                    Domestic Flights
                  </p>
                  <p
                    className="text-white py-2 px-3 col fit-content rounded-4 align-items-center justify-content-center d-flex"
                    style={{ background: "#0752a1", fontFamily: "Archive" }}
                  >
                    800+ Stays
                  </p>
                  <p
                    className="text-white py-2 col rounded-4 justify-content-center align-items-center d-flex"
                    style={{ background: "#0752a1", fontFamily: "Archive" }}
                  >
                    3500+ Volunteers
                  </p> */}
                </Row>
              </div>
            </div>
          </Col>

          <Col
            md={6}
            className="align-self-center justify-content-center d-flex"
          >
            <div style={{ width: "50%", height: "50%", paddingLeft: "10px" }}>
              <Globe />
            </div>
          </Col>
          <Col className="card-12 pt-42 w-100 px-0 m-0">
            <div
              className={`border-5 pt-32 w-100 border-white justify-content-start d-table  p-0 m-0 border-3 ${style.card}`}
              style={{ minHeight: "100%" }}
            >
              <div className=" flex-wrap d-flex">
                <span
                  className={`text-shadow-light fw-bold fs-7`}
                  style={{ color: "#0752a0", fontFamily: "Aprila" }}
                >
                  The Escape Plan
                </span>

                <div
                // className="card bg-transparent w-100 rounded-4 border-5 p-0 m-0"
                // style={{ borderColor: "#0752a1 !important" }}
                >
                  <div className=" bg-transparent h-100">
                    <Col className="justify-content-center align-items-center d-flex">
                      <Col className="p-0 col-12 d-flex flex-md-row flex-sm-column flex-column p-4 mt-2 m-0 h-100 w-100 position-relative gap-4 align-items-end">
                        <Col className="align-self-stretch d-grid p-0 m-0">
                          <div className="scrolling-wrapper row flex-row flex-nowrap p-0 m-0">
                            {escapeRoute.map((route: any, index: number) => {
                              return (
                                <>
                                  {index === 0 ? (
                                    <Row
                                      key={index}
                                      className="position-relative align-items-center col-2 p-0 mt-3 m-0 justify-content-center d-flex"
                                    >
                                      <Col className="col-6 float-start flex-column justify-content-start d-flex p-0 m-0">
                                        <IoIosPaperPlane className="img-round w-100 h-50 border p-0 m-0 border-5" />
                                        <Col className="w-100 justify-content-center d-flex p-0 m-0">
                                          <div className="active small">
                                            {route.stage}
                                          </div>
                                        </Col>{" "}
                                      </Col>
                                    </Row>
                                  ) : (
                                    <Row
                                      key={index}
                                      className="position-relative align-items-center col-3 p-0 mt-3 m-0 justify-content-around d-flex"
                                    >
                                      <Col className="col-7 border-top-1 border p-0 m-0 timeline-line"></Col>

                                      <Col className="col-4 float-end flex-column justify-content-end d-flex p-0 m-0">
                                        <IoIosPaperPlane className="img-round w-100 h-50 border p-0 m-0  border-5" />
                                        {/* <img
                                          className={`m-0 justify-content-center ${style.reasonCard}`}
                                          style={{
                                            padding: "0px !important",
                                            margin: "0px !important",
                                          }}
                                          src={require("../../../Assets/tick1.png")}
                                        /> */}
                                        <Col className="w-100 justify-content-center d-flex p-0 m-0">
                                          <div className="active small">
                                            {route.stage}
                                          </div>
                                        </Col>{" "}
                                      </Col>
                                    </Row>
                                  )}
                                </>
                              );
                            })}
                          </div>
                          {/* {escapeRoute.map((route: any, index: number) => {
                                return (
                                  <Col className="mx-md-3 overflowX-auto w-100 d-inline-block position-relative">
                                    {index === 0 ? (
                                      <Col className="col-2 flex-column justify-content-start d-flex p-0 m-0">
                                        <IoIosPaperPlane className="img-round w-75 h-50 border p-0 m-0  border-5" />
                                        <div className="active small">Sign In</div>
                                        <Col className="w-75 justify-content-center d-flex p-0 m-0">
                                          <div className="active small">
                                            {route.stage}
                                          </div>
                                        </Col>{" "}
                                      </Col>
                                    ) : (
                                      <Col className="col-2 flex-column justify-content-center d-flex p-0 m-0">
                                        <IoIosPaperPlane className="img-round w-75 h-50 border p-0 m-0  border-5" />
                                        <div className="active small">Sign In</div>
                                        <Col className="w-75 justify-content-center d-flex p-0 m-0">
                                          <div className="active small">
                                            {route.stage}
                                          </div>
                                        </Col>{" "}
                                      </Col>
                                    )}

                                    <Col className="col-2 border-top-1 border p-0 m-0 timeline-line"></Col>
                                  </Col>
                                );
                              })}
                            </Row> */}
                        </Col>
                      </Col>

                      {/* <Col className="position-absolute bg-transparent d-flex h-100 align-items-center text-dark fw-bold text-shadow-light" style={{fontSize:"7dvi"}}>Show After Login</Col> */}
                      {/* <input
                        className="rounded-circle display-1 p-5 w-50"
                        type="text"
                        value={""}
                        style={{ background: "#19bca1" }}
                        onChange={(e: any) => {
                          {
                          }
                        }}
                      />
                      <input
                        className="rounded-circle display-1 p-5 w-50"
                        type="text"
                        value={""}
                        style={{ background: "#19bca1" }}
                        onChange={(e: any) => {
                          {
                          }
                        }}
                      />{" "}
                      <input
                        className="rounded-circle display-1 p-5 w-50"
                        type="text"
                        value={""}
                        style={{ background: "#19bca1" }}
                        onChange={(e: any) => {
                          {
                          }
                        }}
                      /> */}
                    </Col>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Col>
  );
};

export default MapAndEscape;
