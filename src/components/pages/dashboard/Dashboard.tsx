import React, { FC, useEffect, useState } from "react";
import {
  Image,
  Col,
  Row,
  Ratio,
  Card,
  Button,
  Container,
  Nav,
} from "react-bootstrap";
import style from "./TourDetailCard.module.scss";
import { IoIosHeart, IoLogoFacebook, IoMdHeartEmpty } from "react-icons/io";
import {
  AiFillStar,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsHouseCheck } from "react-icons/bs";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { useSelector } from "react-redux";
import { selectTourData } from "../../../state/selectors/selectTourData";
import { tours } from "../mockData/destinations";
import ContainerSection from "../../common/container/Container";
import { useHistory } from "react-router-dom";
import path from "path";
import SubCard from "../../common/subCard/SubCard";
import { FaHeart, FaLandMineOn } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { HiThumbUp, HiThumbDown } from "react-icons/hi";
import { IoIosPaperPlane } from "react-icons/io";
import ArrowButton from "../../common/arrowButton/ArrowButton";

const Dashboard: FC = () => {
  const screenSize = useSelector(selectScreenSize);
  const [IsWishlisted, setToWishList] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);
  const [page, setPage] = useState(0);
  const history = useHistory();
  const selectedtourData: any = tours[0] || {};
  // (selectTourData);
  const menus = [
    {
      title: "Personal Data",
      subTitle: "Edit Personal Details",
      path: "/personalData",
    },
    {
      title: "Prefences",
      subTitle: "Change your preference in your way",
      path: "/personalData",
    },
    {
      title: "Privacy & Security",
      subTitle: "Your Privacy Your Choice",
      path: "/personalData",
    },
    {
      title: "Payments",
      subTitle: "Manage your payment methods",
      path: "/personalData",
    },
    {
      title: "Documentations",
      subTitle: "Stay updated with Digital Documents",
      path: "/personalData",
    },
    {
      title: "Account Information",
      subTitle: "Edit Personal Details",
      path: "/personalData",
    },
    {
      title: "Manage Travellers",
      subTitle: "Add members to Lyamii.",
      path: "/personalData",
    },
  ];

  return (
      <div
        className={`bg-white px-4 min-vh-100 mw-100 w-100 align-items-center justify-content-end d-flex m-0`}
      >
        <Container className="p-0 m-0 min-vh-100 justify-content-end d-flex flex-column w-100">
          <Row className="p-0 m-0 min-vh-100 align-items-center justify-content-end d-flex">
            <Col className="col-12 py-4 m-0 gap-4 align-items-center d-grid p-0">
              <Row className="h-100 gap-4 position-relative min-vh-45 align-items-start p-0 m-0">
                <Col
                  className="p-0 m-0 align-self-normal justify-self-normal"
                  style={{ alignSelf: "normal" }}
                >
                  <SubCard
                    titleStyling="small text-dark shadow bg-blue"
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
                            Good Evening Michle
                          </span>
                          <span className="small align-items-end">
                            Hope You're Enjoying!
                          </span>
                        </Col>
                      </Col>
                    </Row>
                    <Col className="col-3">
                      <Col>
                        <h1 className="p p-0 px-2 m-0 text-center font-weight-normal">
                          {"Michel Richard"}
                        </h1>
                      </Col>
                      <div>
                        <h1 className="p p-0 px-2 m-0 text-center small font-weight-normal">
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
                            <div className="active small">
                              Profile Customize
                            </div>
                          </Col>

                          <Col className="col-3 p-0 justify-content-center d-flex m-0">
                            <div className="active small">
                              Complete 1st Trip
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Col>
                  </SubCard>
                </Col>
                <Col className="p-0 col-4 m-0 gap-4 d-flex flex-column align-items-start">
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
                            21
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
                            20
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
                        15
                        <div
                          className="text-white fw-bold rounded-3 px-2 mx-2 align-items-center d-flex p-0 m-0"
                          style={{ minHeight: "0", background: "#97a9ff" }}
                        >
                          Auguest
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <SubCard
                    titleStyling="small bg-secondary shadow"
                    className="m-0 p-0"
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
                          <HiThumbUp size={"50%"} fill="#879cff" />
                        </Col>
                      </Col>
                      <Col className="col-6">
                        <Col
                          className="bg-white form__input align-items-center d-flex w-100 flex-column text-decoration-none  p-2 px-4 m-0"
                          style={{ minHeight: "0" }}
                        >
                          <HiThumbDown size={"50%"} fill="#879cff" />
                        </Col>
                      </Col>
                    </Row>
                  </SubCard>
                  <SubCard
                    titleStyling="small bg-secondary  shadow"
                    className="h-75 m-0 mt-2 p-0 align-self-normal justify-self-normal"
                    cardColor="#e9eefe"
                  >
                    <Row className="mt-2 h-100 align-items-start align-self-normal justify-self-normal p-0 m-0">
                      <Col className="normal p-2 m-0 col-7">
                        Make Your Dreams Come True!
                      </Col>
                      <Col className="col-5 p-2 h-75 w-30 bg-danger circle-core justify-content-center align-items-end d-flex">
                        <FaHeart
                          size={"70%"}
                          fill="white"
                          className="mt-4 align-items-center d-flex"
                        />
                      </Col>
                    </Row>
                    <span className="small p-0 px-2 m-0">
                      Check Wishlist Now
                    </span>
                    <ArrowButton
                      fill="#97a9ff"
                      className={"position-absolute bottom-0 p-2 end-0"}
                      onClick={() => {}}
                    />
                  </SubCard>
                </Col>
              </Row>
              <Row className="p-0 min-vh-35 mt-2 m-0 h-100 position-relative gap-2 align-items-end">
                <Col className="align-self-stretch p-0 m-0">
                  <SubCard
                    titleStyling="small text-dark shadow bg-blue"
                    className="h-100"
                    cardColor="#e9eefe"
                  >
                    <Row className="align-self-stretch flex-wrap d-flex p-0 m-0 h-100">
                      <Col className="p-0 m-0 col-6 h-100">
                        {/* <Card className="img-round w-100 h-100 p-0 m-0"> */}
                        <Card.Img
                          className={`w-100 h-100 min-wh-100 form__input justify-content-center`}
                          style={{
                            // width: "100%",
                            padding: "0px !important",
                            margin: "0px !important",
                          }}
                          onClick={() => {}}
                          src={require("../../../Assets/spring.jpg")}
                        />
                        {/* </Card> */}
                      </Col>{" "}
                      <Col className="align-items-start flex-column small p-2 flex-wrap m-0 fit-content justify-content-start d-flex">
                        <div className="p-0 m-0">Day 2</div>{" "}
                        <div className="p fw-bold">Goa Carnival</div>{" "}
                        <div>
                          Goa is a paradise of sun and land, where carnival
                          brings joy and color to the land.
                        </div>{" "}
                        <ArrowButton
                          fill="#97a9ff"
                          className={
                            "position-absolute bottom-0 bold p p-2 text-white position-absolute fw-bold bottom-0 end-0"
                          }
                          onClick={() => {}}
                        />
                      </Col>
                    </Row>
                  </SubCard>
                </Col>

                <Col className="align-self-stretch d-flex p-0 m-0">
                  <SubCard
                    titleStyling="small d-flex shadow bg-blue"
                    className="h-100 d-flex"
                    cardColor="#e4e9ff"
                  >
                    <Col>
                      <h1 className="small p-0 pt-4 px-4 m-0 d-flex font-weight-normal">
                        Note down your first Day Experience
                      </h1>{" "}
                      <h1 className="title p-0 px-4 m-0 d-flex fw-bold font-weight-normal">
                        Start your Journal
                      </h1>
                      <ArrowButton
                        fill="#97a9ff"
                        className={"position-absolute bottom-0 p-2 end-0"}
                        onClick={() => {}}
                      />
                    </Col>
                  </SubCard>
                </Col>
                <Col className="align-self-stretch p-0 min-vh-30 col-2 h-100 m-0">
                  <SubCard
                    titleStyling="small text-white shadow bg-blue"
                    className="h-100"
                    cardColor="#879cff"
                  >
                    <h1 className="p flex-column p-0 px-2 m-0 text-white align-self-start d-flex font-weight-normal">
                      <Col className="py-2">Post Today's</Col>
                      <Card.Img
                        className={`w-100 h-100 p-0 m-0 min-wh-100 justify-content-center`}
                        style={{
                          // width: "100%",
                          padding: "0px !important",
                          margin: "0px !important",
                        }}
                        onClick={() => {}}
                        src={require("../../../Assets/memory.png")}
                      />
                    </h1>{" "}
                    <Col className="col-8 align-self-end d-flex">
                      <Row className="p p-0 px-2 m-0 text-white font-weight-normal">
                        <Col className="p-0 m-0">
                          <IoLogoFacebook />
                        </Col>
                        <Col className="p-0 m-0">
                          <AiOutlineInstagram />
                        </Col>
                        <Col className="p-0 m-0">
                          <MdWhatsapp />
                        </Col>
                        <Col className="p-0 m-0">
                          <AiFillTwitterCircle />
                        </Col>
                      </Row>
                    </Col>
                  </SubCard>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default Dashboard;
