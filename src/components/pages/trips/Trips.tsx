import React, { FC, useState } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import Icon from "../../common/icon/Icon";
import { useSelector } from "react-redux";
import { selectTourData } from "../../../state/selectors/selectTourData";
import { useHistory } from "react-router-dom";
import image from "../../../Assets/header1.jpeg";
import SubCard from "../../common/subCard/SubCard";
import ArrowButton from "../../common/arrowButton/ArrowButton";
import { FaCircleArrowRight, FaCircleChevronRight } from "react-icons/fa6";

const Trips: FC = () => {
  const [toggle, setToggle] = useState("Ongoing");
  const history = useHistory();
  const selectedtourData: any = useSelector(selectTourData);

  return (
    <div
      className={`px-5 min-vh-100 mw-100 w-100 align-items-center justify-content-end d-flex m-0`}
      style={{
        position: "relative",
        zIndex: "2",
        height: "fit-content",
        opacity: "0.8",
        backgroundImage: `url(${image})`,
        backgroundPosition: "top center, bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container
        fluid="lg"
        className="p-0 absolute m-0 min-vh-100 justify-content-start d-flex flex-column w-100"
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
          <section className={`overflow-auto min-vh-100 `}>
            <Col className="gap-4 d-grid m-0 w-100">
              <Col className={`col-12 fs-small align-self-center text-start`}>
                <Row className="">
                  <Icon
                    name="HiMapPin"
                    fill="#fd636b"
                    className={`w-10 h-30 p-1 m-1 rounded-circle`}
                    style={{
                      padding: "0px !important",
                      margin: "0px !important",
                    }}
                  />
                  <Col>
                    <div
                      className="text-dark bold fst-italic display-2"
                      style={{ fontFamily: "Bellota" }}
                    >
                      Kashmir
                    </div>
                  </Col>
                </Row>
                <Col className="pl-4">
                  <div className="text-dark col-6 fs-medium">
                    Goa is a state where East meets West, where Indian culture
                    intertwines with Portuguese influences left over from a
                    500-year occupation. It is known for its phenomenal beaches,
                    its diverse temples and churches, and its vibrant nightlife.
                    Goa is the pearl of the Orient, the best-placed state in
                    India, and the ultimate destination for sun, sand and sea.
                  </div>
                  <Button
                    className="rounded-4 border-0 border mt-4 d-flex"
                    style={{ background: "#c5e9ff" }}
                  >
                    <span className="px-4 text-dark ">Explore </span>
                    <span className="col-12 d-flex text-shadow-dark align-self-center position-relative p-0 m-0">
                      <FaCircleArrowRight
                        fill={"#55bcf9"}
                        className="p-0 m-0"
                        onClick={() => {
                          history.push("/explore");
                        }}
                      />
                    </span>
                  </Button>
                </Col>
              </Col>{" "}
              <Col className="fs-2 ms-2 text-dark">
                <Col className="d-flex">
                  <Col className="">Trip Timeline</Col>
                  <Col className="col-9 text-shadow-dark align-self-center position-relative p-0 m-0">
                    <FaCircleArrowRight
                      fill={"transparent"}
                      onClick={() => {
                        history.push("/explore");
                      }}
                    />
                  </Col>
                </Col>
              </Col>
              <Col className="p-0 col-12 d-flex flex-md-row flex-sm-column flex-column  mt-2 m-0 h-100 w-100 position-relative gap-4 align-items-end">
                <Col className="align-self-stretch d-grid p-0 m-0">
                  <div className="scrolling-wrapper row flex-row flex-nowrap">
                    {[...Array(6)]?.map((data, index: number) => {
                      return (
                        <Col
                          md={4}
                          lg={3}
                          sx={12}
                          sm={6}
                          className="expand col-12 d-inline-block position-relative"
                        >
                          <SubCard
                            fill="#55bcf9"
                            title="TOMORROW"
                            titleStyling={{
                              width: `${8 * 14}px`,
                              borderColor: "#55bcf9",
                              background: "#55bcf9",
                            }}
                            style={{ fontSize: "10px", background: "#c5e9ff" }}
                            titleClassName="p-1 bold text-white shadow"
                            className="rounded-4 mt-4 border-0 border"
                          >
                            <Col
                              onClick={() =>
                                history.push("/profile/trips/tour-detail")
                              }
                              className="m-0 py-12 align-items-center d-flex rounded-4 p-2"
                              style={{ minHeight: "30vh",background: "#99c9e8" }}
                            >
                              <Row className="mt-3">
                                <div className="fs-3 text-dark pt-0 px-3 text-dark font-weight-normal">
                                  {"Day " + index}
                                </div>
                                <div
                                  className="fs-1 bold text-dark px-3 text-shadow-dark pt-0 p-2 font-weight-normal"
                                  style={{
                                    minHeight: "35px",
                                    whiteSpace: "break-spaces",
                                  }}
                                >
                                  Goa Carnival
                                </div>
                              </Row>
                              <ArrowButton
                                fill="#55bcf9"
                                className={
                                  "position-absolute bottom-0 bold p p-2 text-white position-absolute fw-bold bottom-0 end-0"
                                }
                                onClick={() =>
                                  history.push("/profile/trips/tour-detail")
                                }
                              />
                            </Col>
                          </SubCard>
                        </Col>
                      );
                    })}
                  </div>
                </Col>
              </Col>
            </Col>
          </section>
        )}
      </Container>
    </div>
  );
};

export default Trips;
