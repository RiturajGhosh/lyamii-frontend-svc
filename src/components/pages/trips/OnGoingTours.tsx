import React, { FC, useEffect, useState } from "react";
import { Col, Row, Container, Form, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectTourData } from "../../../state/selectors/selectTourData";
import SubCard from "../../common/subCard/SubCard";
import { tours } from "../mockData/destinations";
import {
  bharatTours,
  journeyOptions,
  tourScheduleDetail,
} from "../../common/enum/enum";
import { BsFillMoonFill } from "react-icons/bs";
import Icon from "../../common/icon/Icon";
import { FaCircleChevronLeft } from "react-icons/fa6";
import image from "../../../Assets/header1.jpeg";
import { useHistory } from "react-router-dom";
import RoundButton from "../../common/roundButton/RoundButton";
import ArrowButton from "../../common/arrowButton/ArrowButton";
import { getCookie } from "../../common/enum/functions";
import { getUserItineraryApi } from "../../../api/userItinerary/getUserItineraryApi";
import { DailyTourDetailDto } from "../../../state/actions/types/dailyTourDetailDataType";
import { selectOngoingTourDayDetail } from "../../../state/selectors/selectOngoingTourDayDetail";
const OnGoingTours: FC = () => {
  const history = useHistory();
  const [toggle, setToggle] = useState("Ongoing");
  const selectedtourData = tours[0];
  // const selectedtourData: any = useSelector(selectTourData);
  const cookie = getCookie("user");
  const user = cookie && JSON.parse(cookie);
  // const screenSize = useSelector(selectScreenSize);
  const dailyTourDetail = useSelector(selectOngoingTourDayDetail);
  // const description =
  //   "Royal India Edition is a luxurious experience of diverse cultures, each adding its unique hues to the nation's identity. From the resplendent palaces that dot the landscape to the tales of mighty kings and queens who shaped the nation's destiny, the legacy of royal India resonates through its architecture, traditions, and captivating stories. Includes all 5 star luxury stays, cultural cuisines, domestic flights, day to day individual assistance and transfers.";
  const [tourDetail, setTourDetail] =
    useState<DailyTourDetailDto>(dailyTourDetail);
  const dispatch = useDispatch();
  const fetchTours = async () => {
    const response = await getUserItineraryApi(user?.email);
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
    tourDetail && setTourDetail(tourDetail);
  }, [tourDetail]);
  return (
    <div
      className={`min-vh-100 mw-100 w-100 py-5 align-items-center justify-content-center d-flex m-0`}
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
        className="p-0 min-vh-100 m-0 h-100 position-relative justify-content-start d-flex flex-column w-100"
      >
        {" "}
        <Row className="p-0 m-0 justify-content-end d-flex">
          <Col
            md={12}
            sm={12}
            lg={4}
            xs={12}
            sx={4}
            className="col-12 gap-3 d-grid"
          >
            <Col className="d-grid">
              <Col className="gap-5 d-grid flex-column">
                <FaCircleChevronLeft
                  size={40}
                  fill={"orange"}
                  onClick={() => history.goBack()}
                  className="text-white align-self-center d-flex p-0 m-0"
                />
                <SubCard
                  fill="white"
                  title="TOMORROW"
                  titleStyling={{
                    width: `${8 * 14}px`,
                  }}
                  style={{ fontSize: "10px" }}
                  titleClassName="p-1 bold text-dark shadow bg-blue"
                  className="rounded-4 mt-3"
                >
                  <Col className="m-0 py-12">
                    <Row className="mt-3">
                      <Col className="p-0 m-0">
                        <Form.Group
                          className="d-grid"
                          controlId="exampleForm.ControlInput1"
                        >
                          <div
                            className="fs-3 text-white pt-0 px-5 text-dark font-weight-normal"
                            style={{ minHeight: "29px" }}
                          >
                            Day {tourDetail?.dayNo.toString()}
                          </div>
                          <div
                            className="fs-1 bold px-5 text-shadow-dark pt-0 p-2 font-weight-normal"
                            style={{ minHeight: "29px", color: "orange" }}
                          >
                            {tourDetail?.heading}
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </SubCard>
                <Card className="rounded-4 m-0 fs-small text-shadow p-4 text-dark font-weight-normal d-flex align-self-center">
                  Remember to stay hydrated throughout the day, wear comfortable
                  clothing and shoes, and keep your belongings secure during the
                  carnival celebrations. Goa Carnival is an incredible
                  experience that will leave you with lasting memories of the
                  vibrant and colorful Goan culture!
                </Card>
              </Col>
              <Col className="p-0 d-flex flex-md-row flex-sm-column flex-column  mt-2 m-0 h-100 w-100 position-relative gap-4 align-items-end">
                <Col
                  className="align-self-stretch p-0 m-0"
                  style={{ minHeight: "20vh" }}
                ></Col>
              </Col>
              <SubCard
                fill="white"
                title="Stay on the same hotel for that day"
                titleStyling={{
                  width: `${8 * 14}px`,
                }}
                titleClassName="round-edges fit-content fs-8 p-1 bold text-dark shadow bg-blue"
                className="mt-3 w-100"
              >
                <Row>
                  <Icon
                    name="HiMapPin"
                    fill="white"
                    className={`w-20 h-50 p-1 m-1 rounded-circle`}
                    style={{
                      padding: "0px !important",
                      margin: "0px !important",
                    }}
                  />
                  <Col>
                    <div
                      className="text-white fs-small"
                      style={{ fontFamily: "" }}
                    >
                      H O T E L
                    </div>
                    <div className="text-white fs-auto">The Menion Regency</div>
                    <span className="text-white fs-small">
                      {tourDetail?.location}
                    </span>

                    <Row className="mt-3 d-flex p-0 m-0">
                      <Col className="col-6 p-0 m-0">
                        <Button className="w-100 m-0">Call</Button>
                      </Col>
                      <Col className="col-6">
                        <Button className="m-0">Direction</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </SubCard>
            </Col>
          </Col>

          <Col md={12} sm={12} lg={8} xs={12} sx={8} className="p-0 m-0">
            <Col>
              <Col className="text-white scroll position-relative p-0 m-0 p-2">
                <section
                  className="gap-2 d-flex flex-column"
                  style={{ zIndex: "1 !important" }}
                >
                  {/* {tourScheduleDetail.map((option: any) => {
                    return ( */}
                  <Col className="p-0 m-0">
                    <Row className="p-2">
                      <span className="align-items-center d-flex position-relative">
                        <Icon
                          fill="white"
                          name={"morning"}
                          className="align-self-center p-0 m-0 position-absolute"
                        />

                        <Col className="text-shadow-dark mx-4 fs-auto bold position-relative">
                          Morning
                        </Col>
                      </span>
                    </Row>
                    {/* {option.schedule.map((event: any, idx: number) => {
                          return ( */}
                    <div className="pl-5 one-side-timeline m-0 w-100">
                      <Col className="col-2">
                        <div
                          className="timeline-middle w-50"
                          style={{ background: "white" }}
                        >
                          <div
                            className="timeline-circle"
                            style={{ background: "orange" }}
                          ></div>
                        </div>
                      </Col>
                      <Col
                        className={`col-12 small align-self-center text-start`}
                      >
                        <div className="fs-medium text-shadow-dark w-100 bold">
                          {Object.keys(tourDetail.morning)[0]}
                          {tourDetail.morning.Breakfast.location && (
                            <img
                              style={{ width: "3vh" }}
                              className="ps-2"
                              src={require("../../../Assets/navigator.png")}
                            ></img>
                          )}
                        </div>
                        <span className="fs-small text-shadow-dark w-100">
                          {tourDetail.morning.Breakfast.desc}
                        </span>
                      </Col>
                    </div>
                    {/* );
                        })} */}
                  </Col>
                  {/* );
                  })} */}
                  <Col className="p-0 m-0">
                    <Row className="p-2">
                      <span className="align-items-center d-flex position-relative">
                        <Icon
                          fill="white"
                          name={"afternoon"}
                          className="align-self-center p-0 m-0 position-absolute"
                        />

                        <Col className="text-shadow-dark mx-4 fs-auto bold position-relative">
                          Afternoon
                        </Col>
                      </span>
                    </Row>
                    {/* {option.schedule.map((event: any, idx: number) => {
                          return ( */}
                    <div className="pl-5 one-side-timeline m-0 w-100">
                      <Col className="col-2">
                        <div
                          className="timeline-middle w-50"
                          style={{ background: "white" }}
                        >
                          <div
                            className="timeline-circle"
                            style={{ background: "orange" }}
                          ></div>
                        </div>
                      </Col>
                      <Col
                        className={`col-12 small align-self-center text-start`}
                      >
                        <div className="fs-medium text-shadow-dark w-100 bold">
                          {Object.keys(tourDetail.afternoon)[0]}
                          {tourDetail.afternoon.Lunch.location && (
                            <img
                              style={{ width: "3vh" }}
                              className="ps-2"
                              src={require("../../../Assets/navigator.png")}
                            ></img>
                          )}
                        </div>
                        <span className="fs-small text-shadow-dark w-100">
                          {tourDetail.afternoon.Lunch.desc}
                        </span>
                      </Col>
                    </div>
                    {/* );
                        })} */}
                  </Col>{" "}
                  <Col className="p-0 m-0">
                    <Row className="p-2">
                      <span className="align-items-center d-flex position-relative">
                        <Icon
                          fill="white"
                          name={"evening"}
                          className="align-self-center p-0 m-0 position-absolute"
                        />

                        <Col className="text-shadow-dark mx-4 fs-auto bold position-relative">
                          Evening
                        </Col>
                      </span>
                    </Row>
                    {/* {option.schedule.map((event: any, idx: number) => {
                          return ( */}
                    <div className="pl-5 one-side-timeline m-0 w-100">
                      <Col className="col-2">
                        <div
                          className="timeline-middle w-50"
                          style={{ background: "white" }}
                        >
                          <div
                            className="timeline-circle"
                            style={{ background: "orange" }}
                          ></div>
                        </div>
                      </Col>
                      <Col
                        className={`col-12 small align-self-center text-start`}
                      >
                        <div className="fs-medium text-shadow-dark w-100 bold">
                          {Object.keys(tourDetail.evening)[0]}
                          {tourDetail.evening.Sunset.location && (
                            <img
                              style={{ width: "3vh" }}
                              className="ps-2"
                              src={require("../../../Assets/navigator.png")}
                            ></img>
                          )}
                        </div>
                        <span className="fs-small text-shadow-dark w-100">
                          {tourDetail.evening.Sunset.desc}
                        </span>
                      </Col>
                    </div>
                    {/* );
                        })} */}
                  </Col>{" "}
                  <Col className="p-0 m-0">
                    <Row className="p-2">
                      <span className="align-items-center d-flex position-relative">
                        <Icon
                          fill="white"
                          name={"night"}
                          className="align-self-center p-0 m-0 position-absolute"
                        />

                        <Col className="text-shadow-dark mx-4 fs-auto bold position-relative">
                          Night
                        </Col>
                      </span>
                    </Row>
                    {/* {option.schedule.map((event: any, idx: number) => {
                          return ( */}
                    <div className="pl-5 one-side-timeline m-0 w-100">
                      <Col className="col-2">
                        <div
                          className="timeline-middle w-50"
                          style={{ background: "white" }}
                        >
                          <div
                            className="timeline-circle"
                            style={{ background: "orange" }}
                          ></div>
                        </div>
                      </Col>
                      <Col
                        className={`col-12 small align-self-center text-start`}
                      >
                        <div className="fs-medium text-shadow-dark w-100 bold">
                          {Object.keys(tourDetail.night)[0]}
                          {tourDetail.night.Party.location && (
                            <img
                              style={{ width: "3vh" }}
                              className="ps-2"
                              src={require("../../../Assets/navigator.png")}
                            ></img>
                          )}
                        </div>
                        <span className="fs-small text-shadow-dark w-100">
                          {tourDetail.night.Party.desc}
                        </span>
                      </Col>
                    </div>
                    {/* );
                        })} */}
                  </Col>
                </section>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OnGoingTours;
