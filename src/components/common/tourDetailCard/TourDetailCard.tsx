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
} from "react-bootstrap";
import { FaPlane } from "react-icons/fa";
import style from "./TourDetailCard.module.scss";
import { BsShare } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";
import MainContainer from "../container/MainContainer";
import Tick from "../icon/tick";
import { Link, useHistory, useLocation } from "react-router-dom";
import { getPackageDetailsByPackageIdApi } from "../../../api/getPackageDetailsByPackageIdApi";
import { useDispatch, useSelector } from "react-redux";
import { selectTourData } from "../../../state/selectors/selectTourData";
import {
  SET_SELECTED_TOUR_DATA,
  selectedTourDataDto,
} from "../../../state/actions/types/tourDataActionType";
import { parseTourData } from "../../../utils/parseTourData";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { countries } from "../enum/countryCode";
import { countryCode } from "../../../utils/countryCodes";
import { departureData, styles } from "./TourUiData";

const TourDetailCard: FC = () => {
  const tourData = useSelector(selectTourData);
  const [tour, setTour] = useState<selectedTourDataDto>(tourData);
  const [count, setCount] = useState(0);
  const [showAllItinerary, setShowAllItinerary] = useState(false);
  const [showAllDescription, setShowAllDescription] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [flagCode, setFlagCode] = useState("");
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
    <div style={styles.card}>
      <div style={styles.mainImageContainer}>
        <img
          src={require("../../../Assets/america.png")}
          alt={"Main Tour Image"}
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
              className="form-select pointer border border-0 w-100"
              aria-label="Default select example"
            >
              {tourData?.packagePrice?.map((price: string, index: number) => (
                <option key={index} value={price}>
                  {price}
                  {tourData?.packagePrice.length === 1 && " INR"}
                </option>
              ))}
            </select>
          </span>
          <button
            onClick={() => history.push("/checkout")}
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
            Buy Now
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
              <input className="form-select border border-0" type="date" />
            </span>
            {/* ))} */}
          </div>
        </div>
      </div>
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
          {tour?.destinations?.map((place, index) => (
            <div key={index} style={styles.placeContainer}>
              <img
                src={require("../../../Assets/america.png")}
                alt={`Place ${index + 1}`}
                style={styles.placeImage}
              />
              <span style={styles.placeName}>{place}</span>
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
        {tour?.description
          ?.slice(showAllDescription ? 0 : 2)
          ?.map((desc, index) => (
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
        <ul style={styles.highlightList}>
          {tour?.highlights?.map((highlight, index) => (
            <li
              key={index}
              style={{
                fontSize: 16,
                fontWeight: "400",
                margin: 5,
                color: "#2E2E2E",
              }}
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>
      <div id="itinerary" style={styles.aboutSection}>
        <h2 style={styles.sectionHeading}>Itinerary</h2>
        <div style={styles.daysPlanContainer}>
          <h2 style={styles.daysPlanTitle}>Days Plan</h2>
          {tour?.itinerary
            ?.slice(showAllItinerary ? 0 : 4)
            ?.map((item: string[], index: number) => (
              <div style={styles.dayContainer} key={index}>
                <div style={styles.verticalLine}></div>
                <div style={styles.dayDot}></div>
                <div style={styles.dayContent}>
                  <p style={styles.dayTitle}>{item[0]}</p>
                  {item?.slice(1)?.map((place: string, i: number) => (
                    <p key={i} style={styles.daySubtitle}>
                      {place}
                    </p>
                  ))}
                  {/* {item.description && (
                  <p style={styles.dayDescription}>{item.description}</p>
                )} */}
                </div>
              </div>
            ))}
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
        </div>
      </div>
    </div>
  );
};

export default TourDetailCard;
