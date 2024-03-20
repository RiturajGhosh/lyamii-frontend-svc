import React, { FC, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Icon from "../../common/icon/Icon";
import { useSelector } from "react-redux";
import { selectTourData } from "../../../state/selectors/selectTourData";
import { useHistory } from "react-router-dom";

const Trips: FC = () => {
  const [toggle, setToggle] = useState("Ongoing");
  const history = useHistory();
  const selectedtourData: any = useSelector(selectTourData);

  return (
    <div
      className={`bg-violet-blue px-5 min-vh-100 mw-100 w-100 align-items-center justify-content-end d-flex m-0`}
    >
      <Container
        fluid="lg"
        className="p-0 m-0 min-vh-100 justify-content-start d-flex flex-column w-100"
      >
        <Row className="p-0 m-0 py-4 justify-content-end d-flex">
          <Col className="col-12 py-4 m-0 gap-4 align-items-start justify-content-start d-grid p-0">
            <div className="switches-container">
              <input
                type="radio"
                id="switchOngoing"
                name="switchPlan"
                value="Ongoing"
                checked={true}
              />
              <input
                type="radio"
                id="switchUpcoming"
                name="switchPlan"
                value="Upcoming"
              />
              <label
                htmlFor="switchOngoing"
                onClick={() => setToggle("Ongoing")}
                style={{ color: "#99c9e8" }}
              >
                Ongoing
              </label>
              <label
                htmlFor="switchUpcoming"
                onClick={() => setToggle("Upcoming")}
                style={{ color: "#99c9e8" }}
              >
                Upcoming
              </label>
              <div className="switch-wrapper">
                <div className="switch" style={{ background: "#99c9e8" }}>
                  <div style={{ color: "white" }}>Ongoing</div>
                  <div style={{ color: "white" }}>Upcoming</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {toggle === "Upcoming" ? (
          <section className={`overflow-auto min-vh-100`}>
            <div className="pl-5 one-side-timeline m-0 w-100">
              <Col className="col-2">
                <div
                  className="timeline-middle w-50"
                  style={{ background: "red" }}
                >
                  <div
                    className="timeline-circle"
                    style={{ background: "red" }}
                  ></div>
                </div>
              </Col>
              <Col className={`col-12 small align-self-center text-start`}>
                <Row>
                  <Icon
                    name="HiMapPin"
                    fill="#fd636b"
                    className={`w-10 h-30 p-1 m-1 rounded-circle`}
                    style={{
                      padding: "0px !important",
                      margin: "0px !important",
                    }}
                  />
                  <Col
                    onClick={() => history.push("/profile/trips/tour-detail")}
                  >
                    <div
                      className="text-dark bold fst-italic display-2"
                      style={{ fontFamily: "Bellota" }}
                    >
                      Kashmir
                    </div>
                    <span className="text-uppercase text-dark p">
                      where paradise awaits
                    </span>

                    <div className="position-relative d-flex fit-content align-items-center mt-2 border-dark border-1 border m-0 p-0">
                      <div
                        className={`form__input-label text-dark d-flex align-items-center justify-content-center`}
                        style={{ left: "4px", background: "#c7ccff" }}
                      >
                        {"SCHEDULE ON"}
                      </div>
                      <img
                        className="px-3 py-2"
                        style={{
                          width: "4rem",
                          height: "2.5rem",
                          padding: "0px !important",
                          margin: "0px !important",
                        }}
                        alt={""}
                        src={require("../../../Assets/telephone.png")}
                      />
                      <Row className="pr-3">
                        <Col className="p-0 m-0 text-dark h3">|</Col>
                        <Col className="p-0 px-1 m-0 text-dark h3">10</Col>
                        <Col className="p-0 px-1 m-0 text-dark align-self-center">
                          <div
                            className="d-flex text-dark lh-1 p-0 m-0"
                            style={{ fontSize: "12px" }}
                          >
                            OCT
                          </div>
                          <span
                            className="d-flex text-dark lh-1 p-0 m-0 text-uppercase"
                            style={{ fontSize: "12px" }}
                          >
                            2024
                          </span>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Col>
            </div>
          </section>
        ) : (
          <section className={`overflow-auto min-vh-100`}>
            <div className="pl-5 one-side-timeline m-0 w-100">
              <Col className="col-2">
                <div
                  className="timeline-middle w-50"
                  style={{ background: "red" }}
                >
                  <div
                    className="timeline-circle"
                    style={{ background: "red" }}
                  ></div>
                </div>
              </Col>
              <Col className={`col-12 small align-self-center text-start`}>
                <Row>
                  <Icon
                    name="HiMapPin"
                    fill="#fd636b"
                    className={`w-10 h-30 p-1 m-1 rounded-circle`}
                    style={{
                      padding: "0px !important",
                      margin: "0px !important",
                    }}
                  />
                  <Col
                    onClick={() => history.push("/profile/trips/tour-detail")}
                  >
                    <div
                      className="text-dark bold fst-italic display-2"
                      style={{ fontFamily: "Bellota" }}
                    >
                      Kashmir
                    </div>
                    <span className="text-uppercase text-dark p">
                      where paradise awaits
                    </span>

                    <div className="position-relative d-flex fit-content align-items-center mt-2 border-dark border-1 border m-0 p-0">
                      <div
                        className={`form__input-label text-dark d-flex align-items-center justify-content-center`}
                        style={{ left: "4px", background: "#c7ccff" }}
                      >
                        {"SCHEDULE ON"}
                      </div>
                      <img
                        className="px-3 py-2"
                        style={{
                          width: "4rem",
                          height: "2.5rem",
                          padding: "0px !important",
                          margin: "0px !important",
                        }}
                        alt={""}
                        src={require("../../../Assets/telephone.png")}
                      />
                      <Row className="pr-3">
                        <Col className="p-0 m-0 text-dark h3">|</Col>
                        <Col className="p-0 px-1 m-0 text-dark h3">10</Col>
                        <Col className="p-0 px-1 m-0 text-dark align-self-center">
                          <div
                            className="d-flex text-dark lh-1 p-0 m-0"
                            style={{ fontSize: "12px" }}
                          >
                            OCT
                          </div>
                          <span
                            className="d-flex text-dark lh-1 p-0 m-0 text-uppercase"
                            style={{ fontSize: "12px" }}
                          >
                            2024
                          </span>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Col>
            </div>
          </section>
        )}
      </Container>
    </div>
  );
};

export default Trips;
