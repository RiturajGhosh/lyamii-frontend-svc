import React, { FC } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import style from "./MapAndEscape.module.scss";
import BorderCard from "../../common/borderCard/BorderCard";
import Globe from "../../common/globe/Globe";
import escape from "../../../Assets/escape.jpeg";
import { exploreDescription, mapDescription } from "../../common/enum/enum";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { SET_SELECTED_LOCATION } from "../../../state/actions/types/globeDataActionType";
import { FaArrowRightLong, FaCircle } from "react-icons/fa6";
import RoundButton from "../../common/roundButton/RoundButton";

const MapAndEscape: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const screenSize = useSelector(selectScreenSize);
  return (
    <Container
      className="home-about-section sectionContainer py-42"
      fluid
      id="about"
    >
      <Container>
        <Row className="g-4">
          <Col md={6} className="">
            <div
              className={`border-5 pt-32 border-white justify-content-start d-table  p-2 border-3 ${style.card}`}
              style={{ minHeight: "100%" }}
            >
              <div className="card-body flex-wrap d-flex">
                <h1
                  className={`text-green text-shadow-light fw-bold heading`}
                  style={{ color: "#266d59" }}
                >
                  Home among the Stars
                </h1>
                {mapDescription && (
                  <p className={`text-dark-green card-text`}>
                    {mapDescription}
                  </p>
                )}
                <p className="text-white col-4 bg-dark-green p-2 rounded-3 justify-content-center d-flex card-text">
                  75+ Countries
                </p>
                <p className="text-white p-2 bg-dark-green col-3 rounded-3 mx-2 justify-content-center d-flex card-text">
                  800+ Stays
                </p>
                <p className="text-white p-2 bg-dark-green col-5 rounded-3 justify-content-center d-flex card-text">
                  3500+ Volunteers
                </p>
              </div>
            </div>
          </Col>

          <Col md={6} className="">
            <div style={{ width: "50%", height: "50%", paddingLeft: "10px" }}>
              <Globe />
            </div>
          </Col>
          <Col className="card-12">
            <div
              className={`border-5 pt-32 w-100 border-white justify-content-start d-table  p-2 border-3 ${style.card}`}
              style={{ minHeight: "100%" }}
            >
              <div className=" flex-wrap d-flex">
                <h1
                  className={`text-green text-shadow-light fw-bold heading`}
                  style={{ color: "#266d59" }}
                >
                  The Escape Plan
                </h1>

                <div className="card w-100 border border-5 border-dark">
                  <div className="card-header h-100">
                    <Col className="justify-content-center d-flex">
                      <Row className="position-relative align-items-center p-0 my-3 m-0 justify-content-center d-flex w-100">
                        <Col className="col-2 d-flex position-relative p-0 m-0">
                          <RoundButton
                            className="border-5 border circle-core" 
                            bordercolor="#0e3c30"
                            size={"calc(0.12*100vw"}
                            fill={"#8dc498"}
                            text={"step 1"}
                          />
                        </Col>
                        <Col className="col-1 border-2 border p-0 m-0 w-10 timeline-line"></Col>
                        <Col className="col-2 position-relative d-flex p-0 m-0">
                          <RoundButton
                            className="border-5 border circle-core"
                            size={"calc(0.12*100vw"}
                            bordercolor="#0e3c30"
                            fill={"#8dc498"}
                            text={"step 2"}
                          />
                        </Col>
                        <Col className="col-1 border-2 border p-0 m-0 w-10 timeline-line"></Col>

                        <Col className="col-2 position-relative d-flex p-0 m-0">
                          <RoundButton
                            className="border-5 border circle-core"
                            bordercolor="#0e3c30"
                            size={"calc(0.12*100vw"}
                            fill={"#8dc498"}
                            text={"step 3"}
                          />
                        </Col>
                        <Col className="col-1 border-2 border p-0 m-0 w-10"></Col>

                        <Col className="col-2 position-relative d-flex p-0 m-0">
                          <RoundButton
                            className="border-5 border circle-core"
                            size={"calc(0.12*100vw"}
                            bordercolor="#0e3c30"
                            fill={"#8dc498"}
                            text={"step 4"}
                          />
                        </Col>
                      </Row>
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
      </Container>
    </Container>
  );
};

export default MapAndEscape;
