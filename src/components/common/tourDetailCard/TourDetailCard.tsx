import React, { FC, useState } from "react";
import { Col, Row, Card, Button, Form, InputGroup } from "react-bootstrap";
import style from "./TourDetailCard.module.scss";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { selectScreenSize } from "../../../state/selectors/selectScreenSize";
import { useSelector } from "react-redux";
import markers from "../globe/markers";
import { selectTourData } from "../../../state/selectors/selectTourData";
import { backpackersTours, facilities, tourReviews } from "../enum/enum";
import { FaIndianRupeeSign } from "react-icons/fa6";
import CustomCoursel from "../../pages/coursel/CustomCoursel";
import MainContainer from "../container/MainContainer";
import Tick from "../icon/tick";
import { selectedTourDataDto } from "../../../state/actions/types/tourDataActionType";

const TourDetailCard: FC = () => {
  const screenSize = useSelector(selectScreenSize);
  const [IsWishlisted, setToWishList] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>(markers.slice(0, 10));
  const [page, setPage] = useState(0);
  const selectedtourData: selectedTourDataDto = useSelector(selectTourData);
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

  // const flag = (id: any) => {
  //   isoCountries?.length > 0 && isoCountries?.filter((country) => country?.id?.includes(id));
  // };
  return (
    <MainContainer>
      <CustomCoursel data={data} page={0} />
      <Col
        className="gap-4 pt-5 d-flex text-dark flex-column"
        style={{ background: "#8ca0bd" }}
      >
        <Col className="position-relative d-flex">
          <Row className={`${style.card} p-0`} style={{ minHeight: "100%" }}>
            <Col md={4} lg={4} sm={4} className="p-0 gap-4 m-0">
              <Col className="position-relative">
                <Card
                  style={{ height: window.innerWidth / 6 }}
                  className="bg-dark display-1 text-center justify-content-center text-white position-relative p-0 m-0 pb-2"
                >
                  {selectedtourData.basicPropertyData.location.city.toUpperCase()}
                  <Col
                    className={`
                    flag:${selectedtourData.basicPropertyData.location.countryCode.toUpperCase()} position-absolute top-0 end-0 border-1 text-black bg-white w-30 h-20`}
                    id="flag"
                  ></Col>
                </Card>
              </Col>{" "}
            </Col>
            <Col md={8} sm={8} lg={8} className="col-6 p-0 m-0">
              <Col className="position-relative p-0">
                <Card.Body className="p-0 px-4 gap-3 d-flex h-100 align-items-center d-flex flex-column m-0">
                  {/* <Card.Title className="p text-wrap">
                      {selectedtourData?.displayName?.text &&
                        selectedtourData?.displayName?.text}
                    </Card.Title> */}

                  <Card.Text className="display-6">
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
                </Card.Body>
              </Col>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className={`${style.card} p-0`} style={{ minHeight: "100%" }}>
            <Col md={6} sm={6} lg={6} className="col-6 p-0 m-0 gap-4 d-grid">
              <Row className="d-flex justify-content-between">
                <Col className="p-2 mx-4 display-5 col-2 align-self-center text-white text-center bg-dark">
                  {"5D"}
                </Col>{" "}
                <Col className="col-8 px-1 align-self-center text-white position-relative p-0 m-0">
                  <Card
                    className="fw-bold align-items-center shadow-sm text-white flex-nowrap py-3 justify-content-center flex-row d-flex m-0 p-0 position-relative"
                    style={{ background: "#50809d" }}
                  >
                    <span className="p-0 m-0 display-5 text-center fit-content">
                      {"CZ22***05***"}
                    </span>
                  </Card>
                  <Col className="position-relative w-100 p-0 border-1 text-center mx-42 justify-content-end text-white">
                    <span
                      className="align-middle justify-self-center p-1 h3 rounded-3 position-absolute top-100 mx-42 start-50 translate-middle"
                      style={{
                        background: "#024774",
                        color: "white",
                        width: "max-content",
                      }}
                      onClick={() => {}}
                    >
                      TOUR ID
                    </span>
                  </Col>
                </Col>
              </Row>
              <Row
                className={`${style.card} justify-content-between d-flex p-0`}
                // style={{ minHeight: "100%" }}
              >
                <Col className="p-0 col-12 m-0">
                  <Col>
                    <Card className="text-white scroll position-relative p-0 m-0 p-2">
                      <section
                        className={`overflow-auto ${style.routeTimeline}`}
                      >
                        {backpackersTours[0]?.places?.map(
                          (place: string, idx: number) => (
                            <Col className="py-2">
                              <Row>
                                <Col className="p-0 display-6 m-0 col-2 text-white align-self-center p-2 text-center bg-dark">
                                  {idx < 9 ? "0" + (idx + 1) : idx + 1}
                                </Col>
                                <Col>
                                  <div className="pl-2 h2 p-0 m-0 text-dark ">
                                    {place}
                                  </div>
                                  <div className="p-2 h5 p-0 m-0 text-dark">
                                    {"sub-title"}
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                          )
                        )}
                      </section>
                    </Card>
                  </Col>
                </Col>
              </Row>
              <Row className="align-items-center d-flex justify-content-between">
                <Card
                  className="text-white shadow-sm p-2 col-6 bold h3"
                  style={{ background: "#a8c0f0" }}
                >
                  Departure Date :
                </Card>
                <Col className="position-relative col-2 align-items-end d-flex bg-white  p-0 m-0 border-0 text-center justify-content-end">
                  <InputGroup className="">
                    <Button
                      className="border-0"
                      variant="outline-secondary"
                      id="button-addon1"
                      onClick={() => setCount(count - 1)}
                    >
                      -
                    </Button>
                    <Form.Control
                      value={count}
                      onChange={(e) => setCount(parseInt(e.target.value))}
                      aria-label="Example text with button addon"
                      aria-describedby="basic-addon1"
                      className="w-10 border-bottom-0 border-top-0"
                    />
                    <Button
                      className="border-0"
                      variant="outline-secondary"
                      id="button-addon1"
                      onClick={() => setCount(count + 1)}
                    >
                      +
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
              <Card
                className="fw-bold align-items-center shadow-sm text-white flex-nowrap py-3 mx-4 justify-content-center flex-row d-flex m-0 p-0 position-relative"
                style={{ background: "#50809d" }}
              >
                <span className="p-0 m-0 display-5 text-center fit-content">
                  {facilities.map((facility: any) => {
                    return (
                      <Card.Img
                        className={`p-0 m-0 justify-content-center`}
                        style={{
                          width: "70px",
                          padding: "0px !important",
                          margin: "0px !important",
                        }}
                        src={facility}
                      />
                    );
                  })}
                </span>
              </Card>
            </Col>
            <Col md={6} sm={6} lg={6} className="col-6 p-0 m-0">
              <Col className="position-relative h-100 d-flex align-items-center p-0">
                <Card.Body className="p-0 px-4 gap-3 d-flex flex-column m-0">
                  <Card
                    style={{ height: window.innerWidth / 3 }}
                    className="text-white align-items-center d-flex h-100 bg-dark position-relative p-2 m-0"
                  >
                    <Col className="pt-4">
                      {tourReviews?.map((review: string) => (
                        <Row className="p-2">
                          <Button
                            style={{ background: "#5a8ffd" }}
                            className="align-items-center justify-content-center p-2 col-1 btn btn-circle-sm d-flex"
                          >
                            <Tick width="50" height="50" />
                          </Button>
                          <Col className="fs-5 align-items-center pr-0 d-flex">
                            {review}
                          </Col>
                        </Row>
                      ))}
                    </Col>
                    <Col lg={3} xs={3} className="col-6 py-2 align-self-end">
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
                                  size={25}
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
                                <AiOutlineStar
                                  key={index}
                                  size={25}
                                  style={{
                                    color: "white",
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
                  </Card>

                  <Row className="position-relative justify-content-around d-flex w-100 p-0 m-0">
                    <Col className="col-4 px-1 align-self-center text-white position-relative p-0 m-0">
                      <Card
                        className="fw-bold align-items-center text-white shadow-sm flex-nowrap py-3 justify-content-center flex-row d-flex m-0 p-0 position-relative"
                        style={{ background: "#50809d" }}
                      >
                        <Card.Text className="p-0 m-0 text-center fit-content">
                          {"30,000"}
                        </Card.Text>
                        <FaIndianRupeeSign
                          className="fit-content p-0 m-0"
                          size={"30px"}
                        />
                      </Card>
                      <Col className="position-relative w-100 p-0 border-1 text-center mx-3 justify-content-end text-white">
                        <span
                          className="align-middle justify-self-center p-1 rounded-3 position-absolute top-100 ml-42 start-50 translate-middle"
                          style={{
                            background: "#024774",
                            color: "white",
                            width: "max-content",
                          }}
                          onClick={() => {}}
                        >
                          Book Now
                        </span>
                      </Col>
                    </Col>
                    <Col className="col-4 px-1 align-self-center text-white position-relative p-0 m-0">
                      <Card
                        className="fw-bold align-items-center text-white shadow-sm flex-nowrap py-3 justify-content-center flex-row d-flex m-0 p-0 position-relative"
                        style={{ background: "#50809d" }}
                      >
                        <Card.Text className="p-0 m-0 text-center fit-content">
                          {"30,000"}
                        </Card.Text>
                        <FaIndianRupeeSign
                          className="fit-content p-0 m-0"
                          size={"30px"}
                        />
                      </Card>
                      <Col className="position-relative w-100 p-0 border-1 text-center mx-3 justify-content-end text-white">
                        <span
                          className="align-middle justify-self-center p-1 shadow-sm border-0 rounded-3 position-absolute top-100 ml-42 start-50 translate-middle"
                          style={{
                            background: "#024774",
                            color: "white",
                            width: "max-content",
                          }}
                          onClick={() => {}}
                        >
                          Buy Now
                        </span>
                      </Col>
                    </Col>
                    <Button className="align-items-center bg-white justify-content-center  col-2 btn btn-circle btn-xl display-6 d-flex">
                      <BsShare
                        className="h-75 w-100 text-dark"
                        onClick={() => {}}
                      />
                    </Button>
                  </Row>
                </Card.Body>
              </Col>
            </Col>
          </Row>
        </Col>
        <Col className="position-relative p-0">
          <Card.Body className="p-0 px-4 gap-3 d-flex flex-column m-0">
            <Card.Text className="display-6 min-vh-25">
              Praque is a city that celebrates love in all its forms, from its
              breathtaking architecture to its poetic ambiance, The blend of
              history, culture, and beauty creates an imesistible allure,
              inviting you to create your own love story amidst its romantic
              landscapes. Whether you're strolling through its picturesque
              streets, savoring delicious Czech cuisine, or simply admiring the
              breathtaking views from Prague Castle, the city's undeniable charm
              will ignite the flames of passion and create memories to last a
              lifetime, in Prague, love is in the air, and every moment spent
              together becomes a chapter in your own personal fairytale,
            </Card.Text>
          </Card.Body>
        </Col>
      </Col>
    </MainContainer>
  );
};

export default TourDetailCard;
