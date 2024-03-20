import React, { FC } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import SubCard from "../../common/subCard/SubCard";
import RoundButton from "../../common/roundButton/RoundButton";
import Icon from "../../common/icon/Icon";
import { IoMdMail } from "react-icons/io";
import { MdThumbDown, MdThumbUp } from "react-icons/md";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { RiLock2Fill } from "react-icons/ri";

const CrmDashBoard: FC = () => {
  const date = new Date();
  console.log(date);
  const history = useHistory();
  return (
    <div
      className={`overflow-auto pe-4 min-vh-100 mw-100 w-100 align-items-center justify-content-center d-flex m-0`}
    >
      <Container
        fluid="lg"
        className="p-0 m-0 mw-100 min-vh-100 justify-content-end d-flex flex-column w-100"
      >
        <Row className="p-0 m-0 min-vh-100 align-items-center justify-content-end d-flex">
          <Col className="col-12 py-4 m-0 gap-4 align-items-center d-grid p-0">
            <Row className="d-flex flex-column flex-md-row">
              <Col className="p-0 me-4 mt-2 m-0 h-100 d-flex flex-column justify-content-center position-relative gap-4 align-items-center">
                <Col
                  lg={7}
                  className="d-flex position-relative d-flex justify-content-center p-0 m-0"
                >
                  <RoundButton
                    className="border-5 border circle-core d-flex justify-content-center"
                    bordercolor="white"
                    size={"calc(12*100vw"}
                    fill={"white"}
                    img={require("../../../Assets/avatar.png")}
                  />
                </Col>

                <Col
                  className="col-12 gap-2 flex-column d-flex justify-content-center align-items-start"
                  style={{ minHeight: "42vh" }}
                >
                  <Col className="col-9 justify-content-center d-flex">
                    <Col className="col-12 p-0 m-0">
                      <Button
                        className="w-100 fs-3 bold text-white p-2 font-norwester justify-content-center p-1 px-2 text-dark text-center m-0 border-0"
                        style={{ background: "#0752a1" }}
                        onChange={(e: any) => {}}
                      >
                        Support
                      </Button>
                    </Col>
                  </Col>
                  <Col className="col-5 justify-content-center d-flex p-0 m-0">
                    <Col className="col-12 p-0 m-0">
                      <Button
                        className="rounded-4 w-100 fs-3 font-norwester justify-content-center p-1 px-2 text-dark text-center m-0 border-0"
                        style={{ background: "#0752a1" }}
                        onChange={(e: any) => {}}
                      ></Button>
                    </Col>
                  </Col>
                  <Col className="col-5 justify-content-center d-flex">
                    <Col className="col-12 p-0 m-0">
                      <Button
                        className="rounded-4 w-100 fs-3 font-norwester justify-content-center p-1 px-2 text-dark text-center m-0 border-0"
                        style={{ background: "#0752a1" }}
                        onChange={(e: any) => {}}
                      ></Button>
                    </Col>
                  </Col>
                  <Col className="col-5 justify-content-center d-flex p-0 m-0">
                    <Col className="col-12 p-0 m-0">
                      <Button
                        className="rounded-4 w-100 fs-3 font-norwester justify-content-center p-1 px-2 text-dark text-center m-0 border-0"
                        style={{ background: "#0752a1" }}
                        onChange={(e: any) => {}}
                      ></Button>
                    </Col>
                  </Col>
                  <Col className="col-9 justify-content-center d-flex">
                    <Col className="col-12 p-0 m-0">
                      <Button
                        className="w-100 fs-3 text-white p-2 align-items-center flex-wrap d-flex bold font-norwester justify-content-center p-1 px-2 text-dark text-center m-0 border-0"
                        style={{ background: "#0752a1" }}
                        onChange={(e: any) => {}}
                      >
                        <Col className="col-9">Sales</Col>
                        <Col
                          className="col-3 rounded-circle h-100 p-1 w-20 justify-content-center d-flex"
                          style={{ background: "white" }}
                        >
                          <RiLock2Fill fill="#0752a1"/>
                        </Col>
                      </Button>
                    </Col>
                  </Col>
                </Col>
                <Col
                  className="gap-2 flex-column d-flex justify-content-center align-items-center"
                  style={{ minHeight: "30vh" }}
                >
                  <Row className="justify-content-center d-flex">
                    <Col className="col-9 p-0 m-0">
                      <input
                        className="rounded-4 w-100 h2 font-norwester justify-content-center p-1 px-2 text-dark text-center m-0 border-0"
                        type="text"
                        value={""}
                        style={{
                          background: "#889dfe",
                          fontFamily: "NORWESTER",
                        }}
                        onChange={(e: any) => {}}
                      />
                    </Col>
                  </Row>
                  <Row className="justify-content-center d-flex p-0 m-0">
                    <Col className="col-9 p-0 m-0">
                      <input
                        className="rounded-4 w-100 h2 font-norwester justify-content-center p-1 px-2 text-dark text-center m-0 border-0"
                        type="text"
                        value={""}
                        style={{
                          background: "#889dfe",
                          fontFamily: "NORWESTER",
                        }}
                        onChange={(e: any) => {}}
                      />
                    </Col>
                  </Row>
                </Col>
              </Col>
              <Col className="p-0 d-flex me-4 flex-column mt-2 m-0 h-100 position-relative gap-4 align-items-end">
                <Col className=" align-self-stretch p-0 m-0">
                  <SubCard
                    titleClassName="small text-dark shadow bg-blue"
                    className="h-100"
                    cardColor="#889dfe"
                  >
                    <Row
                      style={{ minHeight: "30vh" }}
                      className="align-self-stretch flex-wrap d-flex p-0 m-0 h-100"
                    >
                      <Col className="p-0 m-0 col-6 h-100"></Col>{" "}
                      <Col className="align-items-start flex-column small p-2 flex-wrap m-0 fit-content justify-content-start d-flex"></Col>
                    </Row>
                  </SubCard>
                </Col>

                <Col className=" align-self-stretch p-0 m-0">
                  <SubCard
                    titleClassName="small text-dark shadow bg-blue"
                    className="h-100"
                    cardColor="#889dfe"
                  >
                    <Row
                      style={{ minHeight: "25vh" }}
                      className="align-self-stretch flex-wrap d-flex p-0 m-0 h-100"
                    >
                      <Col className="p-0 m-0 col-6 h-100"></Col>{" "}
                      <Col className="align-items-start flex-column small p-2 flex-wrap m-0 fit-content justify-content-start d-flex"></Col>
                    </Row>
                  </SubCard>
                </Col>
                <Col className=" align-self-stretch p-0 m-0">
                  <SubCard
                    titleClassName="small text-dark shadow bg-blue"
                    className="h-100"
                    cardColor="#0752a1"
                  >
                    <Row
                      style={{ minHeight: "10vh" }}
                      className="align-self-stretch flex-wrap d-flex p-0 m-0 h-100"
                    >
                      <Col className="p-0 m-0 col-6 h-100"></Col>{" "}
                      <Col className="align-items-start flex-column small p-2 flex-wrap m-0 fit-content justify-content-start d-flex"></Col>
                    </Row>
                  </SubCard>
                </Col>
                <Col className=" align-self-stretch p-0 m-0">
                  <Row className="position-relative align-items-center p-0 my-3 m-0 justify-content-center d-flex w-100">
                    <Col className="col-2 d-flex position-relative justify-content-center p-0 mx-1 m-0">
                      <RoundButton
                        className="border-0 border circle-core"
                        fill={"white"}
                      />
                      <MdThumbUp
                        fill={"#0752a1"}
                        className="position-absolute top-0 mx-auto w-30 h-30 translate-middle-y d-grid"
                      />
                    </Col>
                    <Col className="col-2 d-flex position-relative justify-content-center p-0 mx-1 m-0">
                      <RoundButton
                        className="border-0 border circle-core"
                        fill={"white"}
                      />
                      <MdThumbDown
                        fill={"#0752a1"}
                        className="position-absolute top-0 mx-auto w-30 h-30 translate-middle-y d-grid"
                      />
                    </Col>
                    <Col className="col-3 p-0 m-0">
                      <img
                        className={`active small text-dark top-0 start-0 text-center w-100 rounded-circle p-1 h-100 justify-content-center`}
                        style={{
                          padding: "0px !important",
                          margin: "0px !important",
                        }}
                        src={require("../../../Assets/leftArrow.png")}
                      />
                      <div
                        className="text-center bold fs-small"
                        style={{ color: "#0752a1" }}
                      >
                        BOOTCAMP
                      </div>
                    </Col>
                    <Col className="col-3 p-0 m-0">
                      <img
                        className={`active small text-dark top-0 start-0 text-center w-100 rounded-circle p-1 h-100 justify-content-center`}
                        style={{
                          padding: "0px !important",
                          margin: "0px !important",
                        }}
                        src={require("../../../Assets/leftArrow.png")}
                      />
                      <div
                        className="text-center bold fs-small"
                        style={{ color: "#0752a1" }}
                      >
                        TECH
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Col>
              <Col className="p-0 d-flex flex-column mt-2 m-0 h-100 position-relative gap-4 align-items-end">
                <Col className="align-self-stretch p-0 m-0">
                  <SubCard
                    titleClassName="fs-auto text-white shadow bg-blue"
                    className="h-100"
                    title="Tour ID"
                    cardColor="white"
                    titleStyling={{
                      borderRadius: "1rem",
                      background: "#0752a1",
                    }}
                  >
                    <Row
                      style={{ minHeight: "75vh" }}
                      className="align-self-stretch flex-wrap d-flex p-0 m-0 h-100"
                    >
                      <Col className="p-0 m-0 col-6 h-100"></Col>{" "}
                      <Col className="align-items-start flex-column small p-2 flex-wrap m-0 fit-content justify-content-start d-flex"></Col>
                    </Row>
                  </SubCard>
                </Col>{" "}
                <Col className="gap-2 d-grid">
                  <Row className="justify-content-between d-flex">
                    <Col className="col-9 p-0 m-0">
                      <input
                        className="rounded-4 w-100 bg-white h2 font-norwester justify-content-center p-1 px-2 text-dark text-center m-0 border-0"
                        type="text"
                        value={""}
                        style={{
                          background: "#19bca1",
                          fontFamily: "NORWESTER",
                        }}
                        onChange={(e: any) => {}}
                      />
                    </Col>
                    <Col className="col-2 p-0 m-0">
                      <Col
                        className=" rounded-circle w-90 h-100 justify-content-center d-flex start-0 "
                        style={{ background: "#0752a1" }}
                      >
                        <Icon
                          name="FaPhone"
                          fill={"#7cd755"}
                          href="tel:+1800229933"
                          className="w-40 h-100 d-grid"
                        />
                      </Col>
                    </Col>
                  </Row>
                  <Row className="justify-content-between d-flex p-0 m-0">
                    <Col className="col-9 p-0 m-0">
                      <input
                        className="rounded-4 w-100 bg-white h2 font-norwester justify-content-center p-1 px-2 text-dark text-center m-0 border-0"
                        type="text"
                        value={""}
                        style={{
                          background: "#19bca1",
                          fontFamily: "NORWESTER",
                        }}
                        onChange={(e: any) => {}}
                      />
                    </Col>
                    <Col className="col-2 p-0 m-0">
                      <Col
                        className=" rounded-circle w-90 h-100 justify-content-center d-flex start-0 "
                        style={{ background: "#0752a1" }}
                      >
                        <IoMdMail
                          fill={"#fece34"}
                          href="mailto:lyamii.com"
                          className="w-40 h-100 d-grid"
                        />
                      </Col>
                    </Col>
                  </Row>
                </Col>
              </Col>
              <Col className="p-0 ms-4 d-flex flex-column mt-2 m-0 h-100 position-relative gap-4 align-items-end">
                <Col className="align-self-stretch p-0 m-0">
                  <SubCard
                    titleClassName="fs-auto text-white shadow bg-blue"
                    className="h-100"
                    title="Traveller ID"
                    cardColor="white"
                    titleStyling={{ background: "#0752a1" }}
                  >
                    <Row
                      style={{ minHeight: "25vh" }}
                      className="align-self-stretch flex-wrap d-flex p-0 m-0 h-100"
                    >
                      <Col className="p-0 m-0 col-6 h-100"></Col>{" "}
                      <Col className="align-items-start flex-column small p-2 flex-wrap m-0 fit-content justify-content-start d-flex"></Col>
                    </Row>
                  </SubCard>
                </Col>

                <Col className=" align-self-stretch p-0 m-0">
                  <SubCard
                    titleClassName="small text-dark shadow bg-blue"
                    className="h-100"
                    cardColor="white"
                  >
                    <Row
                      style={{ minHeight: "60vh" }}
                      className="align-self-stretch flex-wrap d-flex p-0 m-0 h-100"
                    >
                      <Col className="p-0 m-0 col-6 h-100"></Col>{" "}
                      <Col className="align-items-start flex-column small p-2 flex-wrap m-0 fit-content justify-content-start d-flex"></Col>
                    </Row>
                  </SubCard>
                  <Col className="position-relative p-0 border-1 rounded-4 text-center justify-content-end text-white">
                    <Button
                      className="align-middle justify-self-center rounded-4 position-absolute top-100 start-50 translate-middle btn-secondary"
                      style={{ background: "#0752a1" }}
                      // onClick={() => setShow(!show)}
                    >
                      Chat ID
                    </Button>
                  </Col>
                </Col>

                <Col className="col-12 position-absolute top-90 p-0 m-0">
                  <div className="input-group bg-white shadow border border-dark rounded-4 overflow-hidden">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Search this blog"
                    />
                    <Col className="col-2 input-group-append">
                      <button
                        className="border-0 bg-white w-100 h-100"
                        type="button"
                      >
                        <FaArrowAltCircleUp
                          size={"3dvi"}
                          style={{ color: "#0752a1" }}
                        />
                      </button>
                    </Col>
                  </div>
                  {/* <input
                    className="rounded-4 w-100 bg-white h2 border-1 border font-norwester justify-content-center p-1 px-2 text-dark shadow text-center m-0"
                    type="text"
                    value={""}
                    style={{
                      background: "#19bca1",
                      fontFamily: "NORWESTER",
                    }}
                    onChange={(e: any) => {}}
                  /> */}
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CrmDashBoard;
