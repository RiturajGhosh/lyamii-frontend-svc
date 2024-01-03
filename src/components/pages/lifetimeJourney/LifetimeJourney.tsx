import React, { FC } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
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
      <Container className="position-relative sectionContainer py-42 w-100">
        <Col className="card-body w-100">
          {
            <>
              <span
                className="display-2 text-outline fw-bold flex-row position-relative"
                style={{ color: "#cd8e45" }}
              >
                Journey <span className="heading text-white">{"OF A  "}</span>{" "}
                <span
                  className="mt-3 position-absolute d-inline-flex pl-3 align-items-center"
                  style={{ color: "#168709" }}
                >
                  Lif
                  <Card.Img
                    className={`w-15 h-75 p-2 m-0 position-absolute top-0 start-50 justify-content-center`}
                    style={{
                      padding: "0px !important",
                      margin: "0px !important",
                    }}
                    src={require("../../../Assets/pagdi.png")}
                  />etime
                  <img
                    className={`inline-flex w-30 h-10`}
                    style={{
                      padding: "0px !important",
                      margin: "0px !important",
                    }}
                    src={require("../../../Assets/indianflag.png")}
                  />
                </span>
              </span>
            </>
          }
        </Col>
        {}
        <Col md={12} lg={12} className="justify-content-between p-0 d-flex">
          <Row className="w-100 m-0 p-0 d-flex justify-content-center">
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
              <Button className="align-items-center mt-2 mx-1 w-100 bg-dark-green justify-content-center d-flex">
                <h1 className="bold p fs-16 m-0 p-2 fw-bold">
                  {journeyOptions[0].name}
                </h1>
                <LuChevronRightCircle size={"30px"} />
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
                <Button className="align-items-center mt-2 w-100 bg-dark-green justify-content-center d-flex">
                  <span className="bold p p-2 m-0 fw-bold">
                    {journeyOptions[1].name}
                  </span>
                  <LuChevronRightCircle size={"30px"} />
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
                <Button className="align-items-center mt-2 w-100 bg-dark-green justify-content-center d-flex">
                  <h1 className="bold p fs-16 p-2 m-0 fw-bold">
                    {journeyOptions[2].name}
                  </h1>
                  <LuChevronRightCircle size={"30px"} />
                </Button>
              </Col>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default LifetimeJourney;
