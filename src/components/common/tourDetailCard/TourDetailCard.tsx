import React, { FC, useEffect, useState } from "react";
import { Col, Row, Card, Button, Form, InputGroup } from "react-bootstrap";
import style from "./TourDetailCard.module.scss";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { useSelector } from "react-redux";
import markers from "../globe/markers";
import { selectTourData } from "../../../state/selectors/selectTourData";
import { facilities, isoCountries } from "../enum/enum";
import { FaIndianRupeeSign } from "react-icons/fa6";
import CustomCoursel from "../../pages/coursel/CustomCoursel";
import MainContainer from "../container/MainContainer";
import Tick from "../icon/tick";
import { countries } from "../enum/countryCode";
import { useHistory } from "react-router-dom";
import { tours } from "../../pages/mockData/destinations";

const TourDetailCard: FC = () => {
  const selectedtourData = tours[0];
  const [count, setCount] = useState(0);
  const history = useHistory();
  const [countryCode, setCountryCode] = useState("");
  useEffect(() => {
    flag();
  }, []);

  const flag = () => {
    const id =
      isoCountries?.find(
        (country: any) =>
          country?.text?.includes(selectedtourData.tourName) && country
      )?.id || "";
    setCountryCode(id);
  };
  return (
    <MainContainer>
      <Card.Img
        className={`p-0 m-0 h-50 justify-content-center
 ${style.img}`}
        style={{
          // width: "100%",
          padding: "0px !important",
          margin: "0px !important",
        }}
        onClick={() => history.push("/tour-detail")}
        src={require("../../../Assets/header.jpg")}
      />
      <Col
        className="gap-4 pt-5 d-flex text-dark flex-column"
        style={{ background: "#8ca0bd" }}
      >
        <Col className="position-relative d-flex">
          <Row className={`${style.card} p-0`} style={{ minHeight: "100%" }}>
            <Col md={4} lg={4} sm={4} className={"p-0 gap-4 m-0"}>
              <Col className="position-relative">
                <Card
                  style={{ height: window.innerWidth / 6 }}
                  className={`bg-dark display-1 text-start w-100 px-4 justify-content-center text-white position-relative p-0 m-0 pb-2 ${style.tourNameHeight}`}
                >
                  {selectedtourData.tourName}
                  <Col
                    className={`position-absolute top-0 end-0 border-1 text-black w-30`}
                  >
                    <img
                      className="w-100 m-0 p-0"
                      src={`https://flagsapi.com/${countryCode}/flat/64.png`}
                    />
                  </Col>
                </Card>
              </Col>{" "}
            </Col>
            <Col md={8} sm={8} lg={8} className="col-12 p-0 m-0">
              <Col className="position-relative p-0">
                <Card.Body className="p-0 px-4 gap-3 m-0 d-flex h-100 align-items-center d-flex flex-column m-0">
                  {/* <Card.Title className="p text-wrap">
                      {selectedtourData?.displayName?.text &&
                        selectedtourData?.displayName?.text}
                    </Card.Title> */}

                  <span className="fs-16 p-0 m-0">
                    {selectedtourData?.description
                      ?.slice(0, selectedtourData.description.length / 2)
                      ?.map((desc: string) => (
                        <p>{desc}</p>
                      ))}
                  </span>
                </Card.Body>
              </Col>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className={`${style.card} p-0`} style={{ minHeight: "100%" }}>
            <Col
              xs={6}
              md={6}
              lg={6}
              className="col-12 px-4 py-4 m-0 gap-4 d-grid"
            >
              <Row className="d-flex mb-2 justify-content-between">
                <Col className="p-2 fs-auto col-2 align-items-center d-flex justify-content-center h-100 text-white text-center bg-dark">
                  {selectedtourData.tourDays}D
                </Col>{" "}
                <Col className="col-8 px-1 align-self-center text-white position-relative p-0 m-0">
                  <Card
                    className="fw-bold align-items-center shadow-sm text-white flex-nowrap py-3 justify-content-start px-5 flex-row d-flex m-0 p-0 position-relative"
                    style={{ background: "#50809d" }}
                  >
                    <span className="p-0 m-0 fs-auto text-start fit-content">
                      {selectedtourData.tourId}
                    </span>
                  </Card>
                  <Col className="position-relative w-100 p-0 border-1 text-center mx-42 justify-content-end text-white">
                    <span
                      className="align-middle justify-self-center p-1 fs-20 rounded-3 position-absolute top-100 mx-42 start-50 translate-middle"
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
                    <Card
                      className="text-white scroll position-relative p-0 m-0 p-2"
                      style={{ background: "#8ca0bd" }}
                    >
                      <section
                        className={`overflow-auto ${style.routeTimeline}`}
                      >
                        {selectedtourData?.timeline?.map(
                          (place: any, idx: number) => (
                            <Col className="py-2">
                              <Row>
                                <Col className="p-0 fs-24 m-0 col-2 text-white align-self-center p-2 text-center bg-dark">
                                  {idx < 9 ? "0" + (idx + 1) : idx + 1}
                                </Col>
                                <Col>
                                  <div className="pl-2 fs-auto lh-sm p-0 m-0 text-dark ">
                                    {place?.destination}
                                  </div>
                                  <div className="p-2 fs-16 p-0 lh-sm m-0 text-dark">
                                    <li>{place.description[0]}</li>
                                    <li>{place.description[1]}</li>
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
                  className="text-white shadow-sm p-2 col-6 bold fs-20"
                  style={{ background: "#a8c0f0" }}
                >
                  Departure Date :
                </Card>
                <Col
                  md={2}
                  lg={2}
                  className="position-relative col-2 fs-16 align-items-end d-flex bg-white p-0 m-0 border-0 text-center justify-content-end"
                >
                  <InputGroup className="">
                    <Button
                      className="border-0 fs-16 p-2 m-0"
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
                      className="w-10 p-2 m-0 fs-16 border-bottom-0 border-top-0"
                    />
                    <Button
                      className="border-0 fs-16 p-2 m-0"
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
                className="fw-bold align-items-center shadow-sm text-white flex-nowrap py-3 justify-content-center flex-row d-flex m-0 p-0 position-relative"
                style={{ background: "#50809d" }}
              >
                <span className="p-0 m-0 fs-auto text-center fit-content">
                  {facilities?.map((facility: any) => {
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
            <Col xs={6} md={6} lg={6} className="col-12 p-0 m-0">
              <Col className="position-relative h-100 d-flex align-items-center p-0">
                <Card.Body className="p-0 px-4 gap-3 d-flex flex-column m-0">
                  <Card
                    style={{ height: window.innerWidth / 3 }}
                    className="text-white align-items-center d-flex h-100 bg-dark position-relative p-2 m-0"
                  >
                    <Col className="pt-4">
                      {selectedtourData?.highlights?.map((review: string) => (
                        <Row className="p-2">
                          <Button
                            style={{ background: "#5a8ffd" }}
                            className="align-items-center justify-content-center p-2 col-1 btn btn-circle-sm d-flex"
                          >
                            <Tick width="50" height="50" />
                          </Button>
                          <Col className="fs-16 align-items-center pr-0 d-flex">
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
                                selectedtourData?.basicTourData?.starRating
                                  ?.value || 0
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
                                  selectedtourData?.basicTourData?.starRating
                                    ?.value || 0
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
                        <span className="p-0 fs-24 m-0 text-center fit-content">
                          {
                            selectedtourData?.priceInfo?.priceBeforeDiscount
                              ?.amount
                          }
                        </span>
                        <FaIndianRupeeSign
                          className="fit-content p-0 m-0"
                          size={"30px"}
                        />
                      </Card>
                      <Col className="position-relative w-100 p-0 border-1 text-center mx-3 justify-content-end text-white">
                        <span
                          className="align-middle fs-16 justify-self-center p-1 rounded-3 position-absolute top-100 ml-42 start-50 translate-middle"
                          style={{
                            background: "#024774",
                            color: "white",
                            width: "max-content",
                          }}
                          onClick={() => history.push("/checkout")}
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
                        <span className="p-0 m-0 fs-24 text-center fit-content">
                          {
                            selectedtourData?.priceInfo?.priceBeforeDiscount
                              ?.amount
                          }
                        </span>
                        <FaIndianRupeeSign
                          className="fit-content p-0 m-0"
                          size={"30px"}
                        />
                      </Card>
                      <Col className="position-relative w-100 p-0 border-1 text-center mx-3 justify-content-end text-white">
                        <span
                          className="align-middle fs-16 justify-self-center p-1 shadow-sm border-0 rounded-3 position-absolute top-100 ml-42 start-50 translate-middle"
                          style={{
                            background: "#024774",
                            color: "white",
                            width: "max-content",
                          }}
                          onClick={() => history.push("/checkout")}
                        >
                          Buy Now
                        </span>
                      </Col>
                    </Col>
                    <Button className="align-items-center bg-white justify-content-center  col-2 btn btn-circle btn-xl fs-16 d-flex">
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
            <Card.Text className="fs-16 min-vh-25">
              {selectedtourData.description
                ?.slice(selectedtourData.description.length / 2)
                ?.map((desc: string) => (
                  <p>{desc}</p>
                ))}
            </Card.Text>
          </Card.Body>
        </Col>
      </Col>
    </MainContainer>
  );
};

export default TourDetailCard;
