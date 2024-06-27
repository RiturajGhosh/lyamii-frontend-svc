import React, { FC, useEffect, useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import Icon from "../../common/icon/Icon";
import { useHistory } from "react-router-dom";
import image from "../../../Assets/header1.jpeg";
import SubCard from "../../common/subCard/SubCard";
import ArrowButton from "../../common/arrowButton/ArrowButton";
import { FaCircleArrowRight } from "react-icons/fa6";
import Toggler from "../../common/toggler/Toggler";
import { getCookie } from "../../common/enum/functions";
import { useDispatch, useSelector } from "react-redux";
import { getOngoingToursBriefDetailsApi } from "../../../api/ongoingToursBriefDetails/getOngoingToursBriefDetailsApi";
import { DailyTourOverviewDto } from "../../../state/actions/types/dailyTourDetailDataType";
import { selectOngoingTourDayBriefDetail } from "../../../state/selectors/selectOngoingTourDayDetail";

const Trips: FC = () => {
  const [toggle, setToggle] = useState(true);
  const history = useHistory();
  const cookie = getCookie("user");
  const user = cookie && JSON.parse(cookie);
  // const screenSize = useSelector(selectScreenSize);
  const tourDetails = useSelector(selectOngoingTourDayBriefDetail);
  // const description =
  //   "Royal India Edition is a luxurious experience of diverse cultures, each adding its unique hues to the nation's identity. From the resplendent palaces that dot the landscape to the tales of mighty kings and queens who shaped the nation's destiny, the legacy of royal India resonates through its architecture, traditions, and captivating stories. Includes all 5 star luxury stays, cultural cuisines, domestic flights, day to day individual assistance and transfers.";
  const [tourDetail, setTourDetail] =
    useState<DailyTourOverviewDto[]>(tourDetails);
  const dispatch = useDispatch();
  const fetchTours = async () => {
    const response = await getOngoingToursBriefDetailsApi(user?.email);
    if (response.status === 200) {
      dispatch({
        type: Set,
        payload: response,
      });
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  useEffect(() => {
    tourDetails && setTourDetail(tourDetails);
  }, [tourDetail]);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={`px-5 min-vh-100 mw-100 w-100 align-items-center justify-content-end d-flex m-0`}
      style={{
        position: "relative",
        zIndex: "2",
        height: "fit-content",
        backgroundImage: `linear-gradient(
          to bottom left,
          rgba(17, 16, 16, 0.678),
          rgba(12, 10, 22, 0.863)
        ),url(${image})`,
        backgroundPosition: "top center, bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container
        fluid="lg"
        className="p-0 gap-5 absolute m-0 min-vh-100 justify-content-start d-flex flex-column w-100"
      >
        <Row className="p-0 m-0 py-4 justify-content-end d-flex">
          <Col className="col-12 py-4 m-0 gap-4 align-items-start justify-content-start d-grid p-0">
            <div className="switches-container bg-white p-2 ">
              <Toggler
                name="myToggle1"
                checked={toggle}
                inline={true}
                labels={["Ongoing", "Upcoming"]}
                handleChange={() => handleToggle()}
              />
            </div>
          </Col>
        </Row>
        {!toggle ? (
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
                    className="pointer"
                    onClick={() => history.push("/profile/trips/tour-detail")}
                  >
                    <div
                      className="bold fst-italic display-2"
                      style={{ fontFamily: "Bellota", color: "orange" }}
                    >
                      Kashmir
                    </div>
                    <span className="text-uppercase p">
                      where paradise awaits
                    </span>

                    <div className="position-relative p-2 d-flex fit-content align-items-center mt-2 border-light border-1 border m-0 p-0">
                      <div
                        className={`form__input-label d-flex align-items-center justify-content-center`}
                        style={{ left: "4px", background: "#c7ccff" }}
                      >
                        {"SCHEDULE ON"}
                      </div>
                      <img
                        className="px-3 py-2 text-white"
                        style={{
                          width: "4rem",
                          height: "3rem",
                          color: "white",
                          filter: "brightness(0) invert(1)",
                          padding: "0px !important",
                          margin: "0px !important",
                        }}
                        alt={""}
                        src={require("../../../Assets/telephone.png")}
                      />
                      <Row className="pr-3 align-items-center">
                        <Col
                          className="p-0 m-0 h3 text-white"
                          style={{ color: "orange" }}
                        >
                          |
                        </Col>
                        <Col
                          className="p-0 px-1 m-0 h3 text-white"
                          style={{ color: "orange" }}
                        >
                          10
                        </Col>
                        <Col className="p-0 px-1 m-0 align-elf-center">
                          <div
                            className="d-flex lh-1 p-0 m-0 text-white"
                            style={{ fontSize: "12px", color: "orange" }}
                          >
                            OCT
                          </div>
                          <span
                            className="d-flex lh-1 p-0 m-0 text-uppercase text-white"
                            style={{ fontSize: "12px", color: "orange" }}
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
            <Col className="gap-5 d-grid m-0 w-100">
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
                  <Col className="align-items-center d-flex">
                    <div
                      className="bold fst-italic display-2"
                      style={{ fontFamily: "Bellota", color: "orange" }}
                    >
                      Kashmir
                    </div>
                  </Col>
                </Row>
                <Col className="pl-4">
                  <div className="col-6 fs-medium">
                    {/* Goa is a state where East meets West, where Indian culture
                    intertwines with Portuguese influences left over from a
                    500-year occupation. It is known for its phenomenal beaches,
                    its diverse temples and churches, and its vibrant nightlife.
                    Goa is the pearl of the Orient, the best-placed state in
                    India, and the ultimate destination for sun, sand and sea. */}
                  </div>
                  <Button
                    className="rounded-4 border-0 border mt-4 d-flex"
                    style={{ background: "#c5e9ff" }}
                  >
                    <span className="px-4 text-dark text-shadow-light">
                      Explore{" "}
                    </span>
                    <span className="col-12 d-flex text-shadow-dark align-self-center position-relative p-0 m-0">
                      <FaCircleArrowRight
                        fill={"#55bcf9"}
                        className="p-0 m-0 pointer"
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
                  <Col className="text-white">Trip Timeline</Col>
                  <Col className="col-9 text-shadow-dark align-self-center position-relative p-0 m-0">
                    <FaCircleArrowRight
                    className="pointer"
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
                    {tourDetail?.map((data, index: number) => {
                      return (
                        <Col
                          md={6}
                          lg={4}
                          sx={6}
                          sm={6}
                          className="expand col-12 d-inline-block position-relative"
                        >
                          <SubCard
                            fill="#55bcf9"
                            title={"Day " + index}
                            titleStyling={{
                              width: `${8 * 14}px`,
                              borderColor: "#55bcf9",
                              background: "#55bcf9",
                            }}
                            style={{ fontSize: "14px", background: "#c5e9ff" }}
                            titleClassName="p-1 bold text-white shadow"
                            className="rounded-4 mt-4 border-0 border"
                          >
                            <Col
                              onClick={() =>
                                history.push("/profile/trips/tour-detail")
                              }
                              className="m-0 pointer py-12 align-items-center d-flex rounded-4 p-2"
                              style={{
                                minHeight: "30vh",
                                background: "#99c9e8",
                              }}
                            >
                              <Row className="mt-3">
                                <div className="fs-3 pt-0 px-3 font-weight-normal">
                                  Day {data?.dayNo}
                                </div>
                                <div
                                  className="fs-1 bold px-3 text-shadow-dark pt-0 p-2 font-weight-normal"
                                  style={{
                                    minHeight: "35px",
                                    whiteSpace: "break-spaces",
                                  }}
                                >
                                  {data?.heading}
                                </div>
                              </Row>
                              <ArrowButton
                                fill="#55bcf9"
                                className={
                                  "position-absolute pointer bottom-0 bold p p-2 text-white position-absolute fw-bold bottom-0 end-0"
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
