import React, { FC, useEffect, useState } from "react";
import {
  Image,
  Col,
  Row,
  Ratio,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import style from "./TourDetailCard.module.scss";
import { IoIosHeart, IoMdHeartEmpty } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { BsHouseCheck, BsShare } from "react-icons/bs";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { useSelector } from "react-redux";
import PrivateBathroom from "../icon/privateBathroom";
import { LuParkingCircle } from "react-icons/lu";
import HorizontalScroll from "../horizontalScroll/HorizontalScroll";
import markers from "../globe/markers";
import ContainerSection from "../container/Container";
import { selectTourData } from "../../../state/selectors/selectTourData";
import { tours } from "../../pages/mockData/destinations";
import { backpackersTours } from "../enum/enum";
import Switch from "../switch/Switch";
import { FaIndianRupeeSign, FaRupeeSign } from "react-icons/fa6";
import { BiSolidBellRing } from "react-icons/bi";

const TourDetailCard: FC = () => {
  const screenSize = useSelector(selectScreenSize);
  const [IsWishlisted, setToWishList] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>(markers.slice(0, 10));
  const [page, setPage] = useState(0);
  const selectedtourData: any = tours[0] || {};
  // (selectTourData);
  const features = [
    "Entire apartment",
    "16 m² size",
    "Free parking",
    "Private bathroom",
    "Pets allowed",
    "View",
    "Free WiFi",
    "Shower",
    "Kitchenette",
    "Non-smoking rooms",
  ];
  const [statusState, setStatusState] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <ContainerSection>
      <Col className="gap-3 d-flex flex-column">
        <Col className="position-relative d-flex">
          <Row className={`${style.card} p-0`} style={{ minHeight: "100%" }}>
            <Col md={6} lg={6} sm={6} className="p-0 gap-4 m-0">
              <Col>
                <Card
                  style={{ height: window.innerWidth / 3 }}
                  className="text-white position-relative p-0 m-0 pb-2"
                >
                  <Ratio aspectRatio={""}>
                    <>
                      <Image
                        className={`p-0 rounded-3 position-absolute`}
                        src={require("../../../Assets/escape.jpeg")}
                      />
                    </>
                  </Ratio>
                </Card>
              </Col>{" "}
              <Col className="position-relative pt-3 p-0 border-0 shadow-lg border-white text-center justify-content-end text-white">
                <Button
                  className="align-middle small border-white justify-self-center w-100 h-75"
                  style={{ background: "#759da6" }}
                  onClick={() => {}}
                >
                  {"STAYS"}
                </Button>
              </Col>
              <Col className="p-0 m-0 d-flex justify-content-end align-items-center flex-row py-3 ">
                <Card.Text className="p-0 m-0">{"30,000"}</Card.Text>
                <FaIndianRupeeSign size={"30px"} />
              </Col>
              <p>Facilities</p>
              <Row className="position-relative justify-content-center d-flex gap-2">
                {selectedtourData?.features?.map((feature: any) => (
                  <Card
                    className="w-30 m-0 p-1 shadow-2 border-white"
                    style={{ background: "antiquewhite" }}
                  >
                    {feature}
                  </Card>
                ))}
              </Row>
            </Col>
            <Col md={6} sm={6} lg={6} className="col-6 p-0 m-0">
              <Col className="position-relative p-0">
                <Card.Body className="p-0 px-4 gap-3 d-flex flex-column m-0">
                  <Card.Title className="p text-wrap">
                    {selectedtourData?.displayName?.text &&
                      selectedtourData?.displayName?.text}
                  </Card.Title>

                  <Card.Text className="small min-vh-25">
                    Collection O Hotel La Veera features air-conditioned rooms
                    with cable TV in the Navarangpura district of Ahmedabad.
                    This 3-star hotel offers a shared kitchen and free WiFi.
                    Gandhi Ashram is 4.1 km from the hotel and IIM is 6.1 km
                    away. A continental breakfast is available each morning at
                    the hotel. Sardar Patel Stadium is 9 km from Collection O
                    Hotel La Veera, while NBSO Ahmedabad is 600 metres from the
                    property. The nearest airport is Sardar Vallabhbhai Patel
                    International Airport, 8 km from the accommodation. Hotel
                    chain/brand: OYO Rooms Distance in property description is
                    calculated using © OpenStreetMap
                  </Card.Text>

                  <Row className="align-items-center d-flex">
                    <Col className="p-0 m-0">
                      <Card className="p-2 m-0">Departure Date : </Card>
                    </Col>
                  </Row>

                  <p>Highlights</p>
                  <Card
                    style={{ height: window.innerWidth / 3 }}
                    className="text-white position-relative p-0 m-0 pb-2"
                  >
                    <Ratio aspectRatio={""}>
                      <>
                        <Image
                          className={`p-0 rounded-3 position-absolute`}
                          src={require("../../../Assets/escape.jpeg")}
                        />
                      </>
                    </Ratio>
                  </Card>

                  <Row className="position-relative justify-content-between d-flex w-100 p-0 m-0">
                    <Col lg={3} xs={3} className="col-6 align-self-center">
                      <Col
                        className={`fw-bold align-items-center text-nowrap text-secondary`}
                      >
                        <Row className="w-100 justify-content-center">
                          {selectedtourData &&
                            [
                              ...Array(
                                selectedtourData?.basicPropertyData?.starRating
                                  ?.value
                              ),
                            ]?.map((index: number) => {
                              return (
                                <AiFillStar
                                  key={index}
                                  size={15}
                                  style={{
                                    color: "#fed02b",
                                    width: "fit-content",
                                    paddingLeft: "0px",
                                    paddingRight: "0px",
                                    marginTop: "0px",
                                  }}
                                  className="d-flex"
                                />
                              );
                            })}
                          {selectedtourData &&
                            [
                              ...Array(
                                5 -
                                  selectedtourData?.basicPropertyData
                                    ?.starRating?.value
                              ),
                            ]?.map((index: number) => {
                              return (
                                <AiFillStar
                                  key={index}
                                  size={15}
                                  style={{
                                    color: "black",
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
                    <Col className="col-3 px-1 align-self-center">
                      <Col
                        className={`fw-bold justify-content-center flex-column justify-content-center align-items-center d-flex align-self-center text-nowrap text-secondary`}
                      >
                        <button
                          className={`btn d-flex justify-content-center justify-items-center ${style.btmRght} ${style.navigationButton}`}
                          onClick={() => {}}
                        >
                          FAQs
                        </button>
                      </Col>
                    </Col>
                    <Col className="align-items-center justify-content-center col-3 d-flex">
                      <BsShare className="h-75 w-30" onClick={() => {}} />
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Col>
          </Row>
        </Col>{" "}
        <p className="p-0 m-0">Greetings</p>
        <Row
          className={`${style.card} justify-content-between d-flex p-0`}
          // style={{ minHeight: "100%" }}
        >
          <Col className="p-0 col-12 m-0">
            <Col>
              <Card className="text-white position-relative p-0 m-0 p-2">
                <section
                  className={`overflow-scroll second ${style.routeTimeline}`}
                >
                  {backpackersTours[0]?.places?.map(
                    (place: string, idx: number) => (
                      <div
                        className="timeline position-relative my-2"
                        key={idx}
                      >
                        {idx % 2 === 0 && (
                          <>
                            <div className="timeline-empty"></div>

                            <div className="timeline-middle">
                              <div className="timeline-circle"></div>
                            </div>
                          </>
                        )}
                        <Col
                          className={
                            "timeline-component justify-content-center shadow text-dark small h-100 position-relative p-2 timeline-content"
                          }
                        >
                          {"Day " + (idx + 1) + " " + place}
                          <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                          </ul>
                        </Col>
                        {idx % 2 !== 0 && (
                          <>
                            <div className="timeline-middle">
                              <div className="timeline-circle"></div>
                            </div>
                            <div className="timeline-empty"></div>
                          </>
                        )}
                      </div>
                    )
                  )}
                </section>
              </Card>
            </Col>
          </Col>
        </Row>
        <Row className="p-0 m-0 justify-content-between">
          <Col className="align-items-center col-2 justify-content-center p-0 m-0 flex-wrap justify-content-center d-flex">
            <Card.Text className="rounded-3 w-100 justify-content-center align-items-center d-flex text-decoration-none p-0 m-0">
              <BiSolidBellRing
                onClick={() => {}}
                className="px-2 p-0 m-0"
                size="39px"
              />
              <Col onClick={() => {}} className=" col-5 p-0 m-0">
                Helpdesk
              </Col>
            </Card.Text>
          </Col>
          <Col lg={3} xs={3} className="col-7">
            <Row>
              <Col className="position-relative align-items-end d-flex col-6 p-0 m-0 border-0 text-center justify-content-end">
                <InputGroup className="">
                  <Button
                    variant="outline-secondary"
                    id="button-addon1"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </Button>
                  <Form.Control
                    value={count}
                    onChange={(e) => setCount(parseInt(e.target.value))}
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    className="w-25"
                  />
                  <Button
                    variant="outline-secondary"
                    id="button-addon1"
                    onClick={() => setCount(count - 1)}
                  >
                    -
                  </Button>
                </InputGroup>
              </Col>
              <Col className="position-relative p-0 col-6 m-0 border-0 text-center justify-content-end">
                <Col>Tour ID</Col>
                <Button
                  className="align-middle small border-white justify-self-center"
                  style={{ background: "#759da6" }}
                  onClick={() => {}}
                >
                  {"Add to Cart"}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </ContainerSection>
  );
};

export default TourDetailCard;
