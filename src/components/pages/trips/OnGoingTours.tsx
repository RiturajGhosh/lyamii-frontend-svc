import React, { FC, useState } from "react";
import { Col, Row, Container, Form, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
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
const OnGoingTours: FC = () => {
  const history = useHistory();
  const [toggle, setToggle] = useState("Ongoing");
  const selectedtourData = tours[0];
  // const selectedtourData: any = useSelector(selectTourData);

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
              <Col className="gap-2 d-grid flex-column">
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
                  className="bg-violet-blue rounded-4 opacity-100 mt-3"
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
                            Day 2
                          </div>
                          <div
                            className="fs-1 bold text-white px-5 text-shadow-dark pt-0 p-2 text-dark font-weight-normal"
                            style={{ minHeight: "29px" }}
                          >
                            Goa Carnival
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
                      Doctor Dada Vaidya Road, near Jama Masjid, Panaji, Goa
                      403001
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
                  {tourScheduleDetail.map((option: any) => {
                    return (
                      <Col className="p-0 m-0">
                        <Row className="p-2">
                          <span className="align-items-center d-flex position-relative">
                            <Icon
                              fill="white"
                              name={option?.shift?.toLowerCase()}
                              className="align-self-center p-0 m-0 position-absolute"
                            />

                            <Col className="text-shadow-dark mx-4 fs-auto bold position-relative">
                              {option?.shift}
                            </Col>
                          </span>
                        </Row>
                        {option.schedule.map((event: any, idx: number) => {
                          return (
                            <div
                              className="pl-5 one-side-timeline m-0 w-100"
                              key={idx}
                            >
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
                                  {event?.event}
                                </div>
                                <span className="fs-small text-shadow-dark w-100">
                                  {event?.eventDescription}
                                </span>
                              </Col>
                            </div>
                          );
                        })}
                      </Col>
                    );
                  })}
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
