import React, { FC } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import {
  journeyOptions,
  mapDescription,
  reasons,
} from "../../common/enum/enum";
import fingerPrint from "../../../Assets/fingerprint.svg";
import style from "./LifetimeJourney.module.scss";
import { useHistory } from "react-router-dom";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { useSelector } from "react-redux";
const LifetimeJourney: FC = () => {
  const history = useHistory();
  const screenSize = useSelector(selectScreenSize);
  return (
    <>
      {/* <div className={`${style.bgImage} position-absolute`}></div> */}
      <Container className="position-relative  sectionContainer py-42 ">
        <Col className="card-body w-100">
          {
            <h2 className="card-text heading darkBlue fw-bold text-shadow-light">
              Journey of a <span className="brown">Lifetime</span>
            </h2>
          }
        </Col>
        {}
        <Col md={12} lg={12} className="justify-content-between p-0 d-flex">
          <Row className="w-100 m-0 p-0 d-flex justify-content-center">
            <Col
              md={4}
              sm={8}
              xs={8}
              lg={4}
              xl={4}
              xxl={4}
              className={`p-0 ${style.leftcolumn}`}
            >
              <Card
                className={` ${
                  screenSize.screenSize < 786 ? "mx-1" : "my-2 mx-1"
                } h-100`}
                onClick={() => history.push("/backpackers")}
              >
                <Card.Body className="p-0">
                  <Card.Img
                    className={`p-0 m-0 justify-content-center`}
                    style={{
                      padding: "0px !important",
                      margin: "0px !important",
                    }}
                    src={journeyOptions[0].path}
                  />
                  <Card.Body>
                    <Card.Title className="bold p fs-6 fw-bold">
                      {journeyOptions[0].name}
                    </Card.Title>
                    <Card.Text>{}</Card.Text>
                  </Card.Body>
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={8}
              sm={4}
              lg={8}
              xs={4}
              xl={8}
              xxl={8}
              className={`p-0 ${style.rightcolumn} ${
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
                  <Card.Body className="p-0">
                    <Card.Img
                      className={`p-0 m-0 justify-content-center`}
                      style={{
                        padding: "0px !important",
                        margin: "0px !important",
                      }}
                      src={journeyOptions[1].path}
                    />
                    <Card.Body>
                      <Card.Title className="bold fs-6 p fw-bold">
                        {journeyOptions[1].name}
                      </Card.Title>
                      <Card.Text>{}</Card.Text>
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} lg={6} className="p-0">
                <Card
                  className={` ${
                    screenSize.screenSize < 786 ? "mx-1 mt-2" : "my-2 mx-1"
                  } h-100`}
                  onClick={() => history.push("/backpackers")}
                >
                  <Card.Body className="p-0">
                    <Card.Img
                      className={`p-0 m-0 justify-content-center`}
                      style={{
                        padding: "0px !important",
                        margin: "0px !important",
                      }}
                      src={journeyOptions[2].path}
                    />
                    <Card.Body>
                      <Card.Title className="bold p fs-6 fw-bold">
                        {journeyOptions[2].name}
                      </Card.Title>
                      <Card.Text>{}</Card.Text>
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default LifetimeJourney;
