import React, { FC, useState } from "react";
import {
  Col,
  Row,
  Container,
  Button,
  Form,
  Card,
  Modal,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import SubCard from "../../common/subCard/SubCard";
import RoundButton from "../../common/roundButton/RoundButton";
import Icon from "../../common/icon/Icon";
import { IoMdMail } from "react-icons/io";
import { MdThumbDown, MdThumbUp } from "react-icons/md";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { tasks } from "../../common/enum/tasks";
import { IoMdAdd } from "react-icons/io";
import Notepad from "../../common/notepad/Notepad";

const CrmDashBoard: FC = () => {
  const date = new Date();
  const history = useHistory();
  const [show, setShow] = useState(false);
  return (
    <div
      className={`overflow-auto min-vh-100 mw-100 w-100 align-items-center justify-content-center d-flex m-0`}
    >
      <Container
        fluid="lg"
        className="p-0 m-0 mw-100 me-4 min-vh-100 justify-content-end d-flex flex-column w-100"
      >
        <Row className="p-0 m-0 min-vh-100 align-items-center justify-content-end d-flex">
          <Col className="col-12 py-4 m-0 align-items-center d-grid p-0">
            <Row className="d-flex gap-4 flex-column flex-md-row">
              <Col className="p-0 d-flex ps-4 ps-md-0 flex-column mt-2 m-0 h-100 position-relative gap-4 align-items-end">
                <Col className=" align-self-stretch p-0 m-0">
                  <SubCard
                    titleClassName="small text-dark shadow bg-blue"
                    className="h-100"
                    cardColor="#889dfe"
                  >
                    <Col className="align-self-stretch py-2 d-grid p-0 m-0">
                      <div
                        className="overflow-auto column hidden-scroll flex-row flex-nowrap p-0 m-0"
                        style={{ height: "23vh" }}
                      >
                        <Col className="text-start">
                          <Col className="d-flex align-items-center justify-content-center">
                            <Col className="col-10 text-white overflow-hidden">
                              {"Notes"}
                            </Col>
                            <Col className="col-1">
                              <IoMdAdd fill="white" className="p-0 m-0" onClick={() => setShow(true)} />
                            </Col>
                          </Col>
                        </Col>
                        {tasks.map((task) => {
                          return (
                            <Card className="text-center shadow-none">
                              <Card.Body className="text-muted">
                                <Col className="d-flex align-items-center">
                                  <Col className="col-11 overflow-hidden">
                                    {task.title}
                                  </Col>
                                </Col>
                              </Card.Body>
                            </Card>
                          );
                        })}
                      </div>
                    </Col>
                  </SubCard>
                </Col>

                <Col className=" align-self-stretch p-0 m-0">
                  <SubCard
                    titleClassName="small text-dark shadow bg-blue"
                    className="h-100"
                    cardColor="#889dfe"
                  >
                    <Col className="align-self-stretch py-2 d-grid p-0 m-0">
                      <div
                        className="overflow-auto column hidden-scroll flex-row flex-nowrap p-0 m-0"
                        style={{ height: "30vh" }}
                      >
                        {tasks.map((task) => {
                          const date =
                            new Date(task.dueDate).toDateString().slice(4, -4) +
                            " " +
                            new Date(task.dueDate)
                              .toLocaleTimeString()
                              .slice(0, -3);
                          return (
                            <Card className="text-center shadow-none">
                              <Card.Body className="text-start">
                                <Col className="d-flex align-items-center bold">
                                  {date}
                                </Col>{" "}
                                <Col className="d-flex align-items-center">
                                  {task.title}
                                </Col>
                              </Card.Body>
                            </Card>
                          );
                        })}
                      </div>
                    </Col>
                  </SubCard>
                </Col>
                <Col className=" align-self-stretch p-0 m-0">
                  <SubCard
                    titleClassName="small text-dark shadow bg-blue"
                    className="h-100"
                    cardColor="#0752a1"
                  >
                    <Col className="align-self-stretch py-2 d-grid p-0 m-0">
                      <div
                        className="overflow-auto column hidden-scroll flex-row flex-nowrap p-0 m-0"
                        style={{ height: "10vh" }}
                      >
                        {tasks.map((task) => {
                          const date =
                            new Date(task.dueDate).toDateString().slice(4, -4) +
                            " " +
                            new Date(task.dueDate)
                              .toLocaleTimeString()
                              .slice(0, -3);
                          return (
                            <Card className="text-center shadow-none">
                              <Card.Body className="text-start">
                                <Col className="d-flex align-items-center bold">
                                  {date}
                                </Col>{" "}
                                <Col className="d-flex align-items-center">
                                  {task.title}
                                </Col>
                              </Card.Body>
                            </Card>
                          );
                        })}
                      </div>
                    </Col>
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
              <Col className="p-0 d-flex ps-4 ps-md-0 flex-column mt-2 m-0 h-100 position-relative gap-4 align-items-end">
                <Col className="align-self-stretch p-0 m-0">
                  <SubCard
                    titleClassName="fs-4 text-white shadow bg-blue"
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
                <Col className="gap-2 col-12 d-grid">
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
              <Col className="p-0 d-flex ps-4 ps-md-0 flex-column mt-2 m-0 h-100 position-relative gap-4 align-items-end">
                <Col className="align-self-stretch p-0 m-0">
                  <SubCard
                    titleClassName="fs-4 text-white shadow bg-blue"
                    className="h-100"
                    title="Traveller ID"
                    cardColor="white"
                    titleStyling={{ background: "#0752a1" }}
                  >
                    <Col
                      style={{ minHeight: "25vh" }}
                      className="align-self-stretch flex-wrap d-flex p-0 m-0 h-100"
                    >
                      <Form className="align-self-center d-flex flex-column">
                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="userName">
                            <Form.Label>Traveller Name</Form.Label>
                            <Form.Control type="text" placeholder="User Name" />
                          </Form.Group>
                          <Form.Group as={Col} controlId="formGridLanguage">
                            <Form.Label>Language</Form.Label>
                            <Form.Control />
                          </Form.Group>
                        </Row>

                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="formGridCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control />
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridAge">
                            <Form.Label>Age</Form.Label>
                            <Form.Control />
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridGender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control />
                          </Form.Group>
                        </Row>
                      </Form>
                    </Col>
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
        <Modal
          className="rounded-4"
          show={show}
          fullscreen={"false"}
          onHide={() => setShow(false)}
        >
          <Notepad />
        </Modal>
      </Container>
    </div>
  );
};

export default CrmDashBoard;
