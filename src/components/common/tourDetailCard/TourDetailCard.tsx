import React, { FC, useEffect, useState } from "react";
import {
  Col,
  Row,
  Card,
  Button,
  Form,
  InputGroup,
  Popover,
  ButtonToolbar,
  OverlayTrigger,
} from "react-bootstrap";
import style from "./TourDetailCard.module.scss";
import { BsShare } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";
import MainContainer from "../container/MainContainer";
import Tick from "../icon/tick";
import { useHistory } from "react-router-dom";
import { getPackageDetailsByPackageIdApi } from "../../../api/getPackageDetailsByPackageIdApi";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTourData,
  selectTourPackageId,
} from "../../../state/selectors/selectTourData";
import {
  Itinerary,
  SET_SELECTED_TOUR_DATA,
  selectedTourDataDto,
} from "../../../state/actions/types/tourDataActionType";
import { parseTourData } from "../../../utils/parseTourData";

const TourDetailCard: FC = () => {
  const packageID = useSelector(selectTourPackageId);
  const tourData = useSelector(selectTourData);
  const [tour, setTour] = useState<selectedTourDataDto>(tourData);
  const [count, setCount] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  const fetchTours = async () => {
    const response = await getPackageDetailsByPackageIdApi(packageID);
    if (response.status === 200) {
      dispatch({
        type: SET_SELECTED_TOUR_DATA,
        payload: parseTourData(response.data),
      });
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  useEffect(() => {
    tourData && setTour(tourData);
  }, [tourData]);

  const popoverTop = (
    <Popover
      id="popover-positioned-top"
      title="Popover top"
      className="w-100 gap-1 d-flex mw-50"
    >
      <Row className="d-flex mt-3 flex-row p-2 w-100 gap-2 flex-wrap">
        {tour?.includes?.map((d) => (
          <p
            className="text-white col py-2 px-3 small fit-content rounded-4 align-items-center justify-content-center d-flex"
            style={{ background: "#0752a1", fontFamily: "Archive" }}
          >
            {d}
          </p>
        ))}
      </Row>
    </Popover>
  );

  return (
    <MainContainer>
      <Card.Img
        className={`p-0 m-0 justify-content-center
 ${style.img}`}
        style={{
          // width: "100%",
          height: "70vh",
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
          <Row
            className={`${style.card} justify-content-center d-flex p-0`}
            style={{ minHeight: "100%" }}
          >
            <Col
              md={4}
              lg={4}
              sm={11}
              xs={11}
              className={"p-0 mx-md-0 gap-4 m-0"}
            >
              <Col className="position-relative">
                <Card
                  style={{
                    height: "15vw",
                    fontSize: "5.5dvi",
                    fontFamily: "initial",
                  }}
                  className={`bg-dark text-start w-100 px-4 justify-content-center text-white position-relative p-0 m-0 pb-2 ${style.tourNameHeight}`}
                >
                  {tour?.packageName}
                  <Col
                    className={`position-absolute top-0 end-0 border-1 text-black justify-self-center d-flex pe-4`}
                  >
                    <img
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "10vh" }}
                      src={`https://flagsapi.com/${tour.flagCode}/flat/64.png`}
                    />
                  </Col>
                </Card>
              </Col>{" "}
            </Col>
            <Col md={8} sm={11} lg={8} className="col-12 pt-4 pt-md-0 p-0 m-0">
              <Col className="position-relative p-0">
                <Card.Body className="p-0 px-4 gap-3 m-0 d-flex h-100 align-items-center d-flex flex-column m-0">
                  {/* <Card.Title className="p text-wrap">
                      {tour?.displayName?.text &&
                        tour?.displayName?.text}
                    </Card.Title> */}

                  <span className="fs-16 p-0 m-0">
                    <p>{tour?.description?.[0]}</p>
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
                <Col className="p-2 fs-24 col-2 align-items-center d-flex justify-content-center h-100 text-white text-center bg-dark">
                  {tour.noOfDays}D
                </Col>{" "}
                <Col className="col-8 px-1 align-self-center text-white position-relative p-0 m-0">
                  <Col
                    className="rounded-4 border-1 flex-row d-flex align-items-center p-3 border-white border text-white shadow-sm p-2 bold fs-20"
                    style={{ background: "#50809d" }}
                  >
                    <span className="p-0 m-0 fs-auto text-start fit-content">
                      {tour.packageId}
                    </span>
                  </Col>
                  <Col className="position-relative w-100 p-0 border-1 text-center mx-42 justify-content-end text-white">
                    <span
                      className="align-middle justify-self-center p-1 fs-16 rounded-3 position-absolute mx-42 start-50 top-0 translate-middle"
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
                        className={`overflow-auto ${style?.routeTimeline}`}
                      >
                        {tour?.itinerary?.map(
                          (place: Itinerary, idx: number) => (
                            <Col className="py-2">
                              <Row>
                                <Col className="p-0 fs-24 m-0 col-2 text-white align-self-center p-2 text-center bg-dark">
                                  {idx < 9 ? "0" + (idx + 1) : idx + 1}
                                </Col>
                                <Col>
                                  <div className="pl-2 fs-auto bold lh-sm p-0 m-0 text-dark ">
                                    {place[0]}
                                  </div>
                                  <div className="p-2 fs-auto p-0 lh-sm m-0 text-dark">
                                    {/* {place &&
                                      place[1][0]?.map((desc: string) => ( */}
                                    <li>{place[1][0]}</li>
                                    <li>{place[1][1]}</li>
                                    {/* ))} */}
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
                <Col
                  className="rounded-4 border-1 border-white border text-white shadow-sm p-2 col-6 bold fs-16"
                  // style={{ background: "#a8c0f0" }}
                >
                  Departure Date :
                  <input
                    type="date"
                    className="w-100 bg-transparent border-0 border small"
                    placeholder=" "
                    onChange={(e: any) => {}}
                  ></input>
                </Col>
                <Col className="text-white p-2 bold fs-16 justify-content-end d-flex">
                  Add Traveller :
                </Col>
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
              <ButtonToolbar className="fw-bold align-items-center w-100 text-white flex-nowrap py-3 justify-content-center flex-row d-flex m-0 p-0 position-relative">
                <OverlayTrigger
                  trigger={["hover", "focus"]}
                  placement="top"
                  overlay={popoverTop}
                >
                  <Button
                    className="w-100"
                    style={{ background: "#0752a1", fontFamily: "Archive" }}
                  >
                    Includes
                  </Button>
                </OverlayTrigger>
              </ButtonToolbar>
            </Col>
            <Col xs={6} md={6} lg={6} className="col-12 p-0 m-0">
              <Col className="position-relative h-100 d-flex align-items-center p-0">
                <Card.Body className="p-0 px-4 gap-3 d-flex flex-column m-0">
                  <Card
                    style={{ height: window.innerWidth / 3 }}
                    className={
                      "text-white align-items-center d-flex h-100 bg-dark position-relative p-2 m-0"
                    }
                  >
                    <section
                      className={`pt-4 overflow-auto ${style.rivewCard}`}
                    >
                      {tour?.highlights?.map((review: string) => (
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
                    </section>
                    <Col lg={3} xs={3} className="col-6 py-2 align-self-end">
                      <Col
                        className={`fw-bold align-items-center text-nowrap text-secondary`}
                      >
                        {/* <Row className="w-100 justify-content-center">
                          {tour &&
                            [
                              ...Array(
                                tour?.basicTourData?.starRating
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
                          {tour &&
                            [
                              ...Array(
                                5 -
                                  tour?.basicTourData?.starRating
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
                        </Row> */}
                      </Col>
                    </Col>
                  </Card>

                  <Row className="position-relative justify-content-around d-flex w-100 p-0 m-0">
                    <Col className="col-4 px-1 align-self-center text-white position-relative p-0 m-0">
                      <Col
                        className="rounded-4 border-1 flex-row d-flex align-items-center p-3 border-white border text-white shadow-sm p-2 bold fs-20"
                        style={{ background: "#50809d" }}
                      >
                        <span className="p-0 fs-24 m-0 text-center fit-content">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            {tour?.packagePrice?.map(
                              (price: string, index: number) => (
                                <option key={index} value={price}>
                                  {price}
                                </option>
                              )
                            )}
                          </select>
                        </span>
                        <FaIndianRupeeSign
                          className="fit-content p-0 m-0"
                          size={"30px"}
                        />
                      </Col>
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
                      <Col
                        className="rounded-4 border-1 flex-row d-flex align-items-center p-3 border-white border text-white shadow-sm p-2 bold fs-20"
                        style={{ background: "#50809d" }}
                      >
                        <span className="p-0 m-0 fs-24 text-center fit-content">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            {tour?.packagePrice?.map(
                              (price: string, index: number) => (
                                <option key={index} value={price}>
                                  {price}
                                </option>
                              )
                            )}
                          </select>
                        </span>
                        <FaIndianRupeeSign
                          className="fit-content p-0 m-0"
                          size={"30px"}
                        />
                      </Col>
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
              <p>{tour?.description?.slice(1)}</p>
            </Card.Text>
          </Card.Body>
        </Col>
      </Col>
    </MainContainer>
  );
};

export default TourDetailCard;
