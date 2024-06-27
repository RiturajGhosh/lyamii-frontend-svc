import React, { FC, useEffect, useState } from "react";
import { Col, Row, Card, Container, Nav } from "react-bootstrap";
// import { IoLogoFacebook } from "react-icons/io";
import {
  AiFillStar,
  // AiFillTwitterCircle,
  // AiOutlineInstagram,
} from "react-icons/ai";
import SubCard from "../../common/subCard/SubCard";
// import { FaHeart } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
// import { MdWhatsapp } from "react-icons/md";
import { HiThumbUp, HiThumbDown } from "react-icons/hi";
import { IoIosPaperPlane } from "react-icons/io";
import ArrowButton from "../../common/arrowButton/ArrowButton";
import { useHistory } from "react-router-dom";
import RoundButton from "../../common/roundButton/RoundButton";
import { months, teamRating } from "../../common/enum/enum";
import Frame from "../../common/frame/Frame";
// import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { useDispatch, useSelector } from "react-redux";
import { getUserDashBoardDataApi } from "../../../api/userDashboardData/getUserDashBoardDataApi";
import {
  SET_DASHBOARD_DATA,
  UserDashboardDto,
} from "../../../state/actions/types/userDashboardDataType";
import { getCookie } from "../../common/enum/functions";
import { selectUserDashboardData } from "../../../state/selectors/selectUserDashboardData";

