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
  Container,
  Modal,
  Carousel,
} from "react-bootstrap";
import { FaPlane } from "react-icons/fa";
import style from "./TourDetailCard.module.scss";
import { BsShare } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";
import MainContainer from "../container/MainContainer";
import Tick from "../icon/tick";
import { Link, useHistory, useLocation } from "react-router-dom";
import { getPackageDetailsByPackageIdApi } from "../../../api/packageByPackageId/getPackageDetailsByPackageIdApi";
import { useDispatch, useSelector } from "react-redux";
import { selectTourData } from "../../../state/selectors/selectTourData";
import {
  SET_SELECTED_TOUR_DATA,
  SET_SELECTED_TOUR_DEPARTURE_DATE,
  selectedTourDataDto,
} from "../../../state/actions/types/tourDataActionType";
import { parseTourData } from "../../../utils/parseTourData";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { countries } from "../enum/countryCode";
import { countryCode } from "../../../utils/countryCodes";
import { departureData, styles } from "./TourUiData";
import { getCookie } from "../enum/functions";
import {
  selectIsMobile,
  selectScreenSize,
} from "../../../state/selectors/selectScreenSize";

interface LoginPromptModalProps {
  show: boolean;
  handleClose: () => void;
}
interface BookingPromptModalProps {
  show: boolean;
  handleClose: () => void;
  onClick: () => void;
}
const LoginPromptModal: FC<LoginPromptModalProps> = ({ show, handleClose }) => {
  const history = useHistory();
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Please Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Kindly{" "}
          <span
            className={"bold pointer"}
            onClick={() => history.push("/login")}
          >
            Login
          </span>{" "}
          First To continue Booking.
        </p>
      </Modal.Body>
    </Modal>
  );
};
const BookingPromptModal: FC<BookingPromptModalProps> = ({
  show,
  handleClose,
  onClick,
}) => {
  const history = useHistory();
  const screenSize = useSelector(selectScreenSize);
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="bold">Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p
          className={`p-2 ${
            screenSize?.screenSize < 767
              ? "normal"
              : screenSize?.screenSize > 767 && screenSize?.screenSize < 969
              ? "fs-medium"
              : "fs-auto"
          }`}
        >
          Before Buy you need to Book
        </p>
        <Row className="d-flex justify-content-between flex-row gap-3">
          <button
            className={`p-2 ${
              screenSize?.screenSize < 767
                ? "normal"
                : screenSize?.screenSize > 767 && screenSize?.screenSize < 969
                ? "fs-medium"
                : "fs-auto"
            }`}
            onClick={handleClose}
            style={{
              width: 154,
              fontWeight: "700",
              color: "#FFFFFF",
              backgroundColor: "#75abdc",
              borderRadius: 0,
              borderWidth: 0,
            }}
          >
            Cancel
          </button>{" "}
          <button
            className={`p-2 ${
              screenSize?.screenSize < 767
                ? "normal"
                : screenSize?.screenSize > 767 && screenSize?.screenSize < 969
                ? "fs-medium"
                : "fs-auto"
            }`}
            onClick={onClick}
            style={{
              width: 154,
              fontWeight: "700",
              color: "#FFFFFF",
              backgroundColor: "#75abdc",
              borderRadius: 0,
              borderWidth: 0,
            }}
          >
            Book Now
          </button>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
const TourDetailCard: FC = () => {
  const isMobile = useSelector(selectIsMobile);
  const [minDate, setMinDate] = useState("");
  const screenSize = useSelector(selectScreenSize);
  const tourData = useSelector(selectTourData);
  const cookie = getCookie("user");
  const isLoggedIn = cookie ? JSON.parse(cookie)?.token?.length > 0 : false;
  console.log(isLoggedIn);
  const [tour, setTour] = useState<selectedTourDataDto>(tourData);
  const [count, setCount] = useState(0);
  // const userData = useSelector("")
  const [showAllItinerary, setShowAllItinerary] = useState(false);
  const [showAllDescription, setShowAllDescription] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [flagCode, setFlagCode] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleClose = () => {
    setShowBookingModal(false);
    setShowLoginModal(false);
  };
  const handleShow = () => setShowLoginModal(true);

  const fetchTours = async () => {
    const response = await getPackageDetailsByPackageIdApi(
      history.location.pathname.split(":")[1]
    );
    if (response.status === 200) {
      dispatch({
        type: SET_SELECTED_TOUR_DATA,
        payload: parseTourData(response.data),
      });
    }
  };

  useEffect(() => {
    // Get the current date
    const today = new Date();
    // Add 30 days to the current date
    const nextMonth = new Date(today.setDate(today.getDate() + 30));
    // Format the date to YYYY-MM-DD
    const formattedDate = nextMonth.toISOString().split("T")[0];
    // Set the minDate state
    setMinDate(formattedDate);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchTours();
  }, []);

  useEffect(() => {
    const flag = countryCode.filter(
      (c) =>
        c?.name?.toLowerCase().includes(tourData?.country?.toLowerCase()) &&
        c?.name?.length === tourData?.country?.length &&
        c
    )[0]?.code;
    setFlagCode(flag);
    tourData && setTour(tourData);
  }, [tourData]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const scroll = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % tourData?.imageUri?.length
      );
    };

    const id = setInterval(scroll, 4000);
    return () => clearInterval(id);
  }, [tourData?.imageUri?.length]);

  const handleSelect = (selectedIndex: number) => {
    setCurrentIndex(selectedIndex);
  };

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
    <div style={styles.card} className="mb-0">
      <Row
        style={{
          ...styles.mainImageContainer,
          position: "relative",
          width: "100%",
        }}
      >
        <Col lg={9} md={9} className="col-12">
          <Carousel activeIndex={currentIndex} onSelect={handleSelect}>
            {tour?.imageUri?.length > 1 && tour.imageUri[1] !== "" ? (
              tourData?.imageUri?.slice(1)?.map((image) => {
                return (
                  <Carousel.Item>
                    <img
                      src={`https://drive.google.com/thumbnail?sz=w2000&id=${image}`}
                      alt={"Main Tour Image"}
                      loading="lazy"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Carousel.Item>
                );
              })
            ) : (
              <Carousel.Item>
                <img
                  src={
                    "https://drive.google.com/thumbnail?sz=w2000&id=1Cgy6eNCJJvCF1cRC6NSd1OedYI9zCD96"
                  }
                  alt={"Main Tour Image"}
                  loading="lazy"
                  style={{ width: "100%", height: "auto" }}
                />
              </Carousel.Item>
            )}
          </Carousel>
        </Col>
        {/* <img
          src={
            tour?.imageUri?.length > 0 && tour.imageUri[0] !== ""
              ? `https://drive.google.com/thumbnail?sz=w2000&id=${tour.imageUri[1]}`
              : "https://drive.google.com/thumbnail?sz=w2000&id=1Cgy6eNCJJvCF1cRC6NSd1OedYI9zCD96"
          }
          alt={"Main Tour Image"}
          loading="lazy"
          style={styles.mainImage}
        /> */}

        <Col
          lg={3}
          md={3}
          className="col-12"
          style={{
            top: isMobile ? "auto" : "5%",
            left: isMobile ? "auto" : "5%",
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "center" : "flex-start",
            gap: "1rem",
            marginTop: isMobile ? "1rem" : "0",
          }}

          // style={{
          //   display: "flex",
          //   justifyContent: "flex-end",
          //   alignItems: "flex-end",
          //   // marginTop: -50,
          // }}
        >
          <div className="w-100 d-flex flex-lg-column flex-md-column flex-row">
            <Col lg={12} md={12} className="col-7">
              <Row
                className="p-0 m-0"
                style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  color: "#1C1C1C",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                {tour.title}
              </Row>
              <div className="p-0 m-0">
                {" "}
                <Row className="w-100 justify-content-start py-2">
                  {tourData?.rating &&
                    [...Array(tourData?.rating)]?.map(
                      (star: any, index: number) => {
                        return (
                          <AiFillStar
                            key={index}
                            size={20}
                            style={{
                              color: "#f7de26",
                              width: "fit-content",
                              paddingLeft: "0px",
                              paddingRight: "0px",
                              marginTop: "0px",
                            }}
                            className="d-flex"
                          />
                        );
                      }
                    )}
                  {tourData.rating &&
                    [...Array(5 - tourData?.rating)]?.map((index: number) => {
                      return (
                        <AiOutlineStar
                          key={index}
                          size={20}
                          style={{
                            color: "f7de26",
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
              </div>
              <span
                className="medium"
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  color: "#818181",
                  marginBottom: 10,
                }}
              >
                <span
                  className="normal"
                  style={{
                    // fontSize: 20,
                    fontWeight: "600",
                    color: "#75abdc",
                  }}
                >
                  {tourData?.noOfDays - 1}N/{tourData?.noOfDays}D
                </span>
              </span>
              <Row
                className="align-items-center small d-flex border border-0"
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  color: "#818181",
                  marginBottom: 10,
                }}
              >
                <Col className="p-0 m-0">
                  <select
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                      background: "transparent",
                      // fontSize: "16px",
                      fontWeight: "700",
                      color: "rgb(134, 133, 133)",
                    }}
                    className="form-select w-100 normal border-0 pointer p-0"
                    aria-label="Default select example"
                  >
                    {tourData?.packagePrice?.map(
                      (price: string, index: number) => (
                        <option key={index} className={"w-100"} value={price}>
                          {price}
                        </option>
                      )
                    )}
                  </select>
                </Col>
              </Row>
            </Col>
            <Col
              lg={12}
              md={12}
              className="col-5 justify-content-center flex-column align-item-center d-flex"
            >
              <button
                className={`view-more-button w-100 ${
                  screenSize?.screenSize < 767
                    ? "normal"
                    : screenSize?.screenSize > 767 &&
                      screenSize?.screenSize < 969
                    ? "fs-medium"
                    : "fs-auto"
                }`}
                onClick={() => setShowBookingModal(true)}
                style={{
                  width: 154,
                  height: 53,
                  fontWeight: "700",
                  color: "#FFFFFF",
                  backgroundColor: "#75abdc",
                  borderRadius: 0,
                  borderWidth: 0,
                }}
              >
                Buy Now
              </button>
              <h4 className="fw-bold py-3 my-0">Arrival Date</h4>
              <div
                className="w-100"
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  marginBottom: 10,
                  marginLeft: 0,
                }}
              >
                <span
                  className="w-100"
                  style={{
                    padding: "5px 5px",
                    borderRadius: 0,
                    backgroundColor: "#F5F5F5",
                    color: "#6F82D3",
                    fontSize: 20,
                    fontWeight: "400",
                  }}
                >
                  <input
                    className="border-0 bg-transparent w-100"
                    min={minDate}
                    onChange={(e) =>
                      dispatch({
                        type: SET_SELECTED_TOUR_DEPARTURE_DATE,
                        payload: e.target.value,
                      })
                    }
                    type="date"
                  />
                </span>
              </div>
            </Col>
          </div>
          {/* <p
            className="p-0 m-0"
            style={{
              fontSize: 35,
              fontWeight: "600",
              color: "#1C1C1C",
            }}
          >
            {tour.title}
          </p>
          <div className="p-0 m-0">
            {" "}
            <Row className="w-100 justify-content-center">
              {tourData?.rating &&
                [...Array(tourData?.rating)]?.map(
                  (star: any, index: number) => {
                    return (
                      <AiFillStar
                        key={index}
                        size={15}
                        style={{
                          color: "#f7de26",
                          width: "fit-content",
                          paddingLeft: "0px",
                          paddingRight: "0px",
                          marginTop: "0px",
                        }}
                        className="d-flex"
                      />
                    );
                  }
                )}
              {tourData.rating &&
                [...Array(5 - tourData?.rating)]?.map((index: number) => {
                  return (
                    <AiOutlineStar
                      key={index}
                      size={15}
                      style={{
                        color: "f7de26",
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
          </div>
          <p
            className="p-0 m-0"
            style={{
              fontSize: 23,
              fontWeight: "600",
              color: "#75abdc",
              marginTop: -10,
            }}
          >
            {tour.noOfDays - 1}N/{tour.noOfDays}D
          </p>

          <span
            style={{
              padding: "5px 5px",
              borderRadius: 0,
              backgroundColor: "#F5F5F5",
              color: "#6F82D3",
              fontSize: 20,
              fontWeight: "400",
            }}
          >
            <select
              style={{
                WebkitAppearance: "none",
                MozAppearance: "none",
                background: "transparent",
                fontSize: "16px",
                fontWeight: "700",
                color: "rgb(134, 133, 133)",
              }}
              className="form-select pointer border border-0 w-100"
              aria-label="Default select example"
            >
              {tourData?.bookingPrice?.map((price: string, index: number) => (
                <option className={"p-0 m-0"} key={index} value={price}>
                  {price}
                </option>
              ))}
            </select>
          </span>
          <button
            onClick={() =>
              isLoggedIn ? history.push("/checkout") : handleShow
            }
            style={{
              width: 164,
              height: 53,
              fontSize: 28,
              fontWeight: "700",
              color: "#FFFFFF",
              backgroundColor: "#75abdc",
              borderRadius: 0,
              borderWidth: 0,
            }}
          >
            Book Now
          </button>
          <h4 className="fw-bold">Arrival Date</h4>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginBottom: 10,
              marginLeft: 0,
            }}
          >
            <span
              style={{
                padding: "5px 5px",
                borderRadius: 0,
                backgroundColor: "#F5F5F5",
                color: "#6F82D3",
                fontSize: 20,
                fontWeight: "400",
              }}
            >
              <input
                className="border-0 bg-transparent"
                onChange={(e) =>
                  dispatch({
                    type: SET_SELECTED_TOUR_DEPARTURE_DATE,
                    payload: e.target.value,
                  })
                }
                type="date"
              />
            </span>
          </div> */}
        </Col>
      </Row>

      {/* Add the login prompt modal here */}
      <div style={styles.placesContainer}>
        <p
          style={{
            fontSize: 30,
            fontWeight: "600",
          }}
        >
          Places You'll See
        </p>
        <div style={styles.placesList}>
          {tour?.imageUri?.slice(1)?.map((img, index) => (
            <div key={index} style={styles.placeContainer}>
              <img
                loading="lazy"
                src={`https://drive.google.com/thumbnail?sz=w2000&id=${
                  tour?.imageUri?.slice(1)[index]
                }`}
                alt={`Place ${index + 1}`}
                style={styles.placeImage}
              />
              {/* <span style={styles.placeName}>{place}</span> */}
            </div>
          ))}
        </div>
      </div>

      <div>
        <ul className="input-group d-flex p-0 text-center">
          <Col className="border border-top-0 border-end-0 border-start-0 p-1 w-100 text-decoration-none text-dark">
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ color: "#666" }}
              onClick={() => setId("#itinerary")}
              href="#includes"
            >
              Includes
            </a>
          </Col>
          <Col className="border border-top-0 border-end-0 border-start-0 p-1 w-100 text-dark">
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ color: "#666" }}
              onClick={() => setId("#about")}
              href="#about"
            >
              About
            </a>
          </Col>
          <Col className="border border-top-0 border-end-0 border-start-0 p-1 w-100 text-decoration-none text-dark">
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ color: "#666" }}
              onClick={() => setId("#highlights")}
              href="#highlights"
            >
              Highlights
            </a>
          </Col>
          <Col className="border border-top-0 border-end-0 border-start-0 p-1 w-100 text-decoration-none text-dark">
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ color: "#666" }}
              onClick={() => setId("#itinerary")}
              href="#itinerary"
            >
              Itinerary
            </a>
          </Col>
        </ul>
      </div>
      <div id="includes" style={styles.aboutSection}>
        <h2 style={styles.sectionHeading}>Includes</h2>
        <div
          className="pl-3 flex-wrap"
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: 10,
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          {tourData?.includes?.map((item) => (
            <span
              key={item}
              style={{
                padding: "5px 10px",
                borderRadius: 0,
                backgroundColor: "#F0F4FF",
                color: "#000000",
                fontSize: 14,
                fontWeight: "400",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div id="about" style={styles.aboutSection}>
        <h2 style={styles.sectionHeading}>About</h2>
        {(showAllDescription
          ? tour?.description
          : tour?.description?.slice(0, 2)
        )?.map((desc, index) => (
          <p key={index} style={styles.aboutText}>
            {desc}
          </p>
        ))}
        <a
          className="pl-3"
          style={{
            fontSize: 16,
            color: "#75abdc",
            fontWeight: "600",
            textDecorationLine: "none",
          }}
          onClick={(e) => {
            e.preventDefault();
            setShowAllDescription(!showAllDescription);
          }}
        >
          {showAllDescription ? "Read Less" : "Read More"}
        </a>
      </div>
      <div id="highlights" style={styles.aboutSection}>
        <h2 style={styles.sectionHeading}>Highlights</h2>
        <ul className="list-unstyled" style={styles.highlightList}>
          {tour?.highlights?.map((highlight, index) => (
            <li
              key={index}
              style={{
                fontSize: 16,
                fontWeight: "400",
                margin: 5,
                color: "#2E2E2E",
                marginLeft: "20px",
              }}
            >
              <Row>
                <span
                  className="p-2 p-0 m-0"
                  style={{
                    width: "10px",
                    fontSize: 20,
                    color: "#75abdc",
                  }}
                >
                  •
                </span>{" "}
                <Col className="w-100">{highlight}</Col>
              </Row>
            </li>
          ))}
        </ul>
      </div>
      <div id="itinerary" style={styles.aboutSection}>
        <h2 style={styles.sectionHeading}>Itinerary</h2>
        <div style={styles.daysPlanContainer}>
          <h2 style={styles.daysPlanTitle}>Days Plan</h2>
          {(showAllItinerary
            ? tour?.itinerary
            : tour?.itinerary?.slice(0, 4)
          )?.map((item: string[], index: number) => (
            <div style={styles.dayContainer} key={index}>
              <div style={styles.verticalLine}></div>
              <div style={styles.dayDot}></div>
              <div style={styles.dayContent}>
                <p style={styles.dayTitle} className="p-0 m-0">
                  {"Day " + (index + 1)}
                </p>
                {/* {item?.slice(1)?.map((place: string, i: number) => ( */}
                <p className="p-0 m-0" style={styles.daySubtitle}>
                  {item[0]}
                </p>
                <Row className="pb-2">
                  {item?.slice(1)?.map((place: string, i: number) => (
                    <li key={i} style={styles.dayDescription}>
                      {place}
                    </li>
                  ))}
                </Row>
              </div>
            </div>
          ))}
          {showAllItinerary && (
            <div style={styles.dayContainer}>
              <div style={styles.verticalLine} className="mb-3"></div>
              <div style={styles.dayDot}></div>
              <p style={styles.dayTitle} className="p-0 m-0">
                {"Departure"}
              </p>
            </div>
          )}
          <Button
            className={`${
              screenSize?.screenSize < 767
                ? "normal"
                : screenSize?.screenSize > 767 && screenSize?.screenSize < 969
                ? "fs-medium"
                : "fs-auto"
            }`}
            onClick={() => {
              setShowAllItinerary(!showAllItinerary);
            }}
            style={{
              marginTop: isMobile ? "42px" : 0,
              width: 154,
              fontWeight: "700",
              color: "#FFFFFF",
              backgroundColor: "#75abdc",
              borderRadius: 0,
              borderWidth: 0,
            }}
          >
            {showAllItinerary ? "View Less" : "View More"}
          </Button>
          <Row
            md={10}
            xs={8}
            sm={10}
            lg={3}
            className="col gap-2 float-end justify-content-end  flex-column flex-lg-row flex-md-row"
          >
            <Col
              className="align-content-center"
              style={{
                width: 154,
                padding: "5px 5px",
                borderRadius: 0,
                backgroundColor: "#F5F5F5",
                color: "#6F82D3",
                fontSize: 20,
                fontWeight: "400",
              }}
            >
              <select
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  background: "transparent",
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "rgb(134, 133, 133)",
                }}
                className="form-select pointer p-0 m-0 text-center border border-0 w-100"
                aria-label="Default select example"
              >
                {tourData?.bookingPrice?.map((price: string, index: number) => (
                  <option className={"p-0 m-0"} key={index} value={price}>
                    {price}
                  </option>
                ))}
              </select>
              {/* 
              {tourData?.packagePrice?.length > 0 &&
                tourData?.packagePrice[0]?.split(" ")[0]} */}
            </Col>
            <Button
              onClick={() =>
                isLoggedIn ? history.push("/checkout") : handleShow()
              }
              className={`${
                screenSize?.screenSize < 767
                  ? "normal"
                  : screenSize?.screenSize > 767 && screenSize?.screenSize < 969
                  ? "fs-medium"
                  : "fs-auto"
              }`}
              style={{
                width: 154,
                fontWeight: "700",
                color: "#FFFFFF",
                backgroundColor: "#75abdc",
                borderRadius: 0,
                borderWidth: 0,
              }}
            >
              Book Now
            </Button>
            {/* <Col
              style={{
                padding: "5px 5px",
                borderRadius: 0,
                backgroundColor: "#F5F5F5",
                color: "#6F82D3",
                fontSize: 20,
                fontWeight: "400",
              }}
            > */}
            {/* <select
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  background: "transparent",
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "rgb(134, 133, 133)",
                }}
                className="form-select pointer border border-0 w-100"
                aria-label="Default select example"
              >
                {tourData?.packagePrice?.map((price: string, index: number) => (
                  <option key={index} value={price}>
                      {price.split(" ")[0]}
                    {/* {tourData?.packagePrice.length === 1 && " INR"} 
                  </option>
                ))}
              </select> */}

            {/* {tourData?.packagePrice?.length > 0 &&
                tourData?.packagePrice[0]?.split(" ")[0]}
            </Col>
            <button
              onClick={() => history.push("/checkout")}
              style={{
                width: 164,
                height: 48,
                fontSize: 28,
                fontWeight: "700",
                color: "#FFFFFF",
                backgroundColor: "#75abdc",
                borderRadius: 0,
                borderWidth: 0,
              }}
            >
              Buy Now
            </button>*/}
          </Row>
        </div>
      </div>
      <img
        loading="lazy"
        src={require("../../../Assets/mahatma.png")}
        alt={"Main Tour Image"}
        className="w-100 position-relative h-50"
      />
      <LoginPromptModal
        show={showLoginModal}
        handleClose={() => handleClose()}
      />
      <BookingPromptModal
        show={showBookingModal}
        handleClose={() => handleClose()}
        onClick={() => (isLoggedIn ? history.push("/checkout") : handleShow())}
      />
    </div>
  );
};

export default TourDetailCard;
