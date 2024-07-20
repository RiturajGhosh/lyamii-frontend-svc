import React, { FC } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { reasons } from "../../common/enum/enum";
import style from "./WhyLamii.module.scss";

const WhyLyamii: FC = () => {
  // const [flipped, setFliped] = useState(false);
  // const flip = () => {
  //   setFliped(!flipped);
  // };
  return (
    <>
      <Col
        className="home-about-section sectionContainer d-flex justify-content-center py-42 px-0"
        id="about"
      >
        <Col lg={11} md={11} sx={11} xs={11}>
          <Col>
            <Col md={12} lg={5} className="card-body">
              <Col>
                <p
                  className="text-white fw-bold heading position-absolute px-5 text-shadow-dark"
                  style={{
                    color: "black",
                    fontFamily: "OldStandardbold",
                  }}
                >
                  Why
                </p>
                <Row className="">
                  <span
                    className="fw-bold display-1 w-100 py-4 d-flex text-shadow-light"
                    style={{
                      color: "black",
                      fontFamily: "OldStandard",
                    }}
                  >
                    Lyamii
                    <Card.Img
                      className={`w-10 h-100 p-2 m-0 justify-content-center`}
                      style={{
                        padding: "0px !important",
                        margin: "0px !important",
                      }}
                      src={require("../../../Assets/quesMark.png")}
                    />
                  </span>
                </Row>
              </Col>
            </Col>
            <Col lg={12} className="justify-content-between p-0 d-flex">
              <Row className="justify-content-center flex-wrap g-2 flex-row scrolling-wrapper-flexbox">
                {reasons.map((reason, idx) => (
                  <Col
                    key={idx}
                    md={6}
                    lg={3}
                    className={`d-flex mb-4 p-0 m-0 col-6`}
                  >
                    {/* <Card className={`my-2 box box-1 d-flex mx-1`}>
                      <Card.Body className="first p-0">
                        <Card.Img
                          className={`p-5 m-0 justify-content-center ${style.reasonCard}`}
                          style={{
                            // width: "100%",
                            padding: "0px !important",
                            margin: "0px !important",
                          }}
                          src={reason.img}
                        />
                        <Card.Img
                          className={`p-5 m-0 justify-content-center`}
                          style={{
                            padding: "0px !important",
                            margin: "0px !important",
                          }}
                          src={reason.img}
                        />
                        <Card.Body className="py-0"></Card.Body>
                      </Card.Body>
                      <section className="overflow-auto second">
                        <Card.Body className="pt-0">
                          <Card.Title className="bold p fw-bold">
                            {reason.title}
                          </Card.Title>
                          <Card.Text>{reason.description}</Card.Text>
                        </Card.Body>
                      </section>
                    </Card> */}
                    <div
                      className={`bg-transparent form__input my-2 mx-1 flipcard shadow position-relative h-100 overflow-hidden p-0 m-0`}
                    >
                      <div className="bg-transparent content position-relative p-0 m-0 h-100">
                        <Card.Body className="bg-transparent position-relative p-0 m-0 h-100 front">
                          <Card.Img
                            className={`m-0 justify-content-center ${style.reasonCard}`}
                            style={{
                              padding: "0px !important",
                              margin: "0px !important",
                            }}
                            // src={reason}
                          />
                        </Card.Body>
                        <section
                          className="align-items-center m-0 d-flex h-100 p-2 w-100 back"
                          style={{ background: "#0752a1" }}
                        >
                          <Card.Body className="p-2 d-flex h-100 flex-column p-2 justify-content-center align-items-center align-self-center">
                            <span className="bold fs-medium fw-bold">
                              {reason.title}
                            </span>
                            <Card.Subtitle
                              className="text-center fs-8 d-flex"
                              style={{ fontFamily: "Sanchez" }}
                            >
                              {reason.description}
                            </Card.Subtitle>
                          </Card.Body>
                        </section>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Col>
        </Col>
      </Col>
    </>
  );
};

export default WhyLyamii;