const Dashboard: FC = () => {
  const date = new Date();
  const cookie = getCookie("user");
  const user = cookie && JSON.parse(cookie);
  const history = useHistory();
  // const screenSize = useSelector(selectScreenSize);
  const userDashboardData: UserDashboardDto = useSelector(
    selectUserDashboardData
  );
  // const description =
  //   "Royal India Edition is a luxurious experience of diverse cultures, each adding its unique hues to the nation's identity. From the resplendent palaces that dot the landscape to the tales of mighty kings and queens who shaped the nation's destiny, the legacy of royal India resonates through its architecture, traditions, and captivating stories. Includes all 5 star luxury stays, cultural cuisines, domestic flights, day to day individual assistance and transfers.";
  const [dashboardData, setDashboardData] =
    useState<UserDashboardDto>(userDashboardData);
  const dispatch = useDispatch();
  const fetchTours = async () => {
    const response = await getUserDashBoardDataApi(user?.email);
    if (response.status === 200) {
      dispatch({
        type: SET_DASHBOARD_DATA,
        payload: response,
      });
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  useEffect(() => {
    userDashboardData && setDashboardData(userDashboardData);
  }, [userDashboardData]);
  return (
    <div
      className={`overflow-auto bg-white px-4 min-vh-100 mw-100 w-100 align-items-center justify-content-center d-flex m-0`}
    >
      <Container
        fluid="lg"
        className="p-0 m-0 min-vh-100 justify-content-end d-flex flex-column w-100"
      >
        <Row className="p-0 m-0 min-vh-100 align-items-center justify-content-end d-flex">
          <Col className="col-12 py-4 m-0 gap-4 align-items-center d-grid p-0">
            <Row className="h-100 gap-4 position-relative min-vh-45 align-items-start p-0 m-0">
              <Col
                className="p-0 m-0 align-self-normal justify-self-normal"
                style={{ alignSelf: "normal" }}
              >
                <SubCard
                  titleClassName="small text-dark shadow bg-blue"
                  className="h-100"
                  cardColor="#f0f4ff"
                >
                  <Row className="mt-2 gap-1 align-self-start">
                    <Col className="p-0 m-0 flex-column d-flex justify-self-center d col-3">
                      {/* <Card className="img-round w-100 h-100 p-0 m-0"> */}
                      <Card.Img
                        className={`img-round w-100 h-100 min-wh-100 justify-content-center`}
                        style={{
                          // width: "100%",
                          padding: "0px !important",
                          margin: "0px !important",
                        }}
                        onClick={() => {}}
                        src={require("../../../Assets/spring.jpg")}
                      />
                    </Col>{" "}
                    <Col className="align-items-center p p-0 m-0 h-0 fit-content flex-wrap justify-content-start d-flex">
                      <Nav.Link
                        href="#"
                        className="bg-white fw-bold sub-title form__input align-items-center d-flex text-decoration-none fit-content p-2 px-4 m-0"
                        style={{ minHeight: "0" }}
                      >
                        hello
                      </Nav.Link>

                      <Col className="flex-column align-items-start d-flex mt-3 px-2">
                        <span className="h3 align-items-end">
                          {dashboardData?.greeting}{" "}
                          {dashboardData?.userFirstName}
                        </span>
                        <span className="small align-items-end">
                          Hope You're Enjoying!
                        </span>
                      </Col>
                    </Col>
                  </Row>
                  <Col sm={6} md={12} lg={4} xs={12} className="col-3 justify-content-center flex-column d-flex ">
                    <Col>
                      <h1 className="fs-5 fit-content p-0 px-2 m-0 text-center font-weight-normal">
                        {dashboardData?.userFirstName}{" "}
                        {dashboardData?.userLastName}
                      </h1>
                    </Col>
                    <div>
                      <h1 className="p fit-content p-0 px-2 m-0 text-center small font-weight-normal">
                        {"User ID:#LMI-PIDI001"}
                      </h1>
                    </div>
                  </Col>
                  <Col className="align-items-start mt-5 pt-5 p-0 m-0 w-100 flex-wrap d-flex">
                    <Col
                      className="bg-white gap-3 p form__input align-items-start d-flex w-100 flex-column text-decoration-none p-4 m-0"
                      style={{ minHeight: "0" }}
                    >
                      <div>Complete your profile now</div>
                      <Row className="position-relative align-items-center p-0 mt-3 px-5 m-0 justify-content-center d-flex w-100">
                        <Col className="col-1  justify-content-end d-flex p-0 m-0">
                          <IoIosPaperPlane className="img-round w-75 h-50 border p-0 m-0  border-5" />
                          {/* <div className="active small">Sign In</div> */}
                        </Col>
                        <Col className="col-2 border-top-1 border p-0 m-0  timeline-line"></Col>
                        <Col className="col-1 justify-content-center d-flex p-0 m-0">
                          <IoIosPaperPlane className="img-round w-75 h-50 border p-0 m-0  border-5" />
                          {/* <div className="active small">
                              Profile Customize
                            </div> */}
                        </Col>
                        <Col className="col-2 border-top-1 border p-0 m-0  timeline-line"></Col>

                        <Col className="col-1 p-0 m-0">
                          <IoIosPaperPlane className="img-round w-75 h-50 border p-0 m-0  border-5" />
                          {/* <div className="active small">
                              Complete 1st Trip
                            </div> */}
                        </Col>
                      </Row>
                      <Row className="position-relative align-items-center p-0 m-0 justify-content-between d-flex w-100">
                        <Col className="col-3  justify-content-center d-flex p-0 m-0">
                          <div className="active small">Sign In</div>
                        </Col>
                        <Col className="col-3 justify-content-center d-flex p-0 m-0">
                          <div className="active small">Profile Customize</div>
                        </Col>

                        <Col className="col-3 p-0 justify-content-center d-flex m-0">
                          <div className="active small">Complete 1st Trip</div>
                        </Col>
                      </Row>
                    </Col>
                  </Col>
                </SubCard>
              </Col>
              <Col
                sm={12}
                md={4}
                lg={4}
                xs={12}
                className="p-0 col-4 m-0 gap-4 d-flex flex-column align-items-start"
              >
                <Row className="align-self-start gap-4 d-flex">
                  <Col className="align-items-center p-0 m-0 h-0 fit-content flex-wrap justify-content-center d-flex">
                    <FaMapMarkerAlt size={"25px"} />
                    GOA, INDIA
                  </Col>
                  <Col className="align-items-center p-0 m-0 h-0 fit-content flex-wrap justify-content-center rounded-3 d-flex">
                    <Col
                      className="bg-light-grey flex-row rounded-3 align-items-center d-flex text-decoration-none fit-content p-1 m-0"
                      style={{ minHeight: "0", background: "#e9eefe" }}
                    >
                      <Row className="p p-0 px-2 m-0 text-white flex-row d-contents font-weight-normal">
                        <Col className="p-0 m-0 px-1 align-items-center">
                          <Card.Img
                            className={`img-round w-100 h-100 p-0 m-0 align-items-center d-flex justify-content-center`}
                            style={{
                              width: "100%",
                              padding: "0px !important",
                              margin: "0px !important",
                            }}
                            onClick={() => {}}
                            src={require("../../../Assets/watch.png")}
                          />
                        </Col>
                        <Col
                          className="p-0 m-0 border border-1 text-center small rounded-3"
                          style={{ background: "#879cff" }}
                        >
                          {date.getHours()}
                        </Col>
                        <Col
                          className="p-0 m-0 col-1 border border-1 text-center small rounded-3"
                          style={{ background: "##c0caf8" }}
                        >
                          :
                        </Col>
                        <Col
                          className="p-0 m-0 border border-1 text-center small rounded-3"
                          style={{ background: "#879cff" }}
                        >
                          {date.getMinutes()}
                        </Col>
                      </Row>
                    </Col>
                  </Col>
                  <Col
                    className="align-items-center rounded-3 p-0 m-0 h-0 fit-content flex-wrap justify-content-center d-flex"
                    style={{ background: "#e9eefe" }}
                  >
                    <div
                      className="fw-bold rounded-3 p-1 align-items-center d-flex"
                      style={{ minHeight: "0", color: "#97a9ff" }}
                    >
                      {date.getDate()}
                      <div
                        className="text-white fw-bold rounded-3 px-2 mx-2 align-items-center d-flex p-0 m-0"
                        style={{ minHeight: "0", background: "#97a9ff" }}
                      >
                        {months[date.getUTCMonth() - 1]}
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row className="p-0 d-flex flex-md-column mt-2 m-0 h-100 w-100 position-relative gap-4 align-items-end">
                  <Col className="align-self-stretch p-0 m-0">
                    <SubCard
                      titleClassName="small text-dark shadow bg-blue"
                      className="h-100"
                      cardColor="#ccd5ff"
                    >
                      <h1 className="p-0 px-2 m-0 normal text-dark text-center font-weight-normal">
                        So how's today's trip?
                      </h1>
                      <Row className="my-4">
                        <Col className="col-6">
                          <Col
                            className="bg-white form__input align-items-center d-flex w-100 flex-column text-decoration-none  p-2 px-4 m-0"
                            style={{ minHeight: "0" }}
                          >
                            <HiThumbUp size={"3vh"} fill="#879cff" />
                          </Col>
                        </Col>
                        <Col className="col-6">
                          <Col
                            className="bg-white form__input align-items-center d-flex w-100 flex-column text-decoration-none  p-2 px-4 m-0"
                            style={{ minHeight: "0" }}
                          >
                            <HiThumbDown size={"3vh"} fill="#879cff" />
                          </Col>
                        </Col>
                      </Row>
                    </SubCard>
                  </Col>

                  <Col className="align-self-stretch p-0 m-0">
                    <SubCard
                      titleClassName="small text-dark shadow bg-blue"
                      className="h-100 align-items-center"
                      cardColor="#e9eefe"
                    >
                      <Row
                        style={{ minHeight: "27vh" }}
                        className="align-self-stretch flex-wrap d-flex p-0 m-0 h-100"
                      >
                        <span className=" position-relative d-flex flex-row p-0 px-2 m-0">
                          {teamRating.map((index: number) => (
                            <Frame />
                          ))}
                        </span>{" "}
                        <Row className="mt-2 align-items-end align-self-normal justify-self-normal p-0 m-0">
                          <Col className="fs-3 p-2 m-0 bold col-10">
                            Journal
                          </Col>
                        </Row>
                        <ArrowButton
                          // size="6vh"
                          fill="#97a9ff"
                          className={
                            "position-absolute pointer bottom-0 p-2 end-0 w-30"
                          }
                          onClick={() => history.push("/comingSoon")}
                        />
                      </Row>
                    </SubCard>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Col className="p-0 d-flex flex-md-row flex-sm-column flex-column  mt-2 m-0 h-100 w-100 position-relative gap-4 align-items-end">
              <Col className="align-self-stretch p-0 m-0">
                <SubCard
                  titleClassName="small text-dark shadow bg-blue"
                  className="h-100"
                  cardColor="#e9eefe"
                >
                  <Row className="align-self-stretch flex-wrap d-flex p-0 m-0 h-100">
                    <Col className="p-0 m-0 col-6 h-100">
                      {/* <Card className="img-round w-100 h-100 p-0 m-0"> */}
                      <Card.Img
                        className={`w-100 pointer h-100 min-wh-100 form__input justify-content-center`}
                        style={{
                          // width: "100%",
                          padding: "0px !important",
                          margin: "0px !important",
                        }}
                        onClick={() => history.push("/profile/trips")}
                        src={require("../../../Assets/spring.jpg")}
                      />
                      {/* </Card> */}
                    </Col>{" "}
                    <Col className="align-items-start pointer flex-column small p-2 flex-wrap m-0 fit-content justify-content-start d-flex">
                      <div
                        onClick={() =>
                          history.push("/profile/trips/tour-detail")
                        }
                        className="p-0 m-0"
                      >
                        Day {dashboardData?.ongoingTourSingleDayBrief?.dayNo}
                      </div>{" "}
                      <div
                        onClick={() =>
                          history.push("/profile/trips/tour-detail")
                        }
                        className="p fw-bold"
                      >
                        {dashboardData?.ongoingTourSingleDayBrief?.heading}
                      </div>{" "}
                      <div>
                        {dashboardData?.ongoingTourSingleDayBrief?.shortDesc}
                      </div>{" "}
                      <ArrowButton
                        fill="#97a9ff"
                        className={
                          "position-absolute bottom-0 pointer bold p p-2 text-white position-absolute fw-bold bottom-0 end-0"
                        }
                        onClick={() =>
                          history.push("/profile/trips/tour-detail")
                        }
                      />
                    </Col>
                  </Row>
                </SubCard>
              </Col>

              <Col className="align-self-stretch p-0 m-0">
                <SubCard
                  titleClassName="small text-dark shadow bg-blue"
                  className="h-100 align-items-center"
                  cardColor="#e9eefe"
                >
                  <Row
                    style={{ minHeight: "27vh" }}
                    className="align-self-stretch flex-wrap d-flex p-0 m-0 h-100"
                  >
                    <h1 className="p-0 px-2 m-0 normal text-dark text-start font-weight-normal">
                      Team Lyamii
                    </h1>
                    <Row>
                      {teamRating.map((num: number) => {
                        return (
                          <Col
                            lg={3}
                            className="p-0 m-0 col-12 d-flex justify-content-center"
                          >
                            <Col
                              lg={7}
                              className="col-4 flex-column d-flex position-relative p-0 m-0"
                            >
                              <RoundButton
                                className="border-5 border circle-core"
                                bordercolor="#0e3c30"
                                size={"calc(12*100vw"}
                                fill={"#c4cdfe"}
                                img={require("../../../Assets/avatar.png")}
                              />
                              <Row className="my-4 justify-content-center">
                                {[...Array(num)]?.map((index: number) => {
                                  return (
                                    <AiFillStar
                                      fill="orange"
                                      key={index}
                                      size={10}
                                      style={{
                                        color: "orange",
                                        width: "fit-content",
                                        paddingLeft: "0px",
                                        paddingRight: "0px",
                                        marginTop: "0px",
                                      }}
                                      className="d-flex"
                                    />
                                  );
                                })}
                              </Row>
                            </Col>
                          </Col>
                        );
                      })}
                    </Row>
                  </Row>
                </SubCard>
              </Col>

              <Col
                sm={12}
                xs={12}
                lg={2}
                md={2}
                className="align-self-stretch p-0 m-0"
              >
                <SubCard
                  titleClassName="small text-dark shadow bg-blue"
                  className="h-100 align-items-center"
                  cardColor="#879cff"
                >
                  <Row
                    style={{ minHeight: "27vh" }}
                    className="align-self-stretch flex-wrap d-flex p-0 m-0 h-100"
                  >
                    <h1 className="p flex-column p-0 px-2 m-0 text-white align-self-start d-flex font-weight-normal">
                      <Card.Img
                        className={`w-100 p-0 pointer m-0 min-wh-100 justify-content-center`}
                        style={{
                          // width: "100%",
                          padding: "0px !important",
                          margin: "0px !important",
                        }}
                        onClick={() => history.push("/comingSoon")}
                        src={require("../../../Assets/food.png")}
                      />
                    </h1>{" "}
                    <Col className="col-12 align-self-center bold text-white fs-auto justify-content-center d-flex">
                      20$
                    </Col>
                  </Row>
                </SubCard>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
