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

interface LoginPromptModalProps {
  show: boolean;
  handleClose: () => void;
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
const TourDetailCard: FC = () => {
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

  const handleClose = () => setShowLoginModal(false);
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
      <div style={styles.mainImageContainer}>
        <img
          src={
            tour?.imageUri?.length > 0 && tour.imageUri[0] !== ""
              ? `https://drive.google.com/thumbnail?sz=w2000&id=${tour.imageUri[1]}`
              : "https://drive.google.com/thumbnail?sz=w2000&id=1Cgy6eNCJJvCF1cRC6NSd1OedYI9zCD96"
          }
          alt={"Main Tour Image"}
          loading="lazy"
          style={styles.mainImage}
        />
        <div style={styles.mainText}>
          <p
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
              color: "#879DFF",
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
              backgroundColor: "#879DFF",
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
          </div>
        </div>
      </div>

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
        <ul className="input-group d-flex">
          <Col className="border border-top-0 border-end-0 border-start-0 p-3 w-100 text-dark">
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ color: "#666" }}
              onClick={() => setId("#about")}
              href="#about"
            >
              About
            </a>
          </Col>
          <Col className="border border-top-0 border-end-0 border-start-0 p-3 w-100 text-decoration-none text-dark">
            <a
              className="text-decoration-none text-dark fw-bold"
              style={{ color: "#666" }}
              onClick={() => setId("#highlights")}
              href="#highlights"
            >
              Highlights
            </a>
          </Col>
          <Col className="border border-top-0 border-end-0 border-start-0 p-3 w-100 text-decoration-none text-dark">
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
            color: "#879DFF",
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
              <span
                className="p-2"
                style={{
                  fontSize: 20,
                  color: "#879DFF",
                }}
              >
                •
              </span>{" "}
              {highlight}
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
            className="view-more-button"
            onClick={() => {
              setShowAllItinerary(!showAllItinerary);
            }}
            style={{
              backgroundColor: "#4A90E2",
              fontSize: 15,
              fontWeight: "600",
              color: "#FFFFFF",
              border: "none",
              borderRadius: 0,
              alignSelf: "center",
              margin: "20px auto 0",
            }}
          >
            {showAllItinerary ? "View Less" : "View More"}
          </Button>
          <Row
            md={10}
            xs={8}
            sm={10}
            lg={3}
            className="col gap-2 float-end justify-content-end"
          >
            <Col
              className="align-content-center"
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
            <button
              onClick={() =>
                isLoggedIn ? history.push("/checkout") : handleShow()
              }
              style={{
                width: 164,
                height: 48,
                fontSize: 28,
                fontWeight: "700",
                color: "#FFFFFF",
                backgroundColor: "#879DFF",
                borderRadius: 0,
                borderWidth: 0,
              }}
            >
              Book Now
            </button>
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
                backgroundColor: "#879DFF",
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
      <LoginPromptModal show={showLoginModal} handleClose={() => handleClose} />
    </div>
  );
};

export default TourDetailCard;
