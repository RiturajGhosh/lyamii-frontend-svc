import React, { FC } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { journeyOptions } from "../../common/enum/enum";
import style from "./LifetimeJourney.module.scss";
import { useHistory } from "react-router-dom";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { useSelector } from "react-redux";
import { LuChevronRightCircle } from "react-icons/lu";
const LifetimeJourney: FC = () => {
  const history = useHistory();
  const screenSize = useSelector(selectScreenSize);

  return (
    <>
      {/* <div className={`${style.bgImage} position-absolute`}></div> */}

      <Col
        className="home-about-section sectionContainer d-flex justify-content-center py-42 px-0"
        id="about"
      >
        <Col lg={11} md={11} sx={11} xs={11}>
          <Col className="card-body w-100">
            {
              <>
                <span
                  className="display-3 text-outline fw-bold flex-row position-relative"
                  style={{
                    color: "#EA8A04",
                    fontFamily: "DISTILLERYSTRONG",
                    // fontSize: screenSize.screenSize < 786 ? "5.5dvi" : "6dvi",
                  }}
                >
                  Journey{" "}
                  <span
                    className="heading h1 text-white text-outline"
                    style={{ fontFamily: "Robotic" }}
                  >
                    {"OF A  "}
                  </span>{" "}
                  <span
                    className="display-3 position-absolute d-inline-flex pl-3 align-items-start"
                    style={{ color: "#168709", fontFamily: "DellaRespira" }}
                  >
                    Lif
                    <strong className="">e</strong>
                    time
                    <img
                      alt=""
                      className={`inline-flex w-25 h-10`}
                      style={{
                        padding: "0px !important",
                        margin: "0px !important",
                      }}
                      src={require("../../../Assets/journey.png")}
                    />
                  </span>
                </span>
              </>
            }
          </Col>
          {}
          <Col md={12} lg={12} className="justify-content-between p-0 d-flex">
            <div
              style={{
                flex: "row !important",
                width: "100%",
                height: screenSize.screenSize < 786 ? "400px" : "",
              }}
              className={`
              d-flex ${
                screenSize.screenSize < 786
                  ? ""
                  : `flex-row ${style.leftcolumn}`
              } p-0`}
            >
              <Col
                className={`${
                  screenSize.screenSize < 786 ? "mx-1" : "my-2 mx-1"
                } `}
                style={{
                  float: screenSize.screenSize < 786 ? "left" : "inherit",
                  width: screenSize.screenSize < 786 ? "50%" : "30%",
                  height: screenSize.screenSize < 786 ? "100%" : "60%",
                  objectFit: "cover",
                }}
                onClick={() => history.push(journeyOptions[0].path)}
              >
                <img
                  src={journeyOptions[0].imgPath}
                  alt="Paris"
                  style={{
                    float: screenSize.screenSize < 786 ? "left" : "inherit",
                    width: "100%",
                    height: screenSize.screenSize < 786 ? "84%" : "100%",
                    objectFit: "cover",
                  }}
                />
                <Button className="align-items-center mh-15 mt-2 w-100 bg-dark-blue justify-content-center d-flex">
                  <span
                    onClick={() => history.push(journeyOptions[0].path)}
                    className="bold fs-auto p-2 d-inline-flex m-0 fw-bold"
                    style={{ fontFamily: "OldStandard" }}
                  >
                    {journeyOptions[0].name}
                  </span>
                  <span className="text-nowrap">
                    <LuChevronRightCircle
                      size={screenSize.screenSize < 786 ? "20px" : "30px"}
                      onClick={() => history.push(journeyOptions[0].path)}
                    />
                  </span>
                </Button>
              </Col>
              <div
                style={{
                  width: screenSize.screenSize < 786 ? "35%" : "66%",
                }}
                className={`
              d-flex ${
                screenSize.screenSize < 786 ? "flex-column" : `flex-row`
              } p-0`}
              >
                <Col
                  className={` ${
                    screenSize.screenSize < 786 ? "mx-1" : "my-2 mx-1"
                  } `}
                  style={{
                    float: "right",
                    width: screenSize.screenSize < 786 ? "100%" : "100%",
                    height: screenSize.screenSize < 786 ? "50%" : "60%",
                    objectFit: "cover",
                  }}
                  onClick={() => history.push(journeyOptions[1].path)}
                >
                  <img
                    src={journeyOptions[1].imgPath}
                    alt="Paris"
                    style={{
                      float: "left",
                      width: "100%",
                      height: screenSize.screenSize < 786 ? "75%" : "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Button className="align-items-center mh-15 mt-2 w-100 bg-dark-blue justify-content-center d-flex">
                    <span
                      onClick={() => history.push(journeyOptions[1].path)}
                      className="bold fs-auto p-2 d-inline-flex m-0 fw-bold"
                      style={{ fontFamily: "OldStandard" }}
                    >
                      {journeyOptions[1].name}
                    </span>
                    <span className="text-nowrap">
                      <LuChevronRightCircle
                        size={screenSize.screenSize < 786 ? "20px" : "30px"}
                        onClick={() => history.push(journeyOptions[1].path)}
                      />
                    </span>
                  </Button>
                </Col>
                <Col
                  className={` ${
                    screenSize.screenSize < 786 ? "mx-1" : "my-2 mx-1"
                  } `}
                  style={{
                    float: "right",
                    width: screenSize.screenSize < 786 ? "100%" : "100%",
                    height: screenSize.screenSize < 786 ? "50%" : "60%",
                    objectFit: "cover",
                  }}
                  onClick={() => history.push(journeyOptions[2].path)}
                >
                  <img
                    src={journeyOptions[2].imgPath}
                    alt="Paris"
                    style={{
                      float: "right",
                      width: "100%",
                      height: screenSize.screenSize < 786 ? "75%" : "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Button className="align-items-center mh-15 mt-2 w-100 bg-dark-blue justify-content-center d-flex">
                    <span
                      onClick={() => history.push(journeyOptions[2].path)}
                      className="bold fs-auto p-2 d-inline-flex m-0 fw-bold"
                      style={{ fontFamily: "OldStandard" }}
                    >
                      {journeyOptions[2].name}
                    </span>
                    <span className="text-nowrap">
                      <LuChevronRightCircle
                        size={screenSize.screenSize < 786 ? "20px" : "30px"}
                        onClick={() => history.push(journeyOptions[2].path)}
                      />
                    </span>
                  </Button>
                </Col>
              </div>
            </div>
            {/* <Row className="w-100 m-0 p-0 d-flex justify-content-center">
              <Col
                md={4}
                sm={9}
                xs={8}
                lg={4}
                xl={4}
                xxl={4}
                className={`p-0 ${style.leftcolumn}`}
              >
                <Card
                  className={` ${
                    screenSize.screenSize < 786 ? "mx-1" : "my-2 mx-1"
                  } h-60`}
                  onClick={() => history.push("/bharat-tours")}
                >
                  <Card.Body className="p-0 d-contents">
                    <Card.Img
                      className={`p-0 m-0 h-100 justify-content-center`}
                      style={{
                        padding: "0px !important",
                        margin: "0px !important",
                      }}
                      src={journeyOptions[0].path}
                    />
                  </Card.Body>
                </Card>
                <Button className="align-items-center mh-15 mt-2 mx-1 w-100 bg-dark-blue justify-content-center d-flex">
                  <span
                    onClick={() => history.push("/bharat-tours")}
                    className="bold fs-auto p-2 d-inline-flex m-0 fw-bold"
                    style={{ fontFamily: "OldStandard" }}
                  >
                    {journeyOptions[0].name}
                  </span>
                  <span className="text-nowrap">
                    <LuChevronRightCircle
                      size={"30px"}
                      onClick={() => history.push("/bharat-tours")}
                    />
                  </span>
                </Button>
              </Col>
              <Col
                md={8}
                sm={3}
                lg={8}
                xs={4}
                xl={8}
                xxl={8}
                className={`p-0 ${style.rightcolumn} h-60 ${
                  screenSize.screenSize < 786 ? "" : "d-flex"
                }`}
              >
                <Col md={6} lg={6} className="p-0">
                  <Card
                    className={` ${
                      screenSize.screenSize < 786 ? "mx-1 mb-2" : "my-2 mx-1"
                    } h-100`}
                    onClick={() => history.push("/backpackers")}
                  >
                    <Card.Body className="p-0 d-contents">
                      <Card.Img
                        className={`p-0 m-0 h-100 justify-content-center`}
                        style={{
                          padding: "0px !important",
                          margin: "0px !important",
                        }}
                        src={journeyOptions[1].path}
                      />
                    </Card.Body>
                  </Card>
                  <Button className="align-items-center mt-2 w-100 bg-dark-blue justify-content-center d-flex">
                    <span
                      onClick={() => history.push("/backpackers")}
                      className="bold p-2 fs-auto m-0 fw-bold"
                      style={{ fontFamily: "Bellota" }}
                    >
                      {journeyOptions[1].name}
                    </span>
                    <span className="text-nowrap">
                      <LuChevronRightCircle
                        onClick={() => history.push("/backpackers")}
                        size={"30px"}
                      />
                    </span>
                  </Button>
                </Col>

                <Col md={6} lg={6} className="p-0">
                  <Card
                    className={` ${
                      screenSize.screenSize < 786 ? "mx-1 mt-2" : "my-2 mx-1"
                    } h-100`}
                    onClick={() => history.push("/combo")}
                  >
                    <Card.Body className="p-0 d-contents">
                      <Card.Img
                        className={`p-0 m-0 h-100 justify-content-center ${style.reasonCard}`}
                        style={{
                          // width: "100%",
                          padding: "0px !important",
                          margin: "0px !important",
                        }}
                        src={journeyOptions[2].path}
                      />
                    </Card.Body>
                  </Card>
                  <Button className="align-items-center mt-2 w-100 bg-dark-blue justify-content-center d-flex">
                    <span
                      className="bold p-2 fs-auto m-0 fw-bold"
                      onClick={() => history.push("/combo")}
                    >
                      {journeyOptions[2].name}
                    </span>
                    <span className="text-nowrap">
                      <LuChevronRightCircle
                        onClick={() => history.push("/combo")}
                        size={"30px"}
                      />
                    </span>
                  </Button>
                </Col>
              </Col>
            </Row> */}
          </Col>
        </Col>
      </Col>
    </>
  );
};

export default LifetimeJourney;
