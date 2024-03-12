import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import style from "./MapAndEscape.module.scss";
import Globe from "../../common/globe/Globe";
import { mapDescription } from "../../common/enum/enum";
import RoundButton from "../../common/roundButton/RoundButton";

const MapAndEscape: FC = () => {
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
                  style={{ color: "#213D66", fontFamily: "Aprila" }}
                >
                  Home among the Stars
                </span>
                {mapDescription && (
                  <p
                    className={`text-center card-text`}
                    style={{ color: "#354775", fontFamily: "AsapCondensed" }}
                  >
                    {mapDescription}
                  </p>
                )}
                <Row className="d-flex flex-row w-100 gap-2 flex-wrap">
                  <p
                    className="text-white col py-2 px-3 fit-content rounded-4 align-items-center justify-content-center d-flex"
                    style={{ background: "#0752a1", fontFamily: "Archive" }}
                  >
                    75+ Countries
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
                  </p>
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
                  className="card w-100 border-5 p-0 m-0"
                  style={{ borderColor: "#0752a1 !important" }}
                >
                  <div className="card-header h-100">
                    <Col className="justify-content-center align-items-center d-flex">
                      <Row className="position-relative align-items-center p-0 my-3 m-0 justify-content-center d-flex w-100">
                        <Col className="col-2 d-flex position-relative p-0 m-0">
                          <RoundButton
                            className="border-5 border circle-core"
                            bordercolor="#0e3c30"
                            size={"calc(0.12*100vw"}
                            fill={"#c4cdfe"}
                            text={"step 1"}
                          />
                        </Col>
                        <Col className="col-1 border-2 border p-0 m-0 w-10 timeline-line"></Col>
                        <Col className="col-2 position-relative d-flex p-0 m-0">
                          <RoundButton
                            className="border-5 border circle-core"
                            size={"calc(0.12*100vw"}
                            bordercolor="#0e3c30"
                            fill={"#c4cdfe"}
                            text={"step 2"}
                          />
                        </Col>
                        <Col className="col-1 border-2 border p-0 m-0 w-10 timeline-line"></Col>

                        <Col className="col-2 position-relative d-flex p-0 m-0">
                          <RoundButton
                            className="border-5 border circle-core"
                            bordercolor="#0e3c30"
                            size={"calc(0.12*100vw"}
                            fill={"#c4cdfe"}
                            text={"step 3"}
                          />
                        </Col>
                        <Col className="col-1 border-2 border p-0 m-0 w-10"></Col>

                        <Col className="col-2 position-relative d-flex p-0 m-0">
                          <RoundButton
                            className="border-5 border circle-core"
                            size={"calc(0.12*100vw"}
                            bordercolor="#0e3c30"
                            fill={"#c4cdfe"}
                            text={"step 4"}
                          />
                        </Col>
                      </Row>
                      <Col className="position-absolute bg-transparent d-flex h-100 align-items-center fw-bold" style={{fontSize:"7dvi"}}>Coming Soon</Col>
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
